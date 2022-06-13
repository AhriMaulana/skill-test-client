import { Button, Navbar, Container } from "react-bootstrap";
import style from '../../styles/navbar.module.css'
import React from "react";
import logo from '../../assets/logo.png'
import LoginPop from '../modals/login';
import RegisterPop from '../modals/register';
import GoogleLogin from 'react-google-login';

function MenuBar() {

    const [loginShow, setLoginShow] = React.useState(false);
    const [registerShow, setRegisterShow] = React.useState(false);

    const responseSuccesGoogle = (googleData) => {
        console.log(googleData)
    }

    const responseErrorGoogle = (result) => {
        alert(result)
    }

    return (
        <div className={style.nav1}>
            <Navbar>
                <Container className={style.nav}>
                    <img src={logo} alt=":'(" className={style.logo} />
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        
                        <Button onClick={() => setRegisterShow(true)} className={style.navbutt1} >
                            Register
                        </Button>
                        <Button onClick={() => setLoginShow(true)} className={style.navbutt2}>
                            Login
                        </Button>
                        <GoogleLogin
                            className={style.google}
                            clientId="234050542753-bn7gagl03m5cjhcpkmhq3maleirajq7g.apps.googleusercontent.com"
                            buttonText="Login With Google"
                            onSuccess={responseSuccesGoogle}
                            onFailure={responseErrorGoogle}
                            cookiePolicy={'single_host_origin'}
                        />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <LoginPop
                show={loginShow}
                onHide={() => setLoginShow(false)}
            />
            <RegisterPop
                show={registerShow}
                onHide={() => setRegisterShow(false)}
            />
        </div>
    );
}

export default MenuBar;