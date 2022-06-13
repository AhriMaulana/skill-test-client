import React from "react";
import style from "../styles/home.module.css";
import { Col, } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuBarC from '../component/navbars/navbarC';
import ContentC from '../component/card/contentC';
import Logo from '../assets/logo.png'



function HomeC() {


    return (
        <div className={style.back}>
            <MenuBarC />
            <img src={Logo} style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '600px', marginTop: '30px' }} />
            <p className={style.textB}>Selamat datang di CryptoMaster, anda terdaftar sebagai member Type C</p>
            <Col className="d-flex flex-wrap">
                <ContentC />
            </Col>
        </div>
    )
}

export default HomeC;