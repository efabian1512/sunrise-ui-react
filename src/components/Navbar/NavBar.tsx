import NAVBARTABS from '../../constants/navbartabs';
import styles from './NavBar.module.css';
import logo from '../../assets/SmallSquareLogoJpgCropped.jpg';

  
interface Props {
        scrollTo: (componentName: string) => void;
}

const NavBar = ({scrollTo}: Props) => {

  

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div className="container-fluid justify-content-center py-1">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {NAVBARTABS.map((tab, index) => {
                    if (tab.isHomeTab) return  <li key={index} className="nav-item me-3">
                        <a className={styles.clickable+" nav-link fw-bold py-0"}>
                            <div className="row">
                                <img className="col pe-1" src={logo} width='50px' height='40px'/>
                                {/* <div style={{backgroundImage: 'url('+logo+')' }} className={styles.thumbnail +" me-1 col"}>
                                 
                                </div> */}
                                <span className="col pt-2 ps-0">{tab?.title}</span>
                            </div>
                        </a>
                    </li>

                    if (!tab.isHomeTab && !tab.isLoginTab) return <li key={index} className="nav-item me-3">
                        <a onClick={() => scrollTo(tab?.name)} className={styles.clickable +" nav-link fw-bold"}>{tab?.title}</a>
                    </li>
                })}
                {/* <ng-container *ngFor="let tab of tabs">
                    <li *ngIf="tab?.isHomeTab" routerLinkActive="active" class="nav-item me-3">
                        <a (click)="setHomeAsActiveItem()"
                            [ngClass]="{'active': (selectedElementName === tab?.['name'])}"
                            className="nav-link fw-bold py-0" routerLink="/">
                            <div className="row">
                                <div [style.backgroundImage]="'url('+tab.logoImageUrl+')'" class="thumbnail me-1 col">
                                </div>
                                <span className="col pt-2 ps-0">{{tab?.['title']}}</span>
                            </div>
                        </a>
                    </li>

                    <li *ngIf="!tab?.isHomeTab && !tab?.isLoginTab && !tab?.isSignupTab" routerLinkActive="active"
                        class="nav-item me-3">
                        <a [ngClass]="{'active': (selectedElementName === tab?.['name'])}"
                            class="nav-link fw-bold clickable" (click)="scrollTo(tab?.['name'])">{{tab?.['title']}}</a>
                    </li>
                </ng-container> */}
            </ul>
        </div>
    </div>
    <ul className="collapse navbar-collapse navbar-nav justify-content-end me-auto flex-grow-0 mb-2 mb-lg-0 pe-3">
        {NAVBARTABS.map(tab => {
            if(tab.isLoginTab) return <li key={NAVBARTABS.length} className="nav-item py-0 btn btn-light btn-sm me-3">
                <a className="nav-link text-dark fw-bold">{tab?.title}</a>
            </li>
        })}
        {/* <ng-container *ngFor="let tab of tabs">
            <li *ngIf="tab?.isLoginTab || tab?.isSignupTab" class="nav-item py-0 btn btn-light btn-sm"
                [ngClass]="[tab?.isLoginTab ? tab?.['marginRightClass'] : '']">
                <a [routerLink]="tab?.['path']" class="nav-link text-dark fw-bold">{{tab?.['title']}}</a>
            </li>
        </ng-container> */}
    </ul>
</nav>
    )

    
}

export default NavBar;