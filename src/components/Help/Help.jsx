import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {createUser} from "../../user/userSlice";
import styles from "../../styles/Help.module.css";

const Help = () => {

    const [values, setValues] = useState({
        name: "",
        email: "",
        textarea: "",
    });

    const handleChange = ({ target: { value, name } }) => {
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const isNotEmpty = Object.values(values).every((val) => val);

        if (!isNotEmpty) return;


    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>Wright us!</div>

            <form className={styles.form} onSubmit={handleSubmit}>

                <div className={styles.group}>
                    <input
                        type="name"
                        placeholder="Your name"
                        name="name"
                        value={values.name}
                        autoComplete="off"
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className={styles.group}>
                    <input
                        type="email"
                        placeholder="Your email"
                        name="email"
                        value={values.email}
                        autoComplete="off"
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className={styles.group}>
                    <textarea
                        placeholder="Your message"
                        name="textarea"
                        value={values.textarea}
                        autoComplete="off"
                        onChange={handleChange}
                        required
                    />
                </div>
                <button>Send request</button>
            </form>
        </div>
    );
};

export default Help;