import React from 'react';
import {Route} from 'react-router-dom';
import { Layout } from 'antd';

import "./LayoutAdmin.scss"
import routes from '../config/routes';

export default function LayoutAdmin(props){
    const { routes } = props;
    const {Header, Content, Footer} = Layout;

    return (
        <Layout>
            <h2>Menu sidebar Admin</h2>
            <Layout>
                <Header>Header</Header>
                <Content>
                    <LoadRouter routes={routes}/>
                </Content>
                <Footer>
                    Sebastian Berrios 2021
                </Footer>
            </Layout>
        </Layout>
    )
}

function LoadRouter({routes}){ //es lo mismo que destructuring
    return routes.map((route, index)=>(
        <Route 
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}
        />
    ))
}