import React from "react";
import style from "../styles/home.module.css";
import { Col, } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuBarB from '../component/navbars/navbarB';
import ContentB from '../component/card/contentB';
import Logo from '../assets/logo.png'



function HomeB() {


    return (
        <div className={style.back}>
            <MenuBarB />
            <img src={Logo} style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '600px', marginTop: '30px' }} />
            <p className={style.textB}>Selamat datang di CryptoMaster, anda terdaftar sebagai member Type B</p>
            <Col className="d-flex flex-wrap">
                <ContentB />
            </Col>
        </div>
    )
}

export default HomeB;