import React, {useState} from "react";
import './NewChat.css';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default ({user, chatList, show, setShow}) => {
    const [list, setList] = useState([
        {id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: 'Gustavo Martins'},
        {id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: 'Gustavo Martins'},
        {id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: 'Gustavo Martins'},
        {id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: 'Gustavo Martins'}
    ])

    const handleClose = () => {
        setShow(false);
    };

    return (
        <div className="newChat" style={{left: show?0:'-415px'}}>
            <div className="newChat--head">
                <div onClick={handleClose} className="newChat--backButton">
                    <ArrowBackIcon style={{color:'#ffffff'}} />
                </div>
                <div className="newChat--headTitle">Nova Conversa</div>
            </div>
            <div className="newChat--list">
                {list.map((item ,key)=>(
                    <div className="newChat--item" key={key}>
                        <img className="newChat--itemAvatar" src={item.avatar}></img>
                        <div className="newChat--itemName">{item.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}