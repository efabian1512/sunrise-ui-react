import { FieldValues, useForm } from "react-hook-form";
import useRegFormContext from "../Hooks/useRegFormContex";
import generalStyle from '/src/GeneralStyle.module.css';



interface Props {
    isModalOpen: boolean;
    toggleModal: (isOpen: boolean) => void;
}


const EmploymentHistoryForm = ({isModalOpen, toggleModal}: Props) => {
     const {register, handleSubmit, formState: {errors, isValid}, reset} = useForm();
    const { dispatch } = useRegFormContext();

    const onSubmit = (data: FieldValues) => {
        dispatch({type: 'SET_EMPLOYMENT_HISTORY', data});
        reset();
        toggleModal(false);
    }

    return <>
       { isModalOpen && <div className={`modal fade ${isModalOpen ? 'show' : ''}`} id="exampleModalCenteredScrollable" tabIndex={-1} aria-labelledby="exampleModalCenteredScrollableTitle" aria-modal="true" role="dialog" style={{display: 'block'}}>
          <div className={`modal-dialog modal-dialog-centered modal-dialog-scrollable ${isModalOpen ? '' : 'collapse'}` }>
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5 fw-bold" id="exampleModalCenteredScrollableTitle">Información del Lugar de Trabajo</h1>
            <button onClick={()=> toggleModal(false)} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className={generalStyle['padding-x-2']+ ' '+ generalStyle['padding-y-1']+" modal-body"}>
                <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="mb-3 fw-bold">
                        <label htmlFor="enterpriseName" className="form-label">Nombre de la Empresa</label>
                        <input type="text" className="form-control" id="enterpriseName" {...register('enterpriseName')}/>
                      </div>

                      <div className="mb-3 fw-bold">
                        <label htmlFor="enterpriseAddress" className="form-label">Dirección</label>
                        <input type="text" className="form-control" id="enterpriseAddress" {...register('enterpriseAddress')}/>
                      </div>

                       <div className="mb-3 fw-bold">
                        <label htmlFor="occupation" className="form-label">Ocupación</label>
                        <input type="text" className="form-control" id="occupation" {...register('occupation')}/>
                      </div>

                      <div className="mb-3 fw-bold">
                        <label htmlFor="sinceDate" className="form-label">Desde</label>
                        <input type="date" className="form-control" id="sinceDate" {...register('sinceDate')}/>
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

export default EmploymentHistoryForm;