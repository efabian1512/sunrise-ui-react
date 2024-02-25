import { useState } from "react";
import NAVBARTABS from "../../constants/navbartabs";
import useWindowResize from "../Hooks/useWindowsResize";
import styles from './MobileMenu.module.css';


interface Props {
    isMobileMenuOpen: boolean;
    toggleMenu: (isOpen: boolean) => void;
    scrollTo: (componentName: string) => void;
}

const MobileMenu = ({isMobileMenuOpen, toggleMenu, scrollTo}:Props) => {
    const isMobileSize = useWindowResize(991);

    console.log(isMobileSize);
    console.log(isMobileMenuOpen);

 return  (
     <>
 <div className={`offcanvas offcanvas-start text-bg-dark ${isMobileMenuOpen && isMobileSize ? ' show' : ' collapse'} `} tabIndex={-1} id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                <div className="offcanvas-header">
                <h5 className="offcanvas-title fw-bold" id="offcanvasDarkNavbarLabel">SUNRISE</h5>
                <button onClick={() => toggleMenu(false)} type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
        <div className="offcanvas-body p-0">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-0">
                 {NAVBARTABS.map((tab, index) => {
                if (!tab.isHomeTab && !tab.isLoginTab) return <li key={index} className={styles['off-nabvar-item'] + " nav-item"}>
                        <a onClick={() => { 
                            // setSelectedTab(tab?.name);
                            toggleMenu(false)
                            scrollTo(tab?.name)
                        }} className={ styles.clickable +" nav-link fw-bold"}>{tab?.title}</a>
                    </li>
                }
             )}
            </ul>

                {/* <form className="d-flex mt-3" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-success" type="submit">Search</button>
                </form> */}
            </div>
        </div>

         {(isMobileMenuOpen && isMobileSize) && <div className="offcanvas-backdrop fade show"></div>}
 </> 
 )
}




export default MobileMenu;