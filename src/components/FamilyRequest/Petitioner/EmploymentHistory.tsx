import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeFamReqPercent } from '../../../GlobalState/FamilyRequest/familyRequestPetSlice';
import { RootState } from '../../../GlobalState/store';
import styles from './EmoploymentHistory.module.css';
import EmploymentHistoryForm from './EmploymentHistoryForm';
import generalStyle from '/src/GeneralStyle.module.css';

const EmploymentHistory = () => {

     const state = useSelector((state: RootState) => state.familyRequestPet);
     
     const dispatch = useDispatch();
     const [isModalOpen, toggleModal] = useState(false);
     const navigate = useNavigate();

      useEffect(()=> {
            dispatch(changeFamReqPercent(5));
     }, []);
    
    return      <div className={styles['employment-history'] +" mb-3"}>
                     <span className="h5 mb-3 d-block">Historial de empleo de los últimos 5 años </span>
                      <button onClick={()=> toggleModal(true)} className="btn btn-primary mb-2">Agregar Empleo</button>
                    <table className={generalStyle['stable-primary']+" table table-bordered table-striped mt-2"}>
                        <thead>
                            <tr>
                                <th>Nombre del Empleo</th>
                                <th>Dirección</th>
                                <th>Ocupación</th>
                                <th>Desde</th>
                                <th>Hasta</th>
                            </tr>
                        </thead>
                        <tbody>
                            {state.petEmploymentHistory.map((employment, index) => <tr key={index}>
                                <td>{employment.enterpriseName as string}</td>
                                <td>{employment.enterpriseAddress as string}</td>
                                <td>{employment.occupation as string}</td>
                                <td>{(employment.sinceDate as string)}</td>
                                <td>{(employment.toDate as string)}</td>
                            </tr>)}
                        </tbody>
                    </table>
                    <button onClick={()=> 
                        { 
                           navigate('/peticion-familiar/beneficiary/beneficiary-info');
                        }
                        } className={styles['btn-sunrise-primary']+" btn"}>Siguiente</button>
                        <EmploymentHistoryForm toggleModal={(isOpen) => toggleModal(isOpen)} isModalOpen={isModalOpen}/>
                </div>
}

export default EmploymentHistory;