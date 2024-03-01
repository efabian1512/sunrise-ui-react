import { FieldValues, useForm } from "react-hook-form";
import useRegFormContext from "../Hooks/useRegFormContex";
import generalStyle from '/src/GeneralStyle.module.css';


interface Props {
    isModalOpen: boolean;
    toggleModal: (isOpen: boolean) => void;
}


const ParentsInfoForm = ({isModalOpen, toggleModal}: Props) => {
     const {register, handleSubmit, formState: {errors, isValid}, reset} = useForm();
    const { dispatch } = useRegFormContext();

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
                        <label htmlFor="parentName" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="parentName" {...register('name')}/>
                      </div>

                      <div className="mb-3 fw-bold">
                        <label htmlFor="birthDate" className="form-label">Fecha de Nacimiento</label>
                        <input type="date" className="form-control" id="parentBirthDate" {...register('birthDate')}/>
                      </div>

                       <div className="mb-3 fw-bold">
                        <label htmlFor="birthCountry" className="form-label">Pais de Nacimiento</label>
                        <input type="text" className="form-control" id="birthCountry" {...register('birthCountry')}/>
                      </div>

                      <div className="mb-3 fw-bold">
                        <label htmlFor="birthCity" className="form-label">Ciudad de Nacimiento</label>
                        <input type="text" className="form-control" id="birthCity" {...register('birthCity')}/>
                      </div>

                      <div className="mb-3 fw-bold">
                        <label htmlFor="residencePlace" className="form-label">Lugar de Residencia</label>
                        <input type="text" className="form-control" id="residencePlace" {...register('residencePlace')}/>
                      </div>
                      <div className="mb-3">
                         <label htmlFor="sex" className="form-label fw-bold">Sexo</label>
                       <select className="form-select mr-1" id="sex" {...register('sex')}>
                            <option value=""></option>
                            <option value="Mas">Hombre</option>
                            <option value="Fem">Mujer</option>
                       </select>
                       </div>

                       <div className="modal-footer">
                            <button onClick={()=> toggleModal(false)} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button disabled={!isValid}  type="submit" className="btn btn-primary">Agregar</button>
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