import React, { useState, useEffect } from 'react';
import './App.css';

import ChatListItem from './components/ChatListItem';
import ChatIntro from './components/ChatIntro';
import ChatWindow from './components/ChatWindow';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

function App() {

  const [chatList, setChatList] = useState([
    {chatId: 1, title: 'fulano de tal', image: 'https://www.w3schools.com/howto/img_avatar2.png'},
    {chatId: 2, title: 'fulano de tal', image: 'https://www.w3schools.com/howto/img_avatar2.png'},
    {chatId: 3, title: 'fulano de tal', image: 'https://www.w3schools.com/howto/img_avatar2.png'},
    {chatId: 4, title: 'fulano de tal', image: 'https://www.w3schools.com/howto/img_avatar2.png'}
  ])
  const [activeChat, setActiveChat] = useState({})

  return (
    <div className="app-window">
      <div className="sidebar">

        <header>
          <img className="header--avatar" src="https://www.w3schools.com/howto/img_avatar2.png" alt="" />
          <div className ="header--buttons">
            <div className="header--btn">
              <DonutLargeIcon style = {{color: '#919191'}}/>
            </div>
            <div className="header--btn">
              <ChatIcon style = {{color: '#919191'}}/>
            </div>
            <div className="header--btn">
              <MoreVertIcon style = {{color: '#919191'}}/>
            </div>
          </div>
        </header>

        <div className="search">
          <div className="search--input">
            <SearchIcon fontSize="small" style = {{color: '#919191'}}/>
            <input type="search" placeholder="Procurar ou começar uma conversa" />
          </div>
        </div>

        <div className="chatlist">
          {chatList.map((item, key) => (
            <ChatListItem
              key={key}
              data={item}
              active ={activeChat.chatId === chatList[key].chatId}
              onClick={()=>setActiveChat(chatList[key])}
             />
          ))}
        </div>

      </div>
      <div className="contentarea">
        {activeChat.chatId !== undefined &&
          <ChatWindow />
        }
        {activeChat.chatId === undefined &&
          <ChatIntro />
        }
      </div>
    </div>
  );
}

export default App;
