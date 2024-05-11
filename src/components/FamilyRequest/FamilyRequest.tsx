import { Outlet } from 'react-router-dom';
import 'react-tabs/style/react-tabs.css';
import ProgressBar from '../ProgressBar/ProgressBar';
import styles from './FamilyRequest.module.css';


const FamilyRequest = () => {

    

    return  <div className={styles['family-request']}>
                <h2 className="mb-4">Peticion Familiar</h2>
                <div className="mb-5"><ProgressBar/></div>
                <Outlet/>
             </div>
        
           
   
 
    // 
         
    //     <div className={styles['family-request']}>
    //         <div className="petitioner-form">
                
    //         <h3 className="mb-4 fw-bold">Peticionario</h3>
    //                <form onSubmit={handleSubmit(onSubmitForm)}>
    //                <div className={styles['personal-info']}>
    //                    <div>
    //                        <div className="mb-3 fw-bold">
    //                             <label htmlFor="socialSecurity" className="form-label">Seguro Social</label>
    //                             <input type="text" className="form-control" id="socialSecurity" {...register('socialSecurity')}/>
    //                         </div>
    //                          <div className="mb-3 fw-bold">
    //                             <label htmlFor="fullName" className="form-label">Nombre Completo</label>
    //                             <input type="text" className="form-control" id="fullName" {...register('fullName')}/>
    //                         </div>
    //                          <div className={styles['otherName-field'] +" fw-bold"}>
    //                              <span className="mb-1 fw-bold">¿Ha usado otro nombre?</span>
    //                             <div className="mt-1">
    //                                 <input  type="radio" value="Y" className="form-check-input me-1" id="otherNameY" {...register('otherName')}/>
    //                                 <label htmlFor="otherNameY" className="form-label">Si</label>
    //                                 <input type="radio" value="N" className="form-check-input me-1 ms-3" id="otherNameN" {...register('otherName')}/>
    //                             <label htmlFor="otherNameN" className="form-label">No</label>
    //                             </div>
    //                         </div>
    //                          <div className="mb-3 fw-bold">
    //                             <label htmlFor="cityOfBirth" className="form-label">Ciudad de Nacimiento</label>
    //                             <input type="text" className="form-control" id="cityOfBirth" {...register('cityOfBirth')}/>
    //                         </div>
    //                          <div className="mb-3 fw-bold">
    //                             <label htmlFor="countryOfBirth" className="form-label">Pais de Nacimiento</label>
    //                             <input type="text" className="form-control" id="countryOfBirth" {...register('countryOfBirth')}/>
    //                         </div>
    //                    </div>
    //                    <div>
    //                          <div className="mb-3 fw-bold">
    //                             <label htmlFor="dateOfBirth" className="form-label">Fecha de Nacimiento</label>
    //                             <input type="date" className="form-control" id="dateOfBirth" {...register('dateOfBirth')}/>
    //                                              </div>
    //                          <div className="mb-3 fw-bold">
    //                             <label htmlFor="postalAddress" className="form-label">Direccion Postal</label>
    //                             <input type="text" className="form-control" id="postalAddress" {...register('postalAddress')}/>
    //                                              </div>
    //                          <div className="mb-3 fw-bold">
    //                             <label htmlFor="address" className="form-label">Direccion Fisica</label>
    //                             <input type="text" className="form-control" id="address" {...register('address')}/>
    //                                              </div>
    //                          <div className="mb-3 fw-bold">
    //                             <label htmlFor="phoneNumber" className="form-label">Telefono</label>
    //                             <input type="text" className="form-control" id="phoneNumber" {...register('phoneNumber')}/>
    //                                              </div>
    //                          <div className="mb-3 fw-bold">
    //                             <label htmlFor="email" className="form-label">Correo Electronico</label>
    //                             <input type="email" className="form-control" id="email" {...register('email')}/>
    //                                              </div>
    //                      </div>
    //                </div>

    //                <div className={styles['address-history'] + " mb-3 mt-2 fw-bold" }>
    //                     <span className="h5 d-block mb-3">Historial de dirección de los últimos 5 años</span>
    //                     <button className="btn btn-primary mb-2">Agregar Dirección</button>

    //                     <table className="table table-bordered table-striped mt-2">
    //                         <thead>
    //                             <tr>
    //                                 <th>Nombre y Número de la Calle</th>
    //                                 <th>Aprt #</th>
    //                                 <th>Ciudad</th>
    //                                 <th>Estado</th>
    //                                 <th>Codigo Postal</th>
    //                                 <th>Desde</th>
    //                                 <th>Hasta</th>
    //                             </tr>
    //                         </thead>
    //                     </table>
    //                 </div>

    //                 <div className={styles['marital-info'] + " mt-4"}>
    //                     <div className={styles['marital-general-info']}>
    //                         <div className="mb-3 fw-bold">
    //                             <label htmlFor="marriages" className="form-label">¿Cuántas veces ha estado casado(a)?</label>
    //                             <input type="text" className="form-control" id="marriages" {...register('marriages')}/>
    //                         </div>
    //                         <div className="mb-3 fw-bold">
    //                             <label htmlFor="maritialStatus" className="form-label">Estado marital</label>
    //                             <select className="form-select mr-1" id="maritialStatus" {...register('maritialStatus')}>
    //                                 <option value=""></option>
    //                                 <option value="single">Soltero</option>
    //                                 <option value="married">Casado</option>
    //                             </select>
    //                         </div>
    //                         <div className="mb-3 fw-bold">
    //                             <label htmlFor="currentMarriageDate" className="form-label">Fecha de su matrimonio actual</label>
    //                             <input type="date" className="form-control" id="currentMarriageDate" {...register('currentMarriageDate')}/>
    //                         </div>
    //                     </div>
    //                     <div className="mb-3">
    //                         <span className="mb-3 d-block h5">Lugar de matrimonio:</span>
    //                         <div className="mb-3">
    //                             <label htmlFor="marriagePlaceCountry" className="form-label fw-bold">Pais</label>
    //                             <input type="text" className="form-control" id="marriagePlaceCountry" {...register('marriagePlaceCity')}/>
    //                         </div>
    //                         <div className="mb-3">
    //                             <label htmlFor="marriagePlaceCity" className="form-label fw-bold">Ciudad</label>
    //                             <input type="text" className="form-control" id="marriagePlaceCity" {...register('marriagePlaceCity')}/>
    //                         </div>
    //                         <div className="mb-3">
    //                         	<label htmlFor="marriagePlaceState" className="form-label fw-bold">Estado o Provincia</label>
    //                         	<input type="text" className="form-control" id="marriagePlaceState" {...register('marriagePlaceState')}/>
    //                         </div>
    //                     </div>
    //                 </div>

                    

              

              
    //                </form>
    //         </div>
    //     </div>
    // )
}

export default FamilyRequest;