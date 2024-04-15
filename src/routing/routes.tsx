import { createBrowserRouter } from "react-router-dom";
import HomePage from "../components/HomePage";
import LoginPage from '../components/Login/LoginPage';
import Dashboard from '../components/Dashboard/Dashboard';
import PersonalInfo from '../components/FamilyRequest/Petitioner/Personalnfo';
import AddressHistory from "../components/FamilyRequest/Petitioner/AddressHistory";
import MarriageInfo from "../components/FamilyRequest/Petitioner/MarriageInfo";
import ParentsInfo from "../components/FamilyRequest/Petitioner/ParentsInfo";
import EmploymentHistory from "../components/FamilyRequest/Petitioner/EmploymentHistory";
import FamilyRequest from '../components/FamilyRequest/Petitioner/FamilyRequest';

const router = createBrowserRouter([
    {path: '', element: <HomePage/>},
    {path: 'login', element: <LoginPage/>},
    {path: 'dashboard', element: <Dashboard/>},
    {path: 'peticion-familiar', element: <FamilyRequest/>, children: [
        {path: '', element: <PersonalInfo/> },
        {path: 'address-history', element: <AddressHistory/>},
        {path: 'marriage-info', element: <MarriageInfo/>},
        {path: 'parents-info', element: <ParentsInfo/>},
        {path: 'employment-history', element: <EmploymentHistory/>}
    ]},
]);

export default router;