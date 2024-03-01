import styles from './MarriageInfo.module.css';
import { useForm, FieldValues } from 'react-hook-form';
import useRegFormContext from '../Hooks/useRegFormContex';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const MarriageInfo = () => {

     const { register, handleSubmit, reset, formState: {errors, isValid} } = useForm();
     const {state, dispatch} = useRegFormContext();
     const navigate = useNavigate();

        useEffect(()=> {
            console.log(state);
            dispatch({type: 'CHANGE_PERCENT', data: state.percent ? state.percent  + 20: 0});
        }, [])

     const onSubmit = (data: FieldValues) => {
        if(isValid) {
            dispatch({type: 'SET_MARRIAGE_INFO', data});
            navigate('/peticion-familiar/parents-info');
        }
     }

    return <form  className={styles['marital-info-form']+" mt-4"} onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles['marital-info-main']}>
                        <div className={styles['marital-info']}>
                        <div className={styles['marital-general-info']}>
                                <div className="mb-3 fw-bold">
                                    <label htmlFor="marriages" className="form-label">¿Cuántas veces ha estado casado(a)?</label>
                                    <input type="text" className="form-control" id="marriages" {...register('marriages')}/>
                                </div>
                                <div className="mb-3 fw-bold">
                                    <label htmlFor="maritialStatus" className="form-label">Estado marital</label>
                                    <select className="form-select mr-1" id="maritialStatus" {...register('maritialStatus')}>
                                        <option value=""></option>
                                        <option value="single">Soltero</option>
                                        <option value="married">Casado</option>
                                    </select>
                                </div>
                                <div className="mb-3 fw-bold">
                                    <label htmlFor="currentMarriageDate" className="form-label">Fecha de su matrimonio actual</label>
                                    <input type="date" className="form-control" id="currentMarriageDate" {...register('currentMarriageDate')}/>
                                </div>
                            </div>
                            <div className="mb-3">
                                <span className="mb-3 d-block h5">Lugar de matrimonio:</span>
                                <div className="mb-3">
                                    <label htmlFor="marriagePlaceCountry" className="form-label fw-bold">Pais</label>
                                    <input type="text" className="form-control" id="marriagePlaceCountry" {...register('marriagePlaceCity')}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="marriagePlaceCity" className="form-label fw-bold">Ciudad</label>
                                    <input type="text" className="form-control" id="marriagePlaceCity" {...register('marriagePlaceCity')}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="marriagePlaceState" className="form-label fw-bold">Estado o Provincia</label>
                                    <input type="text" className="form-control" id="marriagePlaceState" {...register('marriagePlaceState')}/>
                                </div>
                            </div>
                        </div>
                        <button className={styles['btn-sunrise-primary']+" btn"} type="submit">Siguiente</button>
                        </div>
                    </form>                 
}

export default MarriageInfo;