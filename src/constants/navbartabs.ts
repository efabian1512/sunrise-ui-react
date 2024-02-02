import NavBarTab from "../entities/NavbarTab";
import { NavBarTabName, NavBarTitle } from "../enums/NavNarTabTypes";

const NAVBARTABS: NavBarTab[] = [
    {
        title: NavBarTitle.SUNRISE,
        name: NavBarTabName.SUNRISE,
        isHomeTab: true,
        logoImageUrl: '../../../../assets/SmallSquareLogoJpgCropped.jpg'
    },
    {
        title: NavBarTitle.SERVICES,
        name: NavBarTabName.SERVICES,
    },
    {
        title: NavBarTitle.ABOUT,
        name: NavBarTabName.ABOUT,
    },
    {
        title: NavBarTitle.CONTACTS,
        name: NavBarTabName.CONTACTS,
    },
    {
        title: NavBarTitle.LOGIN,
        name: NavBarTabName.LOGIN,
        isLoginTab: true,
        path: '/login',
        marginRightClass: 'me-3'
    },
];

export default NAVBARTABS;