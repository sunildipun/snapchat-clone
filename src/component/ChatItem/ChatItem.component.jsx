import { Avatar } from '@material-ui/core';
import { StopRounded } from '@material-ui/icons';
import React from 'react';
import './ChatItem.style.css';

import ReactTimeago from 'react-timeago';

const ChatItem = ({id, profilePic, userName, timeStamp, imageUrl, read}) => {
    return (
        <div className="chatItem">
           <Avatar className="chatItem__avatar" src={profilePic} /> 
           <div className="chatItem__info">
                <h4>{userName}</h4>
                <p>
                    Tap to view - 
                    <ReactTimeago date = {new Date(timeStamp?.toDate()).toUTCString()} />
                </p>
           </div>
           {!read && <StopRounded className="chatItem__readIcon" />}
        </div>

    )
}

export default ChatItem;
