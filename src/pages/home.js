import React from "react";
import style from "../styles/home.module.css";
import { Col, } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuBar from '../component/navbars/navbar';
import Content from '../component/card/content';
import Logo from '../assets/logo.png'



function Home() {


    return (
        <div className={style.back}>
            <MenuBar />
            <img src={Logo} style={{ display:'block',marginLeft:'auto',marginRight:'auto',width:'600px',marginTop:'30px'}}/>
            <p className={style.text}>Selamat datang di CryptoMaster, anda terdaftar sebagai member Type A</p>
            <Col className={style.container}>
                <Content/>
            </Col>
        </div>
    )
}

export default Home;