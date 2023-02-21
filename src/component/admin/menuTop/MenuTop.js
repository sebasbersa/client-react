import React from 'react';
import SebastianLogo from '../../../assets/img/png/logo.png';
import { Button,  } from "antd";
import {MenuOutlined , CloseOutlined , PoweroffOutlined }from '@ant-design/icons';
import "./MenuTop.scss";

export default function MenuTop(props){
    const {menuCollapsed, setMenuCollapsed} = props;

    return (
        <div className="menu-top">
            <div className="menu-top__left">
                <img 
                className="menu-top__left-logo"
                src={SebastianLogo}
                alt="Sebastian Berrios"
                />
                <Button type="link" onClick={()=> setMenuCollapsed(!menuCollapsed)}>
                <div>
                <MenuOutlined hidden={!menuCollapsed ? true : false} />
                <CloseOutlined hidden={menuCollapsed ? true : false} />
                </div>
                </Button>
            </div>
            <div className="menu-top__right">
                <Button type="link" onClick={()=> console.log("click 2")}>
                <PoweroffOutlined/>
                </Button>
            </div>
        </div>
    )
}