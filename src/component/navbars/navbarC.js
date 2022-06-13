import { Button, Navbar, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import style from '../../styles/navbar.module.css'
import React, { useContext } from "react";
import logo from '../../assets/logo.png'
import { UserContext } from "../../contex/userContext";


function MenuBarC() {

    const navigasi = useNavigate();
    const [, dispatch] = useContext(UserContext);
    const handleOut = () => {
        dispatch({
            type: 'logout',
        })
        navigasi('/')
    }

    return (
        <div className={style.nav1}>
            <Navbar>
                <Container className={style.nav}>
                    <Link to='/homeC'>
                        <img src={logo} alt=":'(" className={style.logo} />
                    </Link>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Button href='/homeC' className={style.navbutt1} >
                            Home
                        </Button>
                        <Button onClick={handleOut} className={style.navbutt2}>
                            Logout
                        </Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
}

export default MenuBarC;