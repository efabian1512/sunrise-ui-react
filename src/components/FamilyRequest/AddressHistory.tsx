import styles from './AddressHistory.module.css';
import useRegFormContext from '../Hooks/useRegFormContex';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AddressHistoryForm from './AddressHistoryForm';


const AddressHistory = () => {

    const {state, dispatch} = useRegFormContext();
    const navigate = useNavigate();

    const addressHistory = state.addressHistory ? state.addressHistory : [];

    const [isModalOpen, toggleModal] = useState(false);

    useEffect(()=> {
        dispatch({type: 'CHANGE_PERCENT', data: 20});
    }, [])

    const onNavigate = () => {
        navigate('/peticion-familiar/marriage-info')
    }

    return  <div className={styles['address-history'] + " mb-3 mt-2" }>
                       <span className="h5 d-block mb-4">Historial de dirección de los últimos 5 años</span>
                     <button onClick={()=> toggleModal(true)} className="btn btn-primary mb-2">Agregar Dirección</button>

                        {state.addressHistory.length > 0 && <table className="table table-bordered table-striped mt-3 mb-5">
                            <thead>
                                <tr>
                                <th className="fw-bold">Nombre y Número de la Calle</th>
                                <th className="fw-bold">Aprt #</th>
                                <th className="fw-bold">Ciudad</th>
                                <th className="fw-bold">Estado</th>
                                <th className="fw-bold">Codigo Postal</th>
                                <th className="fw-bold">Desde</th>
                                 <th className="fw-bold">Hasta</th>
                                 </tr>
                            </thead>
                            <tbody>
                                {addressHistory.map((address, index) => <tr key={index}>
                                    <td>{address.street}</td>
                                    <td>{address.aprt}</td>
                                    <td>{address.city}</td>
                                    <td>{address.state}</td>
                                    <td>{address.postalCode}</td>
                                    <td>{address.sinceDate.toString()}</td>
                                    <td>{address.toDate.toString()}</td>
                                </tr>)}
                            </tbody>
                         </table>}
                         <button disabled={!(state.addressHistory.length > 0)} onClick={onNavigate} className={styles['btn-sunrise-primary']+" btn mt-1"}>Siguiente</button>

                         <AddressHistoryForm toggleModal={(isOpen) => toggleModal(isOpen)} isModalOpen={isModalOpen}/>
                     </div>
}

export default AddressHistory;