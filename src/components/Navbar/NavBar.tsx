import NAVBARTABS from '../../constants/navbartabs';
import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import MobileMenu from './MobileMenu';


  
interface Props {
        scrollTo: (componentName: string) => void;
}

const NavBar = ({scrollTo}: Props) => {

  const [selectedTab, setSelectedTab] = useState('home');
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className={styles['navbar-content']+" navbar navbar-expand-lg navbar-dark bg-dark fixed-top"}>
            <div className={styles['navbar-main'] + ' ' + styles['small-screens']+ " container-fluid"}>
            
                 <button onClick={() => setMobileMenuOpen(true)} className={"navbar-toggler"} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                <div className={styles['vl'] + ' ' + styles['navbar-toggler-item'] + " me-2 ms-2" }></div>
                <Link className={styles['navbar-toggler-item'] + ' ' + styles['home-link']} to='/'>
                    <img className={styles['navbar-toggler-logo']} src="/src/assets/SmallSquareLogoJpgCropped.jpg" width='50px' height='40px' alt="Sunrise logo"/>
                    <span className={styles['logo-title'] + " fw-bold"}>SUNRISE</span>   
                </Link>
                <span className={styles['navbar-toggler-link']+ ' ' +styles['navbar-toggler-item']+" nav-item py-0 btn btn-light btn-sm me-3"}><Link to='/login' className={styles['small-screens-link']+" nav-link text-dark fw-bold"}>ACCEDER</Link></span>     
                   
            <div className="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {NAVBARTABS.map((tab, index) => {
                    if (tab.isHomeTab) return  <li key={index} className="nav-item me-3">
                        <Link onClick={() => setSelectedTab('home')} to='/' className={ (selectedTab === tab?.name) ? "active nav-link fw-bold py-0" :"nav-link fw-bold py-0"}>
                            <div className="row">
                                <img className="col pe-1" src={tab.logoImageUrl} width='50px' height='40px'/>
                                {/* <div style={{backgroundImage: 'url('+logo+')' }} className={styles.thumbnail +" me-1 col"}>
                                 
                                </div> */}
                                <span className="col pt-2 ps-0">{tab?.title}</span>
                            </div>
                        </Link>
                    </li>

                    if (!tab.isHomeTab && !tab.isLoginTab) return <li key={index} className="nav-item me-3">
                        <a onClick={() => { 
                            setSelectedTab(tab?.name);
                            scrollTo(tab?.name)
                        }} className={(selectedTab === tab?.name) ? 'active ' + styles.clickable +" nav-link fw-bold" : styles.clickable +" nav-link fw-bold"}>{tab?.title}</a>
                    </li>
                })}
            </ul>
        </div>
    </div>
    <ul className="collapse navbar-collapse navbar-nav justify-content-end me-auto flex-grow-0 mb-2 mb-lg-0 pe-3">
        {NAVBARTABS.map(tab => {
            if(tab.isLoginTab) return <li key={NAVBARTABS.length} className="nav-item py-0 btn btn-light btn-sm me-3">
                <Link to='/login' className="nav-link text-dark fw-bold">{tab?.title}</Link>
            </li>
        })}
    </ul>

    <MobileMenu scrollTo={scrollTo} isMobileMenuOpen={isMobileMenuOpen} toggleMenu={(isOpen) => setMobileMenuOpen(isOpen)}/>
</nav>
    )

    
}

export default NavBar;