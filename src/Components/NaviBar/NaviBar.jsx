import {Button, Form, FormGroup, Modal, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import React, {useRef, useState} from "react";
import { Formik, useField } from 'formik';
import * as yup from 'yup';
import cssProperties from './Navibar.css'

async function generateJSONForLogIn() {
    const emailInput = document.getElementsByName('email')[0];
    const passwordInput = document.getElementsByName('password')[0];

    const email = emailInput.value;
    const password = passwordInput.value;

    const data = {
        email: email,
        password: password
    };

    const jsonData = JSON.stringify(data);


    const downloadLink = document.createElement('a');
    downloadLink.href = 'data:application/json;charset=utf-8,' + encodeURIComponent(jsonData);
    downloadLink.download = 'data.json';
    downloadLink.click();
}
async function generateJSONForSignIn() {
    const emailInput = document.getElementsByName('email')[0];
    const passwordInput = document.getElementsByName('password')[0];
    const firstNameInput = document.getElementsByName('firstName')[0];
    const secondNameInput = document.getElementsByName('secondName')[0];
    const surnameInput = document.getElementsByName('surname')[0];
    const codeInput = document.getElementsByName('code')[0];

    const email = emailInput.value;
    const password = passwordInput.value;
    const firstName = firstNameInput.value;
    const secondName = secondNameInput.value;
    const surname = surnameInput.value;
    const code = codeInput.value;

    const data = {
        email: email,
        password: password,
        firstName: firstName,
        secondName: secondName,
        surname: surname,
        code: code
    };

    const jsonData = JSON.stringify(data);


    const downloadLink = document.createElement('a');
    downloadLink.href = 'data:application/json;charset=utf-8,' + encodeURIComponent(jsonData);
    downloadLink.download = 'data.json';
    downloadLink.click();
}

function NaviBar(){

    function yes(){
        console.log("ds")
    }

    const inputRef = useRef()
    const [logIn, setLogIn] = useState(false)
    const [signIn, setRegister] = useState(false)
    const [director, setDirector] = useState(false)
    const initialValues = {
        email: '',
        password: '',
    };
    const initialValuesSignIn = {
        email: '',
        password: '',
        firstName: '',
        secondName: '',
        surname:'',
        code:'',
    }

    const handleClose = () => setLogIn(false) & setRegister(false)
    const handleLogIn = () => setLogIn(true)
    const handleRegister = () => setRegister(true)

    const handleBlock = (event) => {
        setDirector(event.target.checked)
    }

    const handleReset = () => {
        inputRef.current.value = '';
    };


    const validationSchema = yup.object().shape({
        email: yup.string().email().required('Email is required'),
        password: yup.string().min(8, 'Minimal length is 8').required('Password is required'),
        checkPassword: yup
            .string()
            .oneOf([yup.ref('password'), null], 'Passwords do not match')
            .min(8, 'Minimal length is 8')
            .required('Check password is required')
    });
    const validationSchemaForSignIn = yup.object().shape({
        email: yup.string().email().required('Email is required'),
        password: yup.string().min(8, 'Minimal length is 8').required('Password is required'),
        checkPassword: yup
            .string()
            .oneOf([yup.ref('password'), null], 'Passwords do not match')
            .min(8, 'Minimal length is 8')
            .required('Check password is required'),
        firstName: yup.string().min(2, 'Minimal length is 2'),
        secondName: yup.string().min(2, 'Minimal length is 2'),
        surname: yup.string()
    });

    const FormField = ({ className, name, label, ...props }) => {
        const [field, meta] = useField(name);
        const isValid = meta.touched && meta.error  === undefined;
        const isInvalid = meta.touched && meta.error !== undefined;

        return (
            <Form.Group className={className} controlId={name}>
                <Form.Label>{label}</Form.Label>
                <Form.Control
                    name={name}
                    {...props}
                    value={field.value}
                    isValid={isValid}
                    isInvalid={isInvalid}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                />
                {isInvalid && <Form.Text className="text-danger">{meta.error}</Form.Text>}
            </Form.Group>
        );
    };
    return(
        <>
            <Navbar className="Navbar" collapseOnSelect expand="lg" style={cssProperties} >
                <Navbar.Brand className="Title">Accounting</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><Link to="/" className="link1">Главная</Link></Nav.Link>
                        <Nav.Link><Link to="/info" className="link2">Информация</Link></Nav.Link>
                        <Nav.Link><Link to="/support" className="link3">Поддержка</Link></Nav.Link>
                    </Nav>
                    <Nav className="align-top">
                        <Button variant="dark" className="me-1" onClick={handleLogIn}>Log In</Button>
                        <Button variant="dark" className="me-1" onClick={handleRegister}>Sign Up</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Modal show={logIn} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Авторизация</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={yes}>
                        {() => (
                            <Form style={{ padding: 10 }}>
                                <FormField
                                    className="mb-3"
                                    name="email"
                                    type="email"
                                    label="Email"
                                    placeholder="Введите email"
                                />
                                <FormField
                                    className="mb-3"
                                    name="password"
                                    type="password"
                                    label="Пароль"
                                    placeholder="Введите пароль"
                                />
                                <FormGroup>
                                    <Button variant="dark" className="me-2" onClick={generateJSONForLogIn} >Log In</Button>
                                    <Button variant="secondary" className="me-2" onClick={handleClose}>Discard</Button>
                                </FormGroup>
                            </Form>
                        )}
                    </Formik>
                </Modal.Body>
            </Modal>
            <Modal show={signIn} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Регистрация</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik initialValues={initialValuesSignIn} validationSchema={validationSchemaForSignIn} onSubmit={yes} >
                        {() => (
                            <Form style={{ padding: 10 }}>
                                <FormField
                                    className="mb-3"
                                    name="email"
                                    type="email"
                                    label="Email"
                                    placeholder="Введите email"
                                />
                                <FormField
                                    className="mb-3"
                                    name="password"
                                    type="password"
                                    label="Пароль"
                                    placeholder="Введите пароль"
                                />
                                <FormField
                                    className="mb-3"
                                    name="firstName"
                                    type="firstName"
                                    label="Имя"
                                    placeholder="Введите имя"
                                />
                                <FormField
                                    className="mb-3"
                                    name="secondName"
                                    type="secondName"
                                    label="Фамилия"
                                    placeholder="Введите фамилию"
                                />
                                <FormField
                                    className="mb-3"
                                    name="surname"
                                    type="surname"
                                    label="Отчество"
                                    placeholder="Введите отчество"
                                />
                                <FormField
                                    className="mb-3"
                                    name="code"
                                    type="code"
                                    label="Код"
                                    placeholder="Введите код"
                                    disabled={director}
                                    ref={inputRef}
                                />
                                <Form.Group controlId="fromBasicCheckBox">
                                    <Form.Check type="checkbox" label="Вы владелец?" onChange={handleBlock} onClick={handleReset}/>
                                </Form.Group>
                                <FormGroup>
                                    <Button  variant="dark" className="me-2" onClick={generateJSONForSignIn}>Sign Up</Button>
                                    <Button  variant="secondary" className="me-2" onClick={handleClose}>Discard</Button>
                                </FormGroup>
                            </Form>
                        )}
                    </Formik>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default NaviBar;