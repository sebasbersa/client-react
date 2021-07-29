//Layout
import { lazy } from "react";
import LayoutAdmin from "../layouts/LayoutAdmin";
import LayoutBasic from "../layouts/LayoutBasic";
// Admin pages
import AdminHome from '../pages/Admin';
//signin
import AdminSignIn from '../pages/Admin/SignIn';
//pages
import Home from "../pages/Home";
import Contact from "../pages/Contacts";

//Other
import Error404 from "../pages/Error404";

const routes = [
    {
        path: "/admin",
        component: LayoutAdmin,
        exact: false,
        routes: [
            {
                path: "/admin",
                component: AdminHome,
                exact: true
            },
            {
                path: "/admin/login",
                component: AdminSignIn,
                exact: true
            },
            {
                //Este siempre debe ir al final
                component: Error404,
            }
        ]
    },
    {
        path: "/",
        component: LayoutBasic,
        exact: false,
        routes:[
            {
                path: "/",
                component: Home,
                exact: true
            },
            {
                path: "/contact",
                component: Contact,
                exact: true
            },            
            {
                //Este siempre debe ir al final
                component: Error404,
            }
        ]
    }
];

export default routes;