import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeFamReqPercent } from '../../../GlobalState/FamilyRequest/familyRequestPetSlice';
import { RootState } from '../../../GlobalState/store';
import styles from './AddressHistory.module.css';
import AddressHistoryForm from './AddressHistoryForm';



const AddressHistory = () => {

    // const {state, dispatch} = useRegFormContext();
     const state = useSelector((state: RootState) => state.familyRequestPet);
     const dispatch = useDispatch();
    const navigate = useNavigate();



    const addressHistory = state.petAddressHistory ? state.petAddressHistory : [];

    console.log(addressHistory);

    const [isModalOpen, toggleModal] = useState(false);

    useEffect(()=> {
        dispatch(changeFamReqPercent(5));
    }, [])

    const onNavigate = () => {
        navigate('/peticion-familiar/marriage-info')
    }

    return  <div className={styles['address-history'] + " mb-3 mt-2" }>
                       <span className="h5 d-block mb-4">Historial de dirección de los últimos 5 años</span>
                     <button onClick={()=> toggleModal(true)} className="btn btn-primary mb-2">Agregar Dirección</button>

                        {state.petAddressHistory.length > 0 && <table className="table table-bordered table-striped mt-3 mb-5">
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
                                    <td>{address.street as string}</td>
                                    <td>{address.aprt as string}</td>
                                    <td>{address.city as string}</td>
                                    <td>{address.state as string}</td>
                                    <td>{address.postalCode as string}</td>
                                    <td>{address.sinceDate as string}</td>
                                    <td>{(address.toDate as string)}</td>
                                </tr>)}
                            </tbody>
                         </table>}
                         <button disabled={!(state.petAddressHistory.length > 0)} onClick={onNavigate} className={styles['btn-sunrise-primary']+" btn mt-1"}>Siguiente</button>

                         <AddressHistoryForm toggleModal={(isOpen) => toggleModal(isOpen)} isModalOpen={isModalOpen}/>
                     </div>
}

export default AddressHistory;