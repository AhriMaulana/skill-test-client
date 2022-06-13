import React from "react";
import style from '../../styles/detail.module.css'
import VideoPlayer from "react-video-js-player"
import Crypto from "../../assets/sample.mp4"
import Chart from "../../assets/trading.png"
import image from "../../assets/gambar2.jpg"
import '../../styles/video.css'
import MenuBarB from '../../component/navbars/navbarB';
import Logo from '../../assets/logo.png'


function ContentDetailB() {

    const videoSrc = Crypto;
    const poster = Chart;

    return (
        <div className={style.back}>
            <MenuBarB />
            <img src={Logo} style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '600px', marginTop: '30px' }} />
            <p className={style.text2}>Selamat datang di CryptoMaster, anda terdaftar sebagai member Type B</p>
            <div className={style.container}>

                <h1 className={style.title}>
                    Know What Cryptocurrency is and How it Works
                </h1>

                <img src={image} alt=":'(" className={style.image} />

                <p className={style.text}>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

                </p>

                <p className={style.videotitle}>Watch Course Video</p>

                <VideoPlayer
                    src={videoSrc}
                    poster={poster}
                    width="720"
                    heigh="420"
                    playbackRates={[0.5, 1, 3.85, 16]}
                />

            </div>
        </div>
    )
}

export default ContentDetailB;