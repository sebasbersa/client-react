import React, {useState} from 'react';
import './RegisterForm.scss';
import {Form, Input, Button, Checkbox, notification} from 'antd';
import { FormProvider } from 'rc-field-form';
import  {UserOutlined, LockOutlined} from '@ant-design/icons';

export default function RegisterForm(){
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
        repeatPassword: "",
        privacyPolicy: false
    });
    const changeForm = e => {
        if(e.target.name === "privacyPolicy"){
            setInputs({
                ...inputs,
                [e.target.name]: e.target.checked
            })
        }else{
            setInputs({
                ...inputs,
                [e.target.name]: e.target.value
            })
        }
    }
    return (
        <Form className="register-form" onChange={changeForm}>
            <Form.Item>
                <Input 
                prefix={<UserOutlined style={{color:"rgba(0,0,0,.25)"}} />}
                type="email"
                name="email"
                placeholder="Correo electrónico"
                className="register-form__input"
                value={inputs.email}
                
                />
            </Form.Item>
            <Form.Item >
                <Input 
                    prefix={<LockOutlined  style={{color:"rgba(0,0,0,.25)"}} />}
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    className="register-form__input"
                    value={inputs.password}
                    />
            </Form.Item>
            <Form.Item >
                <Input 
                    prefix={<LockOutlined  style={{color:"rgba(0,0,0,.25)"}} />}
                    type="password"
                    name="repeatPassword"
                    placeholder="Repetir contraseña"
                    className="register-form__input"
                    value={inputs.repeatPassword}
                    />
            </Form.Item>
            <Form.Item>
                <Checkbox
                    name="privacyPolicy" checked={inputs.privacyPolicy}>
                    He leído y acepto las políticas de privacidad.
                </Checkbox>
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit" className="register-form__button">
                    Crear Cuenta
                </Button>
            </Form.Item>
        </Form>
    )
}