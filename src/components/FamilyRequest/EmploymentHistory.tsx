import styles from './EmoploymentHistory.module.css';
import useRegFormContext from '../Hooks/useRegFormContex';
import { useEffect, useState } from 'react';
import generalStyle from '/src/GeneralStyle.module.css';
import EmploymentHistoryForm from './EmploymentHistoryForm';

const EmploymentHistory = () => {

     const {state, dispatch} = useRegFormContext();
     const [isModalOpen, toggleModal] = useState(false);

      useEffect(()=> {
            dispatch({type: 'CHANGE_PERCENT', data: state.percent ? state.percent  + 20: 0});
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
                            {state.employmentHistory.map((employment, index) => <tr key={index}>
                                <td>{employment.enterpriseName}</td>
                                <td>{employment.enterpriseAddress}</td>
                                <td>{employment.occupation}</td>
                                <td>{employment.sinceDate}</td>
                                <td>{employment.toDate}</td>
                            </tr>)}
                        </tbody>
                    </table>
                    <button onClick={()=> 
                        { console.log(state)
                           dispatch({type: 'CHANGE_PERCENT', data: state.percent ? state.percent  + 20: 0});
                        }
                        } className={styles['btn-sunrise-primary']+" btn"}>Completar</button>
                        <EmploymentHistoryForm toggleModal={(isOpen) => toggleModal(isOpen)} isModalOpen={isModalOpen}/>
                </div>
}

export default EmploymentHistory;