
import { useForm, FieldValues } from 'react-hook-form';
import useRegFormContext from '../Hooks/useRegFormContex';
import styles from './AddressHistoryForm.module.css';

interface Props {
    isModalOpen: boolean;
    toggleModal: (isOpen: boolean) => void;
}

const AddressHistoryForm = ({isModalOpen, toggleModal}: Props) => {

    const {register, handleSubmit, formState: {errors, isValid}, reset} =useForm();
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
            <button onClick={()=> toggleModal(false)} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className={styles['address-history-form']+" modal-body"}>
                <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="mb-3 fw-bold">
                        <label htmlFor="street" className="form-label">Calle</label>
                        <input type="text" className="form-control" id="street" {...register('street')}/>
                      </div>

                      <div className="mb-3 fw-bold">
                        <label htmlFor="aprt" className="form-label">Aprt #</label>
                        <input type="text" className="form-control" id="aprt" {...register('aprt')}/>
                      </div>

                       <div className="mb-3 fw-bold">
                        <label htmlFor="addresshistorycity" className="form-label">Ciudad</label>
                        <input type="text" className="form-control" id="addresshistorycity" {...register('city')}/>
                      </div>

                      <div className="mb-3 fw-bold">
                        <label htmlFor="addresshistorystate" className="form-label">Estado</label>
                        <input type="text" className="form-control" id="addresshistorystate" {...register('state')}/>
                      </div>

                      <div className="mb-3 fw-bold">
                        <label htmlFor="addresshistorypostalcode" className="form-label">Codigo Postal</label>
                        <input type="text" className="form-control" id="addresshistorypostalcode" {...register('postalCode')}/>
                      </div>

                      <div className="mb-3 fw-bold">
                        <label htmlFor="since" className="form-label">Desde</label>
                        <input type="date" className="form-control" id="since" {...register('since')}/>
                      </div>

                      <div className="mb-3 fw-bold">
                        <label htmlFor="toDate" className="form-label">Hasta</label>
                        <input type="date" className="form-control" id="toDate" {...register('toDate')}/>
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

export default AddressHistoryForm;
