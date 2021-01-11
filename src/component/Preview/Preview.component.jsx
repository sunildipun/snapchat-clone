import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { selectCameraImage, resetCameraImage } from '../../features/cameraSlice';
import './Preview.style.css';

import {v4 as uuid} from 'uuid';
import {db, storage} from './../../firebase';
import firebase from 'firebase';

import CloseIcon from '@material-ui/icons/Close';
import TextFieldsIcon from '@material-ui/core/icon';
import CreateIcon from '@material-ui/icons/Create';
import NoteIcon from '@material-ui/icons/Note';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import CropIcon from '@material-ui/icons/Crop';
import SendIcon from '@material-ui/icons/Send';



const Preview = () => {
    const cameraImage = useSelector(selectCameraImage);
    const history = useHistory();
    const  dispatch = useDispatch();

    useEffect(() => {
        if(!cameraImage) {
            history.replace('/');
        }
    }, [cameraImage, history]);

    const closePreview = () => {
        dispatch(resetCameraImage())
        // history.replace('/');
    };

    const sendPost = () => {
        const id = uuid();
        const uploadtask = storage.ref(`posts/${id}`).putString(cameraImage, "data_url");

        uploadtask.on('state_changed', null, (error) => {
            console.log(error);
        }, () => {
            storage.ref('posts').child(id).getDownloadURL().then(url => {
                db.collection('posts').add({
                    imageUrl: url,
                    userName: 'Sunil',
                    read: false,
                    // profilePic,
                    timeStamp: firebase.firestore.FieldValue.serverTimestamp()
                })
                history.push('/chats');
            });
        });
    }

    return (
        <div className="preview">
            <CloseIcon onClick={closePreview} className="preview__close"/>
            <div className="preview__toolbarRight">
                <TextFieldsIcon />
                <CreateIcon />
                <NoteIcon />
                <MusicNoteIcon />
                <AttachFileIcon />
                <CropIcon />
            </div>
            <img src={cameraImage} alt="myimage" />
            <div className="preview__footer" onClick={sendPost}>
                <h2>Send</h2>
                <SendIcon fontSize="small" className="preview__sendIcon" />
            </div>
        </div>
    )
}

export default Preview;
