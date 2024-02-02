export default interface NavBarTab {
    title: string;
    name: string;
    path?: string;
    isHomeTab?: boolean;
    isLoginTab?: boolean;
    isSignupTab?: boolean;
    logoImageUrl?: string;
    marginRightClass?: string;
}