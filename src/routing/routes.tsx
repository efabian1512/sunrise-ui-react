import { createBrowserRouter } from "react-router-dom";
import HomePage from "../components/HomePage";
import LoginPage from '../components/Login/LoginPage';
import Dashboard from '../components/Dashboard/Dashboard';

const router = createBrowserRouter([
    {path: '', element: <HomePage/>},
    {path: 'login', element: <LoginPage/>},
    {path: 'dashboard', element: <Dashboard/>}
]);

export default router;