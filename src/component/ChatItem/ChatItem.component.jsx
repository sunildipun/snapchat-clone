import { Avatar } from '@material-ui/core';
import React from 'react';
import './ChatItem.style.css';

const ChatItem = ({id, profilePic, username, timeStamp, imageUrl, read}) => {
    return (
        <div>
           <Avatar src={profilePic} /> 
           <div className="chat__info">
                <h4>{username}</h4>
                <p>Tap to view</p>
           </div>
        </div>
    )
}

export default ChatItem;
