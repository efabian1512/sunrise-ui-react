import { SERVICES } from "../../constants/Service";
import styles from './Services.module.css';
import { forwardRef, useRef } from 'react';
import { Link } from "react-router-dom";

// interface Props {
//     ref: React.MutableRefObject<HTMLElement>
// }
const ServicesPage = forwardRef<HTMLDivElement>((props, ref) => {

  
    return (<div id="services" ref={ref} className={styles['services'] + " bg-dark"}>
                <div className={styles['services-title'] + " text-light"}>
                    <h1>Nuestros Servicios</h1>
                    <p>Haga click sobre el servicio para el que desea realizar solicitud.</p>
                </div>
    
                <div className={styles['services-items'] +" pb-5"}>
                    <div className={styles['services-wrapper'] + " px-4 px-5 pb-5 pt-3 "} id="icon-grid">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
                    {SERVICES.map((service, index) => 
                    <div key={index}  className="col d-flex align-items-start">
                    <Link to='/dashboard' style={{width: '100%'}} className={styles['services-anchor']}>
                        <div className="text-center mt-2">
                            <i className={service?.icon + ' ' + styles['services-icon'] + " bi me-3 icon-color h1"}></i>
                            <h5 className="fw-bold mt-2 mb-0">{service?.name}</h5>
                        </div>
                    </Link>
                </div>
                )}
            </div>
        </div>
    </div>
</div>
    );
});
export default ServicesPage;