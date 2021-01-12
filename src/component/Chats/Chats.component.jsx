import React, {useState, useEffect} from 'react';
import './Chats.style.css';

import ChatItem from "./../ChatItem/ChatItem.component";

import {db} from './../../firebase'

import  { Avatar } from '@material-ui/core';

import SearchIcon from "@material-ui/icons/Search";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";


const Chats = () => {
    const [posts, setPost] = useState([]);

    useEffect(() => {
        console.log('Inside use effect');
        db.collection('posts').orderBy('timeStamp','desc').onSnapshot(snap => {
            console.log('Snap', snap.docs);
            setPost(snap.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
            console.log('Posts', posts);
        });
    }, []);

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
            <div className="chats__posts">
                {posts.map(({id, data: {profilePic, userName, timeStamp, imageUrl, read}}) => (
                    <ChatItem key={id} profilePic={profilePic} userName={userName} imageUrl={imageUrl} timeStamp={timeStamp} read={read} />
                ))}
            </div>
        </div>
    )
}

export default Chats;
