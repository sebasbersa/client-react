import React, {useState} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import { Layout } from 'antd';
import MenuTop from '../component/admin/menuTop';
import MenuSider from '../component/admin/MenuSider';
import AdminSignIn from "../pages/Admin/SignIn";
import useAuth from '../hooks/useAuth';

import "./LayoutAdmin.scss"

export default function LayoutAdmin(props){
    const { routes } = props;
    const [menuCollapsed, setMenuCollapsed] = useState(true);
    const {Header, Content, Footer} = Layout;
    const {user, isLoading} = useAuth;

    console.log(user);
    
    if(!user){
        return (
            <>
            <Route path="/admin/login" component={AdminSignIn} />
            <Redirect to="/admin/login"/>
            </>
        )
    }

    return (
        <Layout>
        <MenuSider menuCollapsed={menuCollapsed} />
            <Layout className="layout-admin" style={{marginLeft:menuCollapsed ? "80px" : "200px" }}>
                <Header className="layout-admin__header">
                    <MenuTop menuCollapsed={menuCollapsed} setMenuCollapsed={setMenuCollapsed} />
                </Header>
                <Content className="layout-admin__content" >
                    <LoadRoutes routes={routes}/>
                </Content>
                <Footer className="layout-admin__footer">
                    Sebastian Berrios 2021
                </Footer>
            </Layout>
        </Layout>
    )
}

function LoadRoutes({routes}){ //es lo mismo que destructuring
    return (
        <Switch>
            {routes.map((route, index)=>(
            <Route 
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
            />
            ))}
        </Switch>
    );    
}