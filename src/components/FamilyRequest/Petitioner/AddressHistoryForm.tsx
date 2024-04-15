
import { useForm, FieldValues } from 'react-hook-form';
import useRegFormContext from '../../Hooks/useRegFormContex';
import styles from './AddressHistoryForm.module.css';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Calendar from '../../ReusableComponents/Calendar';

interface Props {
    isModalOpen: boolean;
    toggleModal: (isOpen: boolean) => void;
}

const schema = z.object({
    street: z.string().min(1,{message: 'Este campo es requerido.' }),
    aprt: z.string().min(1, {message: 'El no. de apartamento es requerido.'}),
    city: z.string().min(1, {message: 'El no. de apartamento es requerido.'}),
    state: z.string().min(1, {message: 'Este campo es requerido.'}),
    postalCode: z.string().min(1, {message: 'Este campo es requerido'}),
    sinceDate: z.date({
          errorMap: (issue, { defaultError }) => ({
            message: issue.code === "invalid_date" ? 'La fecha es requerida.' : defaultError,
          }),
        }).refine(data => data <= new Date(), { message: 'La fecha debe ser en el pasado.'}),
    toDate: z.date({
          errorMap: (issue, { defaultError }) => ({
            message: issue.code === "invalid_date" ? 'La fecha es requerida.' : defaultError,
          }),
        }).refine(data => data <= new Date(), { message: 'La fecha debe ser en el pasado.'})
        
}).refine(data => data.sinceDate < data.toDate, {message: 'La fecha de finalización debe ser después que la de inicio.', path: ['toDate']});

type FormData = z.infer<typeof schema>;

const AddressHistoryForm = ({isModalOpen, toggleModal}: Props) => {

    const {register, handleSubmit, formState: {errors, isValid}, reset, control} =useForm<FormData>({resolver: zodResolver(schema)});
    const { dispatch } = useRegFormContext();
  
    const onSubmit = (data: FieldValues) => {
        dispatch({type: 'SET_ADDRESS_HISTORY', data});
        reset();
        toggleModal(false);
    }

    return <>
       { isModalOpen && <div className={`modal fade ${isModalOpen ? 'show' : ''}`} id="exampleModalCenteredScrollable" tabIndex={-1} aria-labelledby="exampleModalCenteredScrollableTitle" aria-modal="true" role="dialog" style={{display: 'block'}}>
          <div className={`modal-dialog modal-dialog-centered modal-dialog-scrollable ${isModalOpen ? '' : 'collapse'}` }>
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5 fw-bold" id="exampleModalCenteredScrollableTitle">Dirección</h1>
            <button onClick={()=> {
              reset();
              toggleModal(false);
            }} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className={styles['address-history-form']+" modal-body"}>
                <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="mb-3 fw-bold">
                        <label htmlFor="street" className="form-label">Calle</label>
                        <input type="text" className="form-control" id="street" {...register('street')}/>
                         { errors.street && <div className="alert alert-danger mt-2">
                                                    <div> {errors.street?.message}</div></div> }
                      </div>

                      <div className="mb-3 fw-bold">
                        <label htmlFor="aprt" className="form-label">Aprt #</label>
                        <input type="text" className="form-control" id="aprt" {...register('aprt')}/>
                        { errors.aprt && <div className="alert alert-danger mt-2">
                                                    <div> {errors.aprt?.message}</div></div> }
                      </div>

                       <div className="mb-3 fw-bold">
                        <label htmlFor="addresshistorycity" className="form-label">Ciudad</label>
                        <input type="text" className="form-control" id="addresshistorycity" {...register('city')}/>
                        { errors.city && <div className="alert alert-danger mt-2">
                                                    <div> {errors.city?.message}</div></div> }
                      </div>

                      <div className="mb-3 fw-bold">
                        <label htmlFor="addresshistorystate" className="form-label">Estado</label>
                        <input type="text" className="form-control" id="addresshistorystate" {...register('state')}/>
                        { errors.state && <div className="alert alert-danger mt-2">
                                                    <div> {errors.state?.message}</div></div> }
                      </div>

                      <div className="mb-3 fw-bold">
                        <label htmlFor="addresshistorypostalcode" className="form-label">Codigo Postal</label>
                        <input type="text" className="form-control" id="addresshistorypostalcode" {...register('postalCode')}/>
                        { errors.postalCode && <div className="alert alert-danger mt-2">
                                                    <div> {errors.postalCode?.message}</div></div> }
                      </div>

                      <div className="mb-3 fw-bold">
                        <label htmlFor="sinceDate" className="form-label">Desde</label>
                        <Calendar name="sinceDate" control={control}/>
                        {/* <input type="date" className="form-control" id="sinceDate" {...register('sinceDate', {valueAsDate: true})}/> */}
                        { errors.sinceDate && <div className="alert alert-danger mt-2">
                                                    <div> {errors.sinceDate?.message}</div></div> }
                      </div>

                      <div className="mb-3 fw-bold">
                        <label htmlFor="toDate" className="form-label">Hasta</label>
                        {/* <input type="date" className="form-control" id="toDate" {...register('toDate', {valueAsDate: true})}/> */}
                        <Calendar name="toDate" control={control}/>
                        { errors.toDate && <div className="alert alert-danger mt-2">
                        <div> {errors.toDate?.message}</div></div> }
                      </div>
                       <div className="modal-footer">
                            <button onClick={()=> {
                              reset();
                              toggleModal(false)
                              }} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
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

export default AddressHistoryForm;
