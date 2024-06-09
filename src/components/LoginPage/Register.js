import React from 'react';
import styles from './Register.module.css';

const Register = () => {
    return (
        <div className={styles.container}>
            <div className={styles.formWrapper}>
                <h1 className={styles.title}>Registration</h1>
                <form className={styles.form}>
                    <input className={styles.input} type="text" placeholder="Username" />
                    <input className={styles.input} type="email" placeholder="Email" />
                    <input className={styles.input} type="password" placeholder="Password" />
                    <button className={styles.button} type="submit">Зареєструватися</button>
                </form>
                <p className={styles.registerPrompt}>
                    Вже маєте акаунт? <a href="/login" className={styles.registerLink}>Увійти</a>
                </p>
            </div>
        </div>
    );
}

export default Register;