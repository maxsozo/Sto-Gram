import styles from './LoginForm.module.css';
import React, { useState } from 'react';


const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <div className={styles.container}>
            <div className={styles.formWrapper}>
                <h1 className={styles.title}>Sto-Gram</h1>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input className={styles.input} type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input className={styles.input} type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <button className={styles.button} type="submit">Увійти</button>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;