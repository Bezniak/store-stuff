import React from "react";
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";

import styles from "../../styles/Sidebar.module.css";
import {ROUTES} from "../../utils/routes";
import Terms from "../Terms/Terms";

const Sidebar = () => {
    const {list} = useSelector(({categories}) => categories);

    const listLimit = list.filter((_, i) => i < 8);

    return (
        <section className={styles.sidebar}>
            <div className={styles.title}>CATEGORIES</div>
            <nav>
                <ul className={styles.menu}>
                    {listLimit.map(({id, name}) => (
                        <li key={id}>
                            <NavLink
                                className={({isActive}) =>
                                    `${styles.link} ${isActive ? styles.active : ""}`
                                }
                                to={`/categories/${id}`}
                            >
                                {name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className={styles.footer}>
                <NavLink to={ROUTES.HELP} className={styles.link}>
                    Help
                </NavLink>
                <NavLink to={ROUTES.TERMS}
                         className={styles.link}
                         style={{textDecoration: "underline"}}
                >
                    Terms & Conditions
                </NavLink>
            </div>
        </section>
    );
};

export default Sidebar;