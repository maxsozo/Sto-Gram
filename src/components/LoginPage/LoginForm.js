import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './LoginForm.module.scss';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

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
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        className={styles.input}
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className={styles.button} type="submit">Увійти</button>
                </form>
                <p className={styles.registerPrompt}>
                    Не маєте акаунту? <Link to="/register" className={styles.registerLink}>Зареєструватися</Link>
                </p>
            </div>
        </div>
    );
}

export default LoginForm;