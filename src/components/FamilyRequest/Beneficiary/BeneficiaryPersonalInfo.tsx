import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { setCountryFirst, sortCountries } from '../../../Utilities';
import { useCountries } from '../../Hooks/useCountries';
import useRegFormContext from '../../Hooks/useRegFormContex';
import Calendar from '../../ReusableComponents/Calendar';
import styles from '../Petitioner/Personalinfo.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../GlobalState/store';
import { changeFamReqPercent } from '../../../GlobalState/FamilyRequest/familyRequestPetSlice';
import { setBenCommonData } from '../../../GlobalState/FamilyRequest/familyRequestBenSlice';

const schema = z.object({
    socialSecurity: z.string().max(9, {message: 'El seguro social solo cuenta con 9 caracteres'}).optional(),
    fullName: z.string().min(1, {message: 'El nombre completo es requerido.'}),
    otherName: z.string(),
    cityOfBirth: z.string().min(1, {message: 'Este campo es requerido.'}),
    countryOfBirth: z.string().min(1, {message: 'Este campo es requerido'}),
    dateOfBirth: z.date({
          errorMap: (issue, { defaultError }) => ({
            message: issue.code === "invalid_date" ? 'La fecha de nacimiento es requerida.' : defaultError,
          }),
        }).refine(data => data < new Date(), { message: 'La fecha de nacimiento debe ser en el pasado.'}),
    postalAddress: z.string().min(1, {message: 'La dirección es requerida postl es requerida'}),
    address: z.string().min(1, {message: 'La direccion es requerida.'}),
    phoneNumber: z.string().min(1, {message: 'El numero de telefono es requerido.'}),
    email: z.string().min(1, {message: 'El correo electrónico es requerido.'}).email('El correo electrónico es inválido.'),
    race: z.string().min(1, {message: 'Este campo es requerido.'}),
    height: z.number({invalid_type_error: 'Este campo es requerido'}).min(0.1, {message: 'El valor debe ser mayor a 0.'}),
    weight: z.number({invalid_type_error: 'Este campo es requerido'}).min(0.1, {message: 'El valor debe ser mayor a 0.'}),
    eyesColor: z.string().min(1, {message: 'Este campo es requerido.'})
});

type FormData = z.infer<typeof schema>;

const BeneficiaryPersonalInfo = () => {

        const { data } = useCountries();

        const countries = setCountryFirst(data?.sort(sortCountries)!, 'DOM');
        const state = useSelector((state: RootState) => state.familyRequestBen);

        const dispatch = useDispatch();
        const { register, handleSubmit, reset, formState: {isValid, errors}, control } = useForm<FormData>({resolver: zodResolver(schema)});
        const navigate = useNavigate();

        const onSubmit = (data: FieldValues) => {
            const info = {...data, dateOfBirth: data.dateOfBirth.toLocaleDateString()}
            if (isValid) {
                dispatch(setBenCommonData(info));
                navigate('/peticion-familiar/address-history');
            }
        }

         history.pushState(null, '', location.href);
             window.onpopstate = function(event: any) {
                 console.log(event);
             history.go(1);
        };

         useEffect(()=> {
            dispatch(changeFamReqPercent(5));
         }, []);
        
        return <form className={styles["personal-info-form"]} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles['personal-info-main']}>
                <h4 className="mb-0">Datos Personales:</h4>
                <hr className="mt-0"/>
                             <div className={styles['personal-info']}>
                               <div>
                                   <div className="mb-3 fw-bold">
                                        <label htmlFor="beneficiarySocialSecurity" className="form-label">Seguro Social (si aplica)</label>
                                        <input type="text" className="form-control" id="beneficiarySocialSecurity" {...register('socialSecurity')}/>
                                         { errors.socialSecurity && <div className="alert alert-danger mt-2">
                                                    <div> {errors.socialSecurity?.message}</div></div> }
                                    </div>
                                     <div className="mb-3 fw-bold">
                                        <label htmlFor="beneficiaryFullName" className="form-label">Nombre Completo</label>
                                        <input type="text" className="form-control" id="beneficiaryFullName" {...register('fullName')}/>
                                        { errors.fullName && <div className="alert alert-danger mt-2">
                                                    <div> {errors.fullName?.message}</div></div> }
                                    </div>
                                     <div className={styles['otherName-field'] +" fw-bold"}>
                                         <span className="mb-1 fw-bold">¿Ha usado otro nombre?</span>
                                        <div className="mt-1">
                                            <input  type="radio" value="Y" className="form-check-input me-1" id="beneficiaryOtherNameY" {...register('otherName')}/>
                                            <label htmlFor="beneficiaryOtherNameY" className="form-label">Si</label>
                                            <input type="radio" value="N" className="form-check-input me-1 ms-3" id="beneficiaryOtherNameN" defaultChecked {...register('otherName')}/>
                                            <label htmlFor="beneficiaryOtherNameN" className="form-label">No</label>
                                        </div>
                                    </div>
                                     <div className="mb-3 fw-bold">
                                        <label htmlFor="beneficiaryCityOfBirth" className="form-label">Ciudad de Nacimiento</label>
                                        <input type="text" className="form-control" id="beneficiaryCityOfBirth" {...register('cityOfBirth')}/>
                                        { errors.cityOfBirth && <div className="alert alert-danger mt-2">
                                                    <div> {errors.cityOfBirth?.message}</div></div> }
                                    </div>
                                     <div className="mb-3 fw-bold">
                                        <label htmlFor="beneficiaryCountryOfBirth" className="form-label">Pais de Nacimiento</label>
                                        <select className={styles['country-select'] + " form-select"} {...register('countryOfBirth')} id="beneficiaryCountryOfBirth" >
                                            <option value=""></option>
                                            {countries?.map(country => <option key={country.fifa} value={country.fifa}>{country.name.common}</option>)}
                                        </select>
                                         { errors.countryOfBirth && <div className="alert alert-danger mt-2">
                                                    <div> {errors.countryOfBirth?.message}</div></div> }
                                    </div>
                               </div>
                               <div>
                                     <div className="mb-3 fw-bold">
                                        <label htmlFor="beneficiaryDateOfBirth" className="form-label">Fecha de Nacimiento</label>
                                        <Calendar control={control} name="dateOfBirth"/>
                                        {/* <input type="datetime-local" className="form-control" id="dateOfBirth" {...register('dateOfBirth', {valueAsDate: true})}/> */}
                                        { errors.dateOfBirth && <div className="alert alert-danger mt-2">
                                                    <div> {errors.dateOfBirth?.message}</div></div> }
                                    </div>
                                     <div className="mb-3 fw-bold">
                                        <label htmlFor="beneficiaryPostalAddress" className="form-label">Dirección Postal</label>
                                        <input type="text" className="form-control" id="beneficiaryPostalAddress" {...register('postalAddress')}/>
                                        { errors.postalAddress && <div className="alert alert-danger mt-2">
                                                    <div> {errors.postalAddress?.message}</div></div> }
                                    </div>
                                     <div className="mb-3 fw-bold">
                                        <label htmlFor="beneficiaryAddress" className="form-label">Dirección Fisica</label>
                                        <input type="text" className="form-control" id="beneficiaryAddress" {...register('address')}/>
                                        { errors.address && <div className="alert alert-danger mt-2">
                                                    <div> {errors.address?.message}</div></div> }
                                    </div>
                                     <div className="mb-3 fw-bold">
                                        <label htmlFor="beneficiaryPhoneNumber" className="form-label">Telefono</label>
                                        <input type="text" className="form-control" id="beneficiaryPhoneNumber" {...register('phoneNumber')}/>
                                        { errors.phoneNumber && <div className="alert alert-danger mt-2">
                                                    <div> {errors.phoneNumber?.message}</div></div> }
                                    </div>
                                     <div className="mb-3 fw-bold">
                                        <label htmlFor="beneficiaryEmail" className="form-label">Correo Electronico</label>
                                        <input type="email" className="form-control" id="beneficiaryEmail" {...register('email')}/>
                                         { errors.email && <div className="alert alert-danger mt-2">
                                                    <div> {errors.email?.message}</div></div> }
                                    </div>
                
                                 </div>
                           </div>
                           <h5 className="my-4">Rasgos Fisicos</h5>
                           <div className={styles['physical-features']}>
                                    <div className="mb-3 fw-bold">
                                        <label htmlFor="beneficiaryRace" className="form-label">Raza</label>
                                        <input type="text" className="form-control" id="beneficiaryRace" {...register('race')}/>
                                        { errors.race && <div className="alert alert-danger mt-2">
                                                    <div> {errors.race?.message}</div></div> }
                                    </div>
                                    <div className="mb-3 fw-bold">
                                        <label htmlFor="beneficiaryHeight" className="form-label d-block">Estatura</label>
                                        <div className={styles['measurement-input']}><input type="number" className={"form-control d-inline-block me-1"} id="beneficiaryHeight" step="any" {...register('height', {valueAsNumber: true})}/><span>m</span></div>
                                        { errors.height && <div className="alert alert-danger mt-2">
                                                    <div> {errors.height?.message}</div></div> }
                                    </div>
                            <div className="mb-3 fw-bold">
                                <label  htmlFor="beneficiaryWeight" className="form-label d-block">Peso</label>
                                <div className={styles['measurement-input']}><input type="number" className={"form-control d-inline-block me-1"} id="beneficiaryWeight" step="any" {...register('weight', {valueAsNumber: true})}/><span>kg</span></div>
                                { errors.weight && <div className="alert alert-danger mt-2">
                                                    <div> {errors.weight?.message}</div></div> }
                            </div>
                
                            <div className="mb-3 fw-bold">
                                <label htmlFor="beneficiaryEyesColor" className="form-label">Color de Ojos</label>
                                <input type="text" className="form-control" id="beneficiaryEyesColor" {...register('eyesColor')}/>
                                { errors.eyesColor && <div className="alert alert-danger mt-2">
                                                    <div> {errors.eyesColor?.message}</div></div> }
                            </div>
                        </div>
                            <button className={styles['btn-sunrise-primary']+" btn"} type="submit">Siguiente</button>
                        </div>
                        </form>
           
}

export default BeneficiaryPersonalInfo;