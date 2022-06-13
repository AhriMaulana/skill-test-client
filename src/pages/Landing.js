import { Button, Col, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import style from '../styles/landing.module.css'
import logo from '../assets/logo.png'
import MenuBar from '../component/navbars/navbarLanding';




function Landing() {

    

    return (
        <div className={style.back}>
            <Col>
                <MenuBar/>
            </Col>
            <img src={logo} alt=":'(" className={style.logo} />
            <p className={style.text}>
                cryptocurrency learning site <br/> with complete material <br/> and easy to understand for beginners
            </p>
           
        </div>
        

    );
}

export default Landing;
