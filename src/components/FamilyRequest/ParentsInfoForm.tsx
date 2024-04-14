import { FieldValues, useForm } from "react-hook-form";
import { useCountries } from "../Hooks/useCountries";
import useRegFormContext from "../Hooks/useRegFormContex";
import generalStyle from '/src/GeneralStyle.module.css';
import Calendar from '../ReusableComponents/Calendar';
import z from 'zod';
import { setCountryFirst, sortCountries } from "../../Utilities";
import { zodResolver } from "@hookform/resolvers/zod";


interface Props {
    isModalOpen: boolean;
    toggleModal: (isOpen: boolean) => void;
}


const schema = z.object({
  name: z.string().min(1, 'Este campo es requerido.'),
  birthDate: z.date({
          errorMap: (issue, { defaultError }) => ({
            message: issue.code === "invalid_date" ? 'La fecha es requerida.' : defaultError,
          }),
        }).refine(data => data <= new Date(), { message: 'La fecha debe ser en el pasado.'}),
  birthCountry: z.string().min(1, 'Este campo es requerido'),
  birthCity: z.string().min(1, 'Este campo es requerido.'),
  residencePlace: z.string().min(1, 'Este campo es requerido'),
  sex: z.string().min(1, 'Este campo es requerido.')
});

type FormData = z.infer<typeof schema>;

const ParentsInfoForm = ({isModalOpen, toggleModal}: Props) => {

      const {data} = useCountries();
      console.log(data);
     const {register, handleSubmit, formState: {errors, isValid}, reset, control} = useForm<FormData>({resolver: zodResolver(schema)});
    const { dispatch } = useRegFormContext();

    const countries = setCountryFirst(data?.sort(sortCountries)!, 'DOM');

    const onSubmit = (data: FieldValues) => {
        dispatch({type: 'SET_PARENTS_INFO', data});
        reset();
        toggleModal(false);
    }

    return <>
       { isModalOpen && <div className={`modal fade ${isModalOpen ? 'show' : ''}`} id="exampleModalCenteredScrollable" tabIndex={-1} aria-labelledby="exampleModalCenteredScrollableTitle" aria-modal="true" role="dialog" style={{display: 'block'}}>
          <div className={`modal-dialog modal-dialog-centered modal-dialog-scrollable ${isModalOpen ? '' : 'collapse'}` }>
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5 fw-bold" id="exampleModalCenteredScrollableTitle">Agregar Padre / Madre</h1>
            <button onClick={()=> toggleModal(false)} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className={generalStyle['padding-x-2']+ ' '+ generalStyle['padding-y-1']+" modal-body"}>
                <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="mb-3 fw-bold">
                        <label htmlFor="name" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="name" {...register('name')}/>
                         { errors.name && <div className="alert alert-danger mt-2">
                                                    <div> {errors.name?.message}</div></div> }
                      </div>

                      <div className="mb-3 fw-bold">
                        <label htmlFor="birthDate" className="form-label">Fecha de Nacimiento</label>
                        <Calendar name="birthDate" control={control}/>
                        { errors.birthDate && <div className="alert alert-danger mt-2">
                                                    <div> {errors.birthDate?.message}</div></div> }
                      </div>

                       <div className="mb-3 fw-bold">
                        <label htmlFor="birthCountry" className="form-label">Pais de Nacimiento</label>
                        <select className={"form-select"} {...register('birthCountry')} id="birthCountry" >
                        <option value=""></option>
                        {countries?.map(country => <option key={country.fifa} value={country.fifa}>{country.name.common}</option>)}
                        </select>
                        { errors.birthCountry && <div className="alert alert-danger mt-2">
                                                    <div> {errors.birthCountry?.message}</div></div> }
                        {/* <input type="text" className="form-control" id="birthCountry" {...register('birthCountry')}/> */}
                      </div>

                      <div className="mb-3 fw-bold">
                        <label htmlFor="birthCity" className="form-label">Ciudad de Nacimiento</label>
                        <input type="text" className="form-control" id="birthCity" {...register('birthCity')}/>
                         { errors.birthCity && <div className="alert alert-danger mt-2">
                                                    <div> {errors.birthCity?.message}</div></div> }
                      </div>

                      <div className="mb-3 fw-bold">
                        <label htmlFor="residencePlace" className="form-label">Lugar de Residencia</label>
                        <input type="text" className="form-control" id="residencePlace" {...register('residencePlace')}/>
                        { errors.residencePlace && <div className="alert alert-danger mt-2">
                                                    <div> {errors.residencePlace?.message}</div></div> }
                      </div>
                      <div className="mb-3">
                         <label htmlFor="sex" className="form-label fw-bold">Sexo</label>
                       <select className="form-select mr-1" id="sex" {...register('sex')}>
                            <option value=""></option>
                            <option value="Mas">Hombre</option>
                            <option value="Fem">Mujer</option>
                       </select>
                       { errors.sex && <div className="alert alert-danger mt-2">
                                                    <div> {errors.sex?.message}</div></div> }
                       </div>

                       <div className="modal-footer">
                            <button onClick={()=> toggleModal(false)} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button type="submit" className="btn btn-primary">Agregar</button>
                        </div>
                </form>
          </div>
        </div>
          </div>
        </div>}
        {isModalOpen && <div className="modal-backdrop show fade"></div>}
    </>
}

export default ParentsInfoForm;