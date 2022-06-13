import styleCss from "../../styles/popup.module.css";
import { Button, Form, Alert } from 'react-bootstrap';
import React, { useState, useContext } from 'react';
import { Modal } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom'
import RegisterPop from '../modals/register';
import { UserContext } from "../../contex/userContext";
import { API, setAuthToken } from '../../config/api'



function LoginPop(props) {

    const [registerShow, setRegisterShow] = React.useState(false);
    const navigate = useNavigate();
    const [, dispatch] = useContext(UserContext);
    const [message, setMessage] = useState(null);
    const [login, setLogin] = useState({
        email: "",
        password: "",
    })

    const { email, password } = login;

    const handleChange = (e) => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

        
            const config = {
                headers: {
                    "Content-type": "application/json"
                }
            }

            
            const body = JSON.stringify(login)

            
            const response = await API.post('/login', body, config)
            // console.log(response)

            setAuthToken(response.data.data.token);
            // console.log(response.data.data);
            if (response?.status === 200) {
                dispatch({
                    type: "login",
                    payload: response.data.data,
                });

                if (response.data.data.member === "TypeA") {
                    navigate("/home");
                }
                if (response.data.data.member === "TypeB") {
                    navigate("/homeB");
                }
                else if (response.data.data.member === "TypeC") {
                    navigate("/homeC")
                }

                const alert = (
                    <Alert variant="success" className="py-1">
                        Login success
                    </Alert>
                );
                setMessage(alert);
            }

        } catch (error) {
            const alert = (
                <Alert variant="danger" className="py-1">
                    recheck email password.<br/>
                    data cannot be empty.
                </Alert>
            );
            setMessage(alert);
            console.log(error);
        }
    };

    return (
        <Modal
            {...props}
            size="lg"
            centered
        >
            <div>
                
                <Form onSubmit={handleSubmit}  className={styleCss.form}>
                    <div className={styleCss.formGroup}>
                        <h1 className={styleCss.header}>Login</h1>
                        <Form.Control
                            className={styleCss.inputGroup}
                            name="email"
                            value={email}
                            placeholder="Email"
                            type="email"
                            onChange={handleChange}
                        />

                        <Form.Control
                            className={styleCss.inputGroup1}
                            name="password"
                            value={password}
                            placeholder="Password"
                            type="password"
                            onChange={handleChange}
                        />
                        {message}
                        <Button variant="primary" type="submit" className={styleCss.button} >Sign In</Button>

                        <p
                            onClick={() => setRegisterShow(true)}
                            className={styleCss.link}
                            style={{ cursor: "pointer" }}
                        >
                            Don't have an account ? Klik <strong>Here</strong>
                        </p>
                    </div>
                    <RegisterPop
                        show={registerShow}
                        onHide={() => setRegisterShow(false)}
                    />
                </Form>
                
            </div>
        </Modal>
    );
}

export default LoginPop;