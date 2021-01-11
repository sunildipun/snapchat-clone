import React from 'react';
import './Chats.style.css';

import  { Avatar } from '@material-ui/core';

import SearchIcon from "@material-ui/icons/Search";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";


const Chats = () => {
    return (
        <div className="chats">
            <div className="chats__header">
                <Avatar className="chats__avatar" />
                <div className="chats__search">
                    <SearchIcon />
                    <input placeholder="Friends" type="text" />
                </div>
                <ChatBubbleIcon className="chats_chatIcon"/>
            </div>
        </div>
    )
}

export default Chats;
