import { ContactInfo } from "../entities/ContactInfo";
import { SunriseInfo } from "../enums/SunriseInfo";
import { BiPhone, BiEnvelope } from 'react-icons/bi'

export const CONTACTINFO: ContactInfo [] = [
    {
        info: SunriseInfo.PHONENUMBER,
        infoIcon: 'bi-telephone-fill'
    },
    {
        info: SunriseInfo.EMAIL,
        infoIcon: 'bi-envelope-fill'
    }
]