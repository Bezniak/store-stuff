import React from 'react';
import styles from '../../styles/Home.module.css';
import BG from '../../images/computer.png';
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../../utils/routes";


const Poster = () => {

    const navigate = useNavigate();

    const onButtonClick = () => {
        navigate(ROUTES.CART)
    }

    return (
        <section className={styles.home}>
            <div className={styles.title}>BIG SALE 20%</div>
            <div className={styles.product}>
                <div className={styles.text}>
                    <div className={styles.subtitle}>the bestseller of 2023</div>
                    <h1 className={styles.head}>LENNON r2d2 with NVIDIA 5090 TI</h1>
                    <button onClick={onButtonClick} className={styles.button}>Shop Now</button>
                </div>
                <div className={styles.image}>
                    <img src={BG} alt="computer"/>
                </div>
            </div>
        </section>
    );
};

export default Poster;