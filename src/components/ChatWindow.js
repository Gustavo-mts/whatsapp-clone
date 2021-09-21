import React from 'react';
import './ChatWindow.css';

import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default() => {
    return (
        <div className="chatWindow">
            <div className="chatWindow--header">

                <div className="chatWindow--headerinfo">
                    <img className="chatWindow--avatar" src="https://www.w3schools.com/howto/img_avatar2.png"/>
                    <div className="chatWindow--name">Gustavo Martins</div>
                </div>
                <div className="chatWindow--headerbuttons">

                    <div className="chatWIndow--btn">
                        <SearchIcon style={{color: '#919191'}} />
                    </div>
                    <div className="chatWIndow--btn">
                        <AttachFileIcon style={{color: '#919191'}} />
                    </div>
                    <div className="chatWIndow--btn">
                        <MoreVertIcon style={{color: '#919191'}} />
                    </div>
                    
                </div>
                
                        
            </div>
            <div className="chatWindow--body"></div>
            <div className="chatWindow--footer"></div>
        </div>
    );
}