import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } 
                                                       from 'react-router-dom';
import { isAuthenticated } from "./services/auth";
import SignUp from "./pages/signup" 

const LoginPage = () => <h1>Login</h1>;
const SignUpPage = () => <SignUp/>;
const NotFoundPage = () => <h1>Page not found.</h1>
const AppPage = () => {
    if (!isAuthenticated()){
        return <Navigate to="/" replace/>
    }
    return <h1>App</h1>;
}
 
const Rotas = () => (
    <Router>
        <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='/signup' element={<SignUpPage />} />
            <Route path='/app' element={<AppPage />} />
            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    </Router>    
);
 
export default Rotas;