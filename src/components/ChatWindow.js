import React, {useState} from 'react';
import './ChatWindow.css';
import EmojiPicker from 'emoji-picker-react';

import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import MicIcon from '@mui/icons-material/Mic';

export default() => {

    const [emojiOpen, setEmojiOpen] = useState(false);

    const handleEmojiClick = () => {

    };

    const handleEmojiOpen = () => {
        setEmojiOpen(true)
    };

    const handleEmojiClose = () => {
        setEmojiOpen(false)
    };


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

            <div className="chatWindow--emojiarea"
                style={{height: emojiOpen ? '200px' : '0px'}}>
                <EmojiPicker
                    onEmojiClick={handleEmojiClick}
                    disableSearchBar
                    disableSkinTonePicker
                />
            </div>
            <div className="chatWindow--footer">

                <div className="chatWindow--pre">

                    <div
                        className="chatWIndow--btn"
                        onClick={handleEmojiClose}
                        style={{width: emojiOpen?40:0}}
                     >
                        <CloseIcon style={{color:'#919191'}} />
                    </div>

                    <div
                        className="chatWIndow--btn"
                        onClick={handleEmojiOpen}
                     >
                        <InsertEmoticonIcon style={{color: emojiOpen?'#009688':'#919191'}} />
                    </div>   

                </div>

                <div className="chatWindow--inputArea">
                    <input 
                    className="chatWindow--input" 
                    type="text"
                    placeholder="Digite uma mensagem"
                    />
                </div>

                <div className="chatWindow--pos">

                    <div className="chatWIndow--btn">
                        <SendIcon style={{color: '#919191'}} />
                    </div> 

                </div>
            </div>
        </div>
    );
}