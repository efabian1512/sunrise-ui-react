import { zodResolver } from '@hookform/resolvers/zod';
import { FieldValues, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { z } from 'zod';
import { setPetCommonData } from '../../../GlobalState/FamilyRequest/familyRequestPetSlice';
import { setCountryFirst, sortCountries } from '../../../Utilities';
import { useCountries } from '../../Hooks/useCountries';
import Calendar from '../../ReusableComponents/Calendar';
import styles from './PersonalInfo.module.css';



const PersonalInfo = () => {

     const locationR = useLocation();
 const isPetioner = locationR.pathname === '/peticion-familiar/' || locationR.pathname === '/peticion-familiar';

 console.log(isPetioner);

const schema = z.object({
    socialSecurity: z.string().min(9,{message: 'Inserte los 9 caracteres del seguro social' })
                              .max(9, {message: 'El seguro social solo cuenta con 9 caracteres'}).optional(),
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
}).superRefine((val, ctx) => {
    if(isPetioner && !val.socialSecurity) 
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['socialSEcurity'],
          message: 'El seguro social es requerido.'
        }); 
  } 
);

type FormData = z.infer<typeof schema>;

        const { data } = useCountries();

       

        const countries = setCountryFirst(data?.sort(sortCountries)!, 'DOM');

        const dispatch = useDispatch();

        const { register, handleSubmit, reset, formState: {isValid, errors}, control } = useForm<FormData>({resolver: zodResolver(schema)});
        const navigate = useNavigate();

        const onSubmit = (data: FieldValues) => {
            const info = {...data, dateOfBirth: data.dateOfBirth.toLocaleDateString()}
            if (isValid) {
                dispatch(setPetCommonData(info));
                navigate('/peticion-familiar/historial-de-direcciones');
            }
        }

         history.pushState(null, '', location.href);
             window.onpopstate = function(event: any) {
                 console.log(event);
             history.go(1);
        };
        
        return <form className={styles["personal-info-form"]} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles['personal-info-main']}>
                <h4 className="mb-0">Datos Personales:</h4>
                <hr className="mt-0"/>
                             <div className={styles['personal-info']}>
                               <div>
                                   <div className="mb-3 fw-bold">
                                        <label htmlFor="socialSecurity" className="form-label">{isPetioner ? 'Seguro Social' : 'Seguro Social (si aplica)'}</label>
                                        <input type="text" className="form-control" id="socialSecurity" {...register('socialSecurity')}/>
                                         { errors.socialSecurity && <div className="alert alert-danger mt-2">
                                                    <div> {errors.socialSecurity?.message}</div></div> }
                                    </div>
                                     <div className="mb-3 fw-bold">
                                        <label htmlFor="fullName" className="form-label">Nombre Completo</label>
                                        <input type="text" className="form-control" id="fullName" {...register('fullName')}/>
                                        { errors.fullName && <div className="alert alert-danger mt-2">
                                                    <div> {errors.fullName?.message}</div></div> }
                                    </div>
                                     <div className={styles['otherName-field'] +" fw-bold"}>
                                         <span className="mb-1 fw-bold">¿Ha usado otro nombre?</span>
                                        <div className="mt-1">
                                            <input  type="radio" value="Y" className="form-check-input me-1" id="otherNameY" {...register('otherName')}/>
                                            <label htmlFor="otherNameY" className="form-label">Si</label>
                                            <input type="radio" value="N" className="form-check-input me-1 ms-3" id="otherNameN" defaultChecked {...register('otherName')}/>
                                            <label htmlFor="otherNameN" className="form-label">No</label>
                                        </div>
                                    </div>
                                     <div className="mb-3 fw-bold">
                                        <label htmlFor="cityOfBirth" className="form-label">Ciudad de Nacimiento</label>
                                        <input type="text" className="form-control" id="cityOfBirth" {...register('cityOfBirth')}/>
                                        { errors.cityOfBirth && <div className="alert alert-danger mt-2">
                                                    <div> {errors.cityOfBirth?.message}</div></div> }
                                    </div>
                                     <div className="mb-3 fw-bold">
                                        <label htmlFor="countryOfBirth" className="form-label">Pais de Nacimiento</label>
                                        <select className={styles['country-select'] + " form-select"} {...register('countryOfBirth')} id="countryOfBirth" >
                                            <option value=""></option>
                                            {countries?.map((country, index) => <option key={country.fifa + index.toString} value={country.fifa}>{country.name.common}</option>)}
                                        </select>
                                         { errors.countryOfBirth && <div className="alert alert-danger mt-2">
                                                    <div> {errors.countryOfBirth?.message}</div></div> }
                                    </div>
                               </div>
                               <div>
                                     <div className="mb-3 fw-bold">
                                        <label htmlFor="dateOfBirth" className="form-label">Fecha de Nacimiento</label>
                                        <Calendar control={control} name="dateOfBirth"/>
                                        {/* <input type="datetime-local" className="form-control" id="dateOfBirth" {...register('dateOfBirth', {valueAsDate: true})}/> */}
                                        { errors.dateOfBirth && <div className="alert alert-danger mt-2">
                                                    <div> {errors.dateOfBirth?.message}</div></div> }
                                    </div>
                                     <div className="mb-3 fw-bold">
                                        <label htmlFor="postalAddress" className="form-label">Dirección Postal</label>
                                        <input type="text" className="form-control" id="postalAddress" {...register('postalAddress')}/>
                                        { errors.postalAddress && <div className="alert alert-danger mt-2">
                                                    <div> {errors.postalAddress?.message}</div></div> }
                                    </div>
                                     <div className="mb-3 fw-bold">
                                        <label htmlFor="address" className="form-label">Dirección Fisica</label>
                                        <input type="text" className="form-control" id="address" {...register('address')}/>
                                        { errors.address && <div className="alert alert-danger mt-2">
                                                    <div> {errors.address?.message}</div></div> }
                                    </div>
                                     <div className="mb-3 fw-bold">
                                        <label htmlFor="phoneNumber" className="form-label">Telefono</label>
                                        <input type="text" className="form-control" id="phoneNumber" {...register('phoneNumber')}/>
                                        { errors.phoneNumber && <div className="alert alert-danger mt-2">
                                                    <div> {errors.phoneNumber?.message}</div></div> }
                                    </div>
                                     <div className="mb-3 fw-bold">
                                        <label htmlFor="email" className="form-label">Correo Electronico</label>
                                        <input type="email" className="form-control" id="email" {...register('email')}/>
                                         { errors.email && <div className="alert alert-danger mt-2">
                                                    <div> {errors.email?.message}</div></div> }
                                    </div>
                
                                 </div>
                           </div>
                           <h5 className="my-4">Rasgos Fisicos</h5>
                           <div className={styles['physical-features']}>
                                    <div className="mb-3 fw-bold">
                                        <label htmlFor="race" className="form-label">Raza</label>
                                        <input type="text" className="form-control" id="race" {...register('race')}/>
                                        { errors.race && <div className="alert alert-danger mt-2">
                                                    <div> {errors.race?.message}</div></div> }
                                    </div>
                                    <div className="mb-3 fw-bold">
                                        <label htmlFor="height" className="form-label d-block">Estatura</label>
                                        <div className={styles['measurement-input']}><input type="number" className={"form-control d-inline-block me-1"} id="height" step="any" {...register('height', {valueAsNumber: true})}/><span>m</span></div>
                                        { errors.height && <div className="alert alert-danger mt-2">
                                                    <div> {errors.height?.message}</div></div> }
                                    </div>
                            <div className="mb-3 fw-bold">
                                <label  htmlFor="weight" className="form-label d-block">Peso</label>
                                <div className={styles['measurement-input']}><input type="number" className={"form-control d-inline-block me-1"} id="weight" step="any" {...register('weight', {valueAsNumber: true})}/><span>kg</span></div>
                                { errors.weight && <div className="alert alert-danger mt-2">
                                                    <div> {errors.weight?.message}</div></div> }
                            </div>
                
                            <div className="mb-3 fw-bold">
                                <label htmlFor="eyesColor" className="form-label">Color de Ojos</label>
                                <input type="text" className="form-control" id="eyesColor" {...register('eyesColor')}/>
                                { errors.eyesColor && <div className="alert alert-danger mt-2">
                                                    <div> {errors.eyesColor?.message}</div></div> }
                            </div>
                        </div>
                            <button className={styles['btn-sunrise-primary']+" btn"} type="submit">Siguiente</button>
                        </div>
                        </form>
           
}

export default PersonalInfo;