import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { FieldValues, useFieldArray, useForm, useWatch } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import z from 'zod';
import { setCountryFirst, sortCountries } from '../../Utilities';
import { useCountries } from '../Hooks/useCountries';
import useRegFormContext from '../Hooks/useRegFormContex';
import Calendar from '../ReusableComponents/Calendar';
import styles from './MarriageInfo.module.css';


const schema = z.object({
    marriages: z.number({invalid_type_error: 'Este campo es requerido'}).min(0, {message: 'El valor debe ser mayor o igual a 0.'}),
    maritialStatus: z.string().optional(),
    currentMarriageDate: z.date().optional(),
    marriagePlaceCountry: z.string().optional(),
    marriagePlaceCity: z.string().optional(),
    marriagePlaceState: z.string().optional()
}).superRefine((val, ctx) => {
    if (!val.marriages || val.marriages === 0) return true;

    if(val.marriages > 0 && !val.maritialStatus) 
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['maritialStatus'],
          message: 'Este campo es requerido.'
        });
    
    if(val.maritialStatus === 'married') {
     if(!val.currentMarriageDate) 
          ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['currentMarriageDate'],
          message: 'Este campo es requerido.'
        });
    
    if(!val.marriagePlaceCountry)
     ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['marriagePlaceCountry'],
          message: 'Este campo es requerido.'
        });

    if (!val.marriagePlaceCity)
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['marriagePlaceCity'],
          message: 'Este campo es requerido.'
        });
    
    if(!val.marriagePlaceState)
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['marriagePlaceState'],
          message: 'Este campo es requerido.'
        });
  }
   
});

type FormData = z.infer<typeof schema>;

const MarriageInfo = () => {

     const {  register, handleSubmit, reset, formState: {errors, isValid}, control } = useForm<FormData>({resolver: zodResolver(schema)});
     const marriagesNumber = useWatch({control, name: 'marriages'});
     const maritialStatus = useWatch({control, name: 'maritialStatus'})
     const {state, dispatch } = useRegFormContext();
     const navigate = useNavigate();

    const {data} = useCountries();

    const countries = setCountryFirst(data?.sort(sortCountries)!, 'DOM');

    let neverMarried = errors.marriages ? errors.marriages?.type === 'invalid_type' ? true : false : true;
  
    let isNotMarried = true;

     if (marriagesNumber > 0) {
        neverMarried =  false;
     } else {
        neverMarried = true;
     }

     if(maritialStatus === 'married' ) {
        isNotMarried = false;
     } else {
        isNotMarried = true;
     }

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
                                    <input type="number" className="form-control" id="marriages" {...register('marriages', {valueAsNumber: true})}/>
                                    { errors.marriages && <div className="alert alert-danger mt-2">
                                                    <div> {errors.marriages?.message}</div></div> }
                                </div>
                                <div className="mb-3 fw-bold">
                                    <label htmlFor="maritialStatus" className="form-label">Estado marital</label>
                                    <select disabled={neverMarried} className="form-select mr-1" id="maritialStatus" {...register('maritialStatus')}>
                                        <option value=""></option>
                                        <option value="single">Soltero</option>
                                    <option value="married">Casado</option>
                                    </select>
                                    { errors.maritialStatus && !neverMarried && <div className="alert alert-danger mt-2">
                                                    <div> {errors.maritialStatus?.message}</div></div> }
                                </div>
                                <div className="mb-3 fw-bold">
                                    <label htmlFor="currentMarriageDate" className="form-label">Fecha de su matrimonio actual</label>
                                    <Calendar disabled={isNotMarried}  control={control} name="currentMarriageDate"/>
                                    { errors.currentMarriageDate && !isNotMarried && <div className="alert alert-danger mt-2">
                                                    <div> {errors.currentMarriageDate?.message}</div></div> }
                                </div>
                            </div>
                            <div className="mb-3">
                                <span className="mb-3 d-block h5">Lugar de matrimonio:</span>
                                <div className="mb-3">
                                    <label htmlFor="marriagePlaceCountry" className="form-label fw-bold">Pais</label>
                                          <select disabled={isNotMarried} className="form-select" {...register('marriagePlaceCountry')} id="countryOfBirth" >
                                            <option value=""></option>
                                            {countries?.map((country, index) => <option key={index} value={country.fifa}>{country.name.common}</option>)}
                                        </select>
                                         { errors.marriagePlaceCountry && !isNotMarried && <div className="alert alert-danger fw-bold mt-2">
                                                    <div> {errors.marriagePlaceCountry?.message}</div></div> }
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="marriagePlaceCity" className="form-label fw-bold">Ciudad</label>
                                    <input disabled={isNotMarried} type="text" className="form-control" id="marriagePlaceCity" {...register('marriagePlaceCity')}/>
                                    { errors.marriagePlaceCity && !isNotMarried && <div className="alert alert-danger fw-bold mt-2">
                                                    <div> {errors.marriagePlaceCity?.message}</div></div> }
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="marriagePlaceState" className="form-label fw-bold">Estado o Provincia</label>
                                    <input disabled={isNotMarried} type="text" className="form-control" id="marriagePlaceState" {...register('marriagePlaceState')}/>
                                    { errors.marriagePlaceState && !isNotMarried && <div className="alert alert-danger fw-bold mt-2">
                                                    <div> {errors.marriagePlaceState?.message}</div></div> }
                                </div>
                            </div>
                        </div>
                        <button className={styles['btn-sunrise-primary']+" btn"} type="submit">Siguiente</button>
                        </div>
                    </form>                 
}

export default MarriageInfo;