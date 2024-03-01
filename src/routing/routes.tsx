import { createBrowserRouter } from "react-router-dom";
import HomePage from "../components/HomePage";
import LoginPage from '../components/Login/LoginPage';
import Dashboard from '../components/Dashboard/Dashboard';
import FamilyRequest from '../components/FamilyRequest/FamilyRequest';
import PersonalInfo from '../components/FamilyRequest/Personalnfo';
import AddressHistory from "../components/FamilyRequest/AddressHistory";
import MarriageInfo from "../components/FamilyRequest/MarriageInfo";
import ParentsInfo from "../components/FamilyRequest/ParentsInfo";
import EmploymentHistory from "../components/FamilyRequest/EmploymentHistory";

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