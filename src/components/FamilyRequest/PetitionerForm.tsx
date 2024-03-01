 import { FieldValues, useForm } from 'react-hook-form';
 
 interface Props {

        petitionerFormSubmit: (data: FieldValues) => void;
    }

const PetitionerForm = ({ petitionerFormSubmit }:Props) => {
   
     const { register, handleSubmit, reset } = useForm();

    return  <div className="petitioner-form">
                
            <h3 className="mb-4 fw-bold">Peticionario</h3>
                   <form onSubmit={petitionerFormSubmit}>
               <div className="mb-3 fw-bold">
                    <label htmlFor="socialSecurity" className="form-label">Seguro Social</label>
                    <input type="text" className="form-control" id="socialSecurity" {...register('socialSecurity')}/>
                </div>
           
                 <div className="mb-3 fw-bold">
                    <label htmlFor="fullName" className="form-label">Nombre Completo</label>
                    <input type="text" className="form-control" id="fullName" {...register('fullName')}/>
                </div>

                 <div className="mb-3 fw-bold">
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
                 <div className="mb-3 fw-bold">
                    <label htmlFor="dateOfBirth" className="form-label">Fecha de Nacimiento</label>
                    <input type="date" className="form-control" id="dateOfBirth" {...register('dateOfBirth')}/>
                </div>
                 <div className="mb-3 fw-bold">
                    <label htmlFor="postalAddress" className="form-label">Direccion Postal</label>
                    <input type="text" className="form-control" id="postalAddress" {...register('postalAddress')}/>
                </div>
                 <div className="mb-3 fw-bold">
                    <label htmlFor="address" className="form-label">Direccion Fisica</label>
                    <input type="text" className="form-control" id="address" {...register('address')}/>
                </div>
                 <div className="mb-3 fw-bold">
                    <label htmlFor="phoneNumber" className="form-label">Telefono</label>
                    <input type="text" className="form-control" id="phoneNumber" {...register('phoneNumber')}/>
                </div>
                 <div className="mb-3 fw-bold">
                    <label htmlFor="email" className="form-label">Correo Electronico</label>
                    <input type="text" className="form-control" id="email" {...register('email')}/>
                </div>
                   <button className="btn btn-light" type="submit">Enviar</button>
                   </form>
            </div>
}
export default PetitionerForm;