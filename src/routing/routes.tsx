import { createBrowserRouter } from "react-router-dom";
import HomePage from "../components/HomePage";
import LoginPage from '../components/Login/LoginPage';
import Dashboard from '../components/Dashboard/Dashboard';
import PersonalInfo from '../components/FamilyRequest/Petitioner/Personalnfo';
import AddressHistory from "../components/FamilyRequest/Petitioner/AddressHistory";
import MarriageInfo from "../components/FamilyRequest/Petitioner/MarriageInfo";
import ParentsInfo from "../components/FamilyRequest/Petitioner/ParentsInfo";
import EmploymentHistory from "../components/FamilyRequest/Petitioner/EmploymentHistory";
import FamilyRequest from '../components/FamilyRequest/FamilyRequest';
import BeneficiaryPersonalInfo from '../components/FamilyRequest/Beneficiary/BeneficiaryPersonalInfo';
import PetitionerHome from "../components/FamilyRequest/Petitioner/PetitionerHome";
import BeneficiaryHome from "../components/FamilyRequest/Beneficiary/BeneficiaryHome";



const router = createBrowserRouter([
    {path: '', element: <HomePage/>},
    {path: 'login', element: <LoginPage/>},
    {path: 'dashboard', element: <Dashboard/>},
    {path: 'peticion-familiar', element: <FamilyRequest/>, children: [
        {path: '', element: <PetitionerHome/>, children: [
            {path: '', element: <PersonalInfo/> },
            {path: 'historial-de-direcciones', element: <AddressHistory/>},
            {path: 'informacion-matrimonial', element: <MarriageInfo/>},
            {path: 'padres-info', element: <ParentsInfo/>},
            {path: 'historial-de-empleos', element: <EmploymentHistory/>},
        ]
    },
        {path: 'beneficiario', element: <BeneficiaryHome/>, children: [
            {path: 'info', element: <PersonalInfo/>}
        ]}
    ]},
]);

export default router;