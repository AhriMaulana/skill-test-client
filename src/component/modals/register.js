import styleCss from "../../styles/popup.module.css";
import { Button, Form, Alert } from 'react-bootstrap';
import React, { useState, useContext } from 'react';
import { Modal } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPop from '../modals/login';
import { API } from '../../config/api'
import GoogleLogin from 'react-google-login';


function RegisterPop(props) {

    const [loginShow, setLoginShow] = React.useState(false);

    const [message, setMessage] = useState(null);
    const [form, setForm] = useState({
        fullname: "",
        email: "",
        password: "",
        member: ""
    })

    const { fullname, email, password, TypeA, TypeB, TypeC  } = form;

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            const config = {
                headers: {
                    "Content-type": "application/json"
                }
            }

            const body = JSON.stringify(form)

            const response = await API.post('/register', body, config)
            console.log(response);

            // Notification
            if (response.data.status === "success...") {
                const alert = (
                    <Alert variant="success" className="py-1">
                        Success, Please click login button to login.
                    </Alert>
                );
                setMessage(alert);
            } else {
                const alert = (
                    <Alert variant="danger" className="py-1">
                        Double check all data make sure nothing is empty.<br />
                        E-mail must be active. 
                        Password min 6 char
                    </Alert>
                );
                setMessage(alert);
            }

        } catch (error) {
            const alert = (
                <Alert variant="danger" className="py-1">
                    Failed
                </Alert>
            );
            setMessage(alert);
            console.log(error);
        }
    };

    const responseSuccesGoogle = (result) => {
        alert(result)
    }

    const responseErrorGoogle = (googleData) => {
        console.log(googleData)
    }

    return (
        <Modal
            {...props}
            size="lg"
            centered
        >
            <div>

                <Form onSubmit={handleSubmit} className={styleCss.form}>
                    <div className={styleCss.formGroup}>
                        <h1 className={styleCss.header}>Register</h1>
                        <Form.Control
                            className={styleCss.inputGroup}
                            name="fullname"
                            value={fullname}
                            placeholder="Full Name"
                            type="text"
                            onChange={handleChange}
                        />

                        <Form.Control
                            className={styleCss.inputGroup}
                            name="email"
                            value={email}
                            placeholder="Email"
                            type="email"
                            onChange={handleChange}
                        />

                        <Form.Select aria-label="Default select example"
                            name="member"
                            onChange={handleChange}
                            className={styleCss.inputGroup2}>
                            <option>Select membership type</option>
                            <option value={TypeA}>TypeA</option>
                            <option value={TypeB}>TypeB</option>
                            <option value={TypeC}>TypeC</option>
                        </Form.Select>

                        <Form.Control
                            className={styleCss.inputGroup1}
                            name="password"
                            value={password}
                            placeholder="Password"
                            type="password"
                            onChange={handleChange}
                        />
                        {message}

                        <Button variant="primary" type="submit" className={styleCss.button} >Register</Button>
                        <p
                            onClick={() => setLoginShow(true)}
                            className={styleCss.link}
                            style={{ cursor: "pointer" }}
                        >
                            Don't have an account ? Klik <strong>Here</strong>
                        </p>
                        
                    </div>
                    <LoginPop
                        show={loginShow}
                        onHide={() => setLoginShow(false)}
                    />
                </Form>
                <div className="col-md6 text-center">
                    <p style={{ textAlign: "center" }}><strong>OR</strong></p>
                    <GoogleLogin
                        clientId="234050542753-bn7gagl03m5cjhcpkmhq3maleirajq7g.apps.googleusercontent.com"
                        buttonText="Login With Google"
                        onSuccess={responseSuccesGoogle}
                        onFailure={responseErrorGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                </div>
            </div>
        </Modal>
    );
}

export default RegisterPop;