import React from 'react';
import './ChatIntro.css';
import Logo from '../image1.jpg';
export default() => {
    return (
        <div className="ChatIntro">
            <img src={Logo} />
            <h1>Mantenha seu celular conectado.</h1>
            <h2>O WhatsApp conecta ao seu telefone para sincronizar suas mensagens.<br/>Para reduzir o uso de dados, conecte-se a uma rede Wi-fi.</h2>
        </div>
    );
}