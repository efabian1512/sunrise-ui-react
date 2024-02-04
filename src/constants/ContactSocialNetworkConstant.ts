import { ContactSocialNetwork } from "../entities/ContactSocialNetwork";
import { ContactSocialNetworkIcon, ContactSocialNetworkLink, ContactSocialNetworkTitle } from "../enums/ContactSocialTypes";

export const CONTACTSOCIALNETWORKINFO: ContactSocialNetwork[] = [
    {
        title: ContactSocialNetworkTitle.FACEBOOK,
        link: ContactSocialNetworkLink.FACEBOOK,
        icon: ContactSocialNetworkIcon.FACEBOOK
    },
    {
        title: ContactSocialNetworkTitle.INSTAGRAM,
        link: ContactSocialNetworkLink.INSTAGRAM,
        icon: ContactSocialNetworkIcon.INSTAGRAM
    },
    {
        title: ContactSocialNetworkTitle.WHATSAPP,
        link: ContactSocialNetworkLink.WHATSAPP,
        icon: ContactSocialNetworkIcon.WHATSAPP
    }
]