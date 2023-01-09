import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Appointment from "../../pages/Appointment/Appointment/Appointment";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/SingUp/SignUp";
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import DashBoard from '../../pages/DashBoard/DashBoard';
import DashBoardLayout from "../../Layout/DashBoardLayout";
import AllUsers from "../../pages/DashBoard/AllUsers";
import AdminRoute from "../AdminRoute/AdminRoute";
import AddDoctors from "../../pages/DashBoard/AddDoctors";
import ManageDoctors from "../../pages/DashBoard/ManageDoctors";
import Payment from "../../pages/DashBoard/Payment";
import DisplayError from "../../pages/shared/DisplayError/DisplayError";

const routes = createBrowserRouter([
    {path: '/', element: <Main/>,
    errorElement: <DisplayError/>,
    children: [
        {path: '/', element: <Home/>},
        { path: '/appointment', element: <Appointment/>},
        {path: '/login', element: <Login/>},
        {path: '/signup', element: <SignUp/>}
    ]},
    {
        path: '/dashboard',
        element: <PrivateRoute><DashBoardLayout/></PrivateRoute>,
        errorElement: <DisplayError/>,
        children: [
            {path: '/dashboard', element: <DashBoard/>},
            { path: '/dashboard/allusers', element: <AdminRoute><AllUsers /></AdminRoute>},
            { path: '/dashboard/adddoctor', element: <AdminRoute><AddDoctors/></AdminRoute>},
            { path: '/dashboard/managedoctors', element: <AdminRoute><ManageDoctors/></AdminRoute>},
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`http://localhost:5000/bookings/${params.id}`)
            },
        ]
    }
])

export default routes;