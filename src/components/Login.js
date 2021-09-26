import React from 'react';
import Api from '../api';
import './Login.css';

export default ({onReceive}) => {

    const handleFacebookLogin = async () => {
        let result = await Api.fbPopup();
        if(result) {
            onReceive(result.user)
        } else {
            alert("Erro!");
        }
    }
    return (
        <div className="login">
            <button onClick={handleFacebookLogin}>Login com Facebook</button>
        </div>
    );
}