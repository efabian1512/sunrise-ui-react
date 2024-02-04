import ContactForm from "./ContactForm";
import styles from './Contact.module.css';
import { CONTACTINFO } from '../../constants/ContactInfoConst';
import { CONTACTSOCIALNETWORKINFO } from "../../constants/ContactSocialNetworkConstant";

const ContactPage = () => {

    return (
        <div className={ styles['contacts-bg'] + ' row p-5'}>
            <div className="col-md-6 col-sm-6 col-lg-6 py-5">
        <div className="ps-3 mb-5 mt-3 py-1 text-dark">
            <h3 className="text-center fw-bold">INFORMACION DE CONTACTO</h3>
        </div>
        
        <div className="mb-3">
            <>
            {CONTACTINFO.map((data, index) => 
                    <span key={index} className="mb-3" style={{display: 'block'}}>
                        <i  className={data.infoIcon +" bi me-2"}></i>{data?.info}
                    </span>
            )}

            {CONTACTSOCIALNETWORKINFO.map((socialInfo, index) => 
                <a key={index} className={styles['contact-link']} title={socialInfo?.title} href={socialInfo?.link} target="_blank"><i className={socialInfo?.icon + ' ' + styles['contact-icon'] + " bi me-3"}></i></a>
            )}
            </>
            {/* <ng-container *ngFor="let data of contactInfo">
                <span class="mb-3" style="display: block;"><i [class]="data?.['infoIcon']" class="bi me-2"></i>{{data?.['info']}}</span>
            </ng-container> */}

            {/* <ng-container *ngFor="let socialInfo of contactSocialNetworkInfo">
                <a [title]="socialInfo?.['title']" [href]="socialInfo?.['link']" target="_blank"><i [class]="socialInfo?.['icon']" class="bi me-3"></i></a>
            </ng-container> */}
        </div>
    </div>
    <div className="col-md-6 col-sm-6 col-lg-6 ps-5 py-5">
        <div className="ps-3 mb-5 mt-3 py-1 text-dark">
            <h3 className="text-center fw-bold">CONTACTANOS</h3>
        </div>
       <ContactForm />
    </div>
</div>        
    )
}

export default ContactPage;