import styles from './PersonalInfo.module.css';
import { useForm, FieldValues } from 'react-hook-form';
import useRegFormContext from '../Hooks/useRegFormContex';
import { useNavigate } from 'react-router-dom';


const PersonalInfo = () => {
        const {state, dispatch} = useRegFormContext();
        const { register, handleSubmit, reset, formState: {isValid, errors} } = useForm();
        const navigate = useNavigate();

        const onSubmit = (data: FieldValues) => {
            console.log(data);
            if (isValid) {
                console.log('valid', data);
                dispatch({type: 'SET_COMMON_DATA', data: data});
                navigate('/peticion-familiar/address-history');
            }
        }
        return <form className={styles["personal-info-form"]} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles['personal-info-main']}>
                <h4 className="mb-0">Datos Personales:</h4>
                <hr className="mt-0"/>
                             <div className={styles['personal-info']}>
                               <div>
                                   <div className="mb-3 fw-bold">
                                        <label htmlFor="socialSecurity" className="form-label">Seguro Social</label>
                                        <input type="text" className="form-control" id="socialSecurity" {...register('socialSecurity')}/>
                                    </div>
                                     <div className="mb-3 fw-bold">
                                        <label htmlFor="fullName" className="form-label">Nombre Completo</label>
                                        <input type="text" className="form-control" id="fullName" {...register('fullName')}/>
                                    </div>
                                     <div className={styles['otherName-field'] +" fw-bold"}>
                                         <span className="mb-1 fw-bold">¿Ha usado otro nombre?</span>
                                        <div className="mt-1">
                                            <input  type="radio" value="Y" className="form-check-input me-1" id="otherNameY" {...register('otherName')}/>
                                            <label htmlFor="otherNameY" className="form-label">Si</label>
                                            <input type="radio" value="N" className="form-check-input me-1 ms-3" id="otherNameN" {...register('otherName')}/>
                                        <label htmlFor="otherNameN" className="form-label">No</label>
                                        </div>
                                    </div>
                                     <div className="mb-3 fw-bold">
                                        <label htmlFor="cityOfBirth" className="form-label">Ciudad de Nacimiento</label>
                                        <input type="text" className="form-control" id="cityOfBirth" {...register('cityOfBirth')}/>
                                    </div>
                                     <div className="mb-3 fw-bold">
                                        <label htmlFor="countryOfBirth" className="form-label">Pais de Nacimiento</label>
                                        <input type="text" className="form-control" id="countryOfBirth" {...register('countryOfBirth')}/>
                                    </div>
                               </div>
                               <div>
                                     <div className="mb-3 fw-bold">
                                        <label htmlFor="dateOfBirth" className="form-label">Fecha de Nacimiento</label>
                                        <input type="date" className="form-control" id="dateOfBirth" {...register('dateOfBirth')}/>
                                                         </div>
                                     <div className="mb-3 fw-bold">
                                        <label htmlFor="postalAddress" className="form-label">Dirección Postal</label>
                                        <input type="text" className="form-control" id="postalAddress" {...register('postalAddress')}/>
                                                         </div>
                                     <div className="mb-3 fw-bold">
                                        <label htmlFor="address" className="form-label">Dirección Fisica</label>
                                        <input type="text" className="form-control" id="address" {...register('address')}/>
                                                         </div>
                                     <div className="mb-3 fw-bold">
                                        <label htmlFor="phoneNumber" className="form-label">Telefono</label>
                                        <input type="text" className="form-control" id="phoneNumber" {...register('phoneNumber')}/>
                                                         </div>
                                     <div className="mb-3 fw-bold">
                                        <label htmlFor="email" className="form-label">Correo Electronico</label>
                                        <input type="email" className="form-control" id="email" {...register('email')}/>
                                    </div>
                
                                 </div>
                           </div>
                           <h5 className="my-4">Rasgos Fisicos</h5>
                           <div className={styles['physical-features']}>
                                    <div className="mb-3 fw-bold">
                                        <label htmlFor="race" className="form-label">Raza</label>
                                        <input type="text" className="form-control" id="race" {...register('race')}/>
                                    </div>
                                    <div className="mb-3 fw-bold">
                                        <label htmlFor="height" className="form-label">Estatura</label>
                                        <input type="number" className="form-control" id="height" {...register('height')}/>
                                    </div>
                            <div className="mb-3 fw-bold">
                                <label htmlFor="weight" className="form-label">Peso</label>
                                <input type="number" className="form-control" id="weight" {...register('weight')}/>
                            </div>
                
                            <div className="mb-3 fw-bold">
                                <label htmlFor="eyesColor" className="form-label">Color de Ojos</label>
                                <input type="text" className="form-control" id="eyesColor" {...register('eyesColor')}/>
                            </div>
                        </div>
                            <button className={styles['btn-sunrise-primary']+" btn"} type="submit">Siguiente</button>
                        </div>
                        </form>
           
}

export default PersonalInfo;