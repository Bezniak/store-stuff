import React from 'react';
import styles from '../../styles/Home.module.css';
import bannerImg from '../../images/banner.png';
import {ROUTES} from "../../utils/routes";
import {useNavigate} from "react-router-dom";

const Banner = () => {

    const navigate = useNavigate();
    return (
        <section className={styles.banner}>
            <div className={styles.left}>
                <p className={styles.content}>
                    NEW YEAR
                    <span>SALE</span>
                </p>
                <button onClick={() => navigate(ROUTES.CATEGORY)} className={styles.more}>See more</button>
            </div>
            <div className={styles.right}
                 style={{backgroundImage: `url(${bannerImg})`}}
            >
                <p className={styles.discount}>
                    save up to <span>50%</span> off
                </p>
            </div>
        </section>
    );
};

export default Banner;