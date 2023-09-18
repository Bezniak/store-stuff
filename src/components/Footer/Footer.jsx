import React from 'react';
import styles from '../../styles/Footer.module.css'
import {Link} from "react-router-dom";
import {ROUTES} from "../../utils/routes";
import LOGO from '../../images/logo.svg'

const Footer = () => {
    return (
        <section className={styles.footer}>
            <div className={styles.logo}>
                <Link to={ROUTES.HOME}>
                    <img src={LOGO} alt="stuff"/>
                </Link>
            </div>
            <div className={styles.rights}>
                Developed by <a
                href="https://www.linkedin.com/in/ivan-bezniak-2634a11a0/"
                target='_blank'
                rel='noreferrer'
            >Ivan Bezniak</a>
            </div>
            <div className={styles.socials}>
                <a
                    href="https://www.instagram.com/ivan_bezniak/?next=%2F"
                    target='_blank'
                    rel='noreferrer'
                >
                    <svg className="icon">
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`}/>
                    </svg>
                </a>
                <a
                    href="https://www.facebook.com/vanja.besnjak/"
                    target='_blank'
                    rel='noreferrer'
                >
                    <svg className="icon">
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`}/>
                    </svg>
                </a>
                <a
                    href="https://www.youtube.com/channel/UCiEP92X3zqyCMIfsEJzhPNQ"
                    target='_blank'
                    rel='noreferrer'
                >
                    <svg className="icon">
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`}/>
                    </svg>
                </a>
            </div>
        </section>
    );
};

export default Footer;