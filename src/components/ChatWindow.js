import React, {useState, useEffect, useRef} from 'react';
import './ChatWindow.css';
import EmojiPicker from 'emoji-picker-react';

import MessageItem from './MessageItem';

import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import MicIcon from '@mui/icons-material/Mic';

export default({user}) => {

    const body = useRef();

    let recognition = null;
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if(SpeechRecognition !== undefined) {
        recognition = new SpeechRecognition();
    }

    const [emojiOpen, setEmojiOpen] = useState(false);
    const [text, setText] = useState('');
    const [listening, setListening] = useState(false);
    const [list, setList] = useState([
        {author: 123, body: 'bla bla tralala'},
        {author: 123, body: 'bla bla'},
        {author: 1234, body: 'bla bla ola'},
        {author: 123, body: 'bla bla tralala'},
        {author: 123, body: 'bla bla'},
        {author: 1234, body: 'bla bla ola'},
        {author: 123, body: 'bla bla tralala'},
        {author: 123, body: 'bla bla'},
        {author: 1234, body: 'bla bla ola'},
        {author: 123, body: 'bla bla tralala'},
        {author: 123, body: 'bla bla'},
        {author: 1234, body: 'bla bla ola'},
        {author: 123, body: 'bla bla tralala'},
        {author: 123, body: 'bla bla'},
        {author: 1234, body: 'bla bla ola'}
    ]);

    useEffect(()=>{
        if(body.current.scrollHeight > body.current.offsetHeight) {
            body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight;
        }
    }, [list])

    const handleEmojiClick = (e, emojiObject) => {
        setText(text + emojiObject);
    };

    const handleEmojiOpen = () => {
        setEmojiOpen(true);
    };

    const handleEmojiClose = () => {
        setEmojiOpen(false);
    };

    const handleSendClick = () => {

    }

    const handleMicClick = () => {
        if(recognition !== null) {

            recognition.onstart = () => {
                setListening(true);
            }
            recognition.onend = () => {
                setListening(false);
            }
            recognition.onresult = (e) => {
                setText(e.results[0][0].transcript);
            }
            recognition.start();
        }
    }

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
            <div ref={body} className="chatWindow--body">
                {list.map((item, key) => (
                    <MessageItem 
                        key={key}
                        data={item}
                        user={user}
                    />
                ))}
            </div>

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
                        value={text}
                        onChange={e=>setText(e.target.value)}
                    />
                </div>

                <div className="chatWindow--pos">
                    {text !== '' &&
                        <div onClick={handleSendClick} className="chatWIndow--btn">
                            <SendIcon style={{color:'#919191'}} />
                        </div> 
                    }
                    {text === '' &&
                        <div onClick={handleMicClick} className="chatWIndow--btn">
                            <MicIcon style={{color: listening?'#126ece' : '#919191'}} />
                        </div> 
                    }
                </div>
            </div>
        </div>
    );
}