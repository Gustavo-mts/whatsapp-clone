import React from 'react';
import './Login.css';

export default () => {

    const handleFacebookLogin = () => {
        let result = await Api.fbPopup();
        if(result) {

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