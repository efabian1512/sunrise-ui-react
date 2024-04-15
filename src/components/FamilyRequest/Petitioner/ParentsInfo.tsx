
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ParentsInfo.module.css';
import useRegFormContext from '../../Hooks/useRegFormContex';
import ParentsInfoForm from './ParentsInfoForm';
import generalStyle from '/src/GeneralStyle.module.css';

const ParentsInfo = () => {

    const {state, dispatch} = useRegFormContext();

    const [isModalOpen, toggleModal] = useState(false);

     useEffect(()=> {
            dispatch({type: 'CHANGE_PERCENT', data: state.percent ? state.percent  + 20: 0});
     }, [])

    const navigate = useNavigate();

    const onSubmit = () => {
        navigate('/peticion-familiar/employment-history')
    }
    return <div>
                     <span className={styles['parents-info-title'] + " h5 d-block"}>Informacion de los Padres</span>
                     <div className={styles['parents-info']}>
                         <button onClick={()=> toggleModal(true)} className="btn btn-primary mb-2">Agregar Padre / Madre</button>
                         <table className={generalStyle['stable-primary']+" table table-bordered table-striped mt-2"}>
                             <thead>
                                 <tr>
                                     <th>Nombre</th>
                                     <th>Fecha de Nacimiento</th>
                                     <th>Pais de Nacimiento</th>
                                     <th>Ciudad de Nacimiento</th>
                                     <th>Lugar de Residencia</th>
                                     <th>Sexo</th>
                                 </tr>
                             </thead>
                             <tbody>
                                 {state.parentsInfo.map((parent, index) => <tr key={index}>
                                     <td>{parent.name as string}</td>
                                    <td>{(parent.birthDate as Date).toLocaleDateString()}</td>
                                     <td>{parent.birthCountry as string}</td>
                                     <td>{parent.birthCity as string}</td>
                                     <td>{parent.residencePlace as string}</td>
                                     <td>{parent.sex as string}</td>  
                                 </tr>)}
                             </tbody>
                         </table>
                     </div> 

                     <button onClick={onSubmit} className={styles['btn-sunrise-primary']+" btn"}>Siguiente</button> 
                     <ParentsInfoForm toggleModal={(isOpen) => toggleModal(isOpen)} isModalOpen={isModalOpen}/>
                 </div>
}

export default ParentsInfo;