import React, {useState} from 'react';
import './RegisterForm.scss';

import {Form, Input, Button, Checkbox, notification} from 'antd';
import  {UserOutlined, LockOutlined} from '@ant-design/icons';
import {emailValidation, minLenghtValidation} from '../../../utils/formValidation'

import {signUpApi} from "../../../api/user";

export default function RegisterForm(){
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
        repeatPassword: "",
        privacyPolicy: false
    });

    const [formValid, setFormValid] = useState({
        email: false,
        password: false,
        repeatPassword: false,
        privacyPolicy: false
    });

    const changeForm = e => {
        if(e.target.name === "privacyPolicy"){
            setInputs({...inputs, [e.target.name]: e.target.checked});}
        else{
            setInputs({...inputs, [e.target.name]: e.target.value});}
    };

    const inputValidation = e =>{
        const {type, name} = e.target;
        
        if(type==="email"){
            setFormValid({ ...formValid, [name]: emailValidation(e.target)});}
        
        if(type==="password"){
            setFormValid({...formValid,[name]: minLenghtValidation(e.target, 6)});}

        if(type === "checkbox"){
            setFormValid({...formValid,[name]: e.target.checked});}
    }

    const register = async e =>{
        e.preventDefault();
        
        const emailValue = inputs.email;
        const passwordValue = inputs.password;
        const repeatPasswordValue = inputs.repeatPassword;
        const privacyPolicyValue = inputs.privacyPolicy;

        if(!emailValue || !passwordValue || !repeatPasswordValue || !privacyPolicyValue){
            notification['error']({message: "Todos los campos son obligatorios"});
        }else{
            if(passwordValue !== repeatPasswordValue){
                notification['error']({message: "Las contraseñas no coinciden"});
            }else{
                const result = await signUpApi(inputs);
                if (!result.ok){
                    notification['error']({message: result.message});
                }else{
                    notification['success']({message: result.message});
                    resetForm();
                }
            }
        }
    }

    const resetForm = () => {
        const inputs = document.getElementsByTagName("input");
        for (let i = 0; i < inputs.length; i++){
            inputs[i].classList.remove("success");
            inputs[i].classList.remove("error");
        }
        setInputs({
            email: "",
            password: "",
            repeatPassword: "",
            privacyPolicy: false
        })

        setFormValid({
            email: false,
            password: false,
            repeatPassword: false,
            privacyPolicy: false
        })
    }

    return (
        <Form className="register-form" onChange={changeForm} onSubmitCapture={register}>
            <Form.Item>
                <Input 
                prefix={<UserOutlined style={{color:"rgba(0,0,0,.25)"}} />}
                type="email"
                name="email"
                placeholder="Correo electrónico"
                className="register-form__input"
                onChange={inputValidation}
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
                    onChange={inputValidation}
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
                    onChange={inputValidation}
                    value={inputs.repeatPassword}
                    />
            </Form.Item>
            <Form.Item>
                <Checkbox
                    name="privacyPolicy" checked={inputs.privacyPolicy} onChange={inputValidation}>
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