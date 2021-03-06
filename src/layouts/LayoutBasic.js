import React from 'react';
import {Route, Switch} from 'react-router-dom';
import { Layout } from 'antd';

import "./LayoutBasic.scss"

export default function LayoutBasic(props){
    const { routes } = props;
    const {Header, Content, Footer} = Layout;
    return (
        <Layout>
            <h2>Menu sidebar Basic</h2>
            <Layout>
                <Header>Header</Header>
                <Content>
                    <LoadRoutes routes={routes}/>
                </Content>
                <Footer>
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