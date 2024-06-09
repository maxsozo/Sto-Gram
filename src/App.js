import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginForm from './components/LoginPage/LoginForm';
import Register from './components/LoginPage/Register';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/register" element={<Register />} />
                {/* Додайте інші маршрути тут */}
            </Routes>
        </Router>
    );
}

export default App;
