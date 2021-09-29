import React, {useState, useEffect} from "react";
import './NewChat.css';

import Api from '../api';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default ({user, chatList, show, setShow}) => {
    const [list, setList] = useState([]);

    useEffect(()=>{
        const getList = async () => {
            if(user !== null) {
                let results = await Api.getContactList(user.id);
                setList(results);
            }
        }
        getList();
    }, [user]);

    const addNewChat = async (user2) => {
        await Api.addNewChat(user, user2);

        handleClose();
    }

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
                    <div onClick={()=> addNewChat(item)} className="newChat--item" key={key}>
                        <img className="newChat--itemAvatar" src={item.avatar}></img>
                        <div className="newChat--itemName">{item.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}