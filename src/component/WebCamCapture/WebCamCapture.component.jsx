import React, {useRef, useCallback} from 'react';

import './WebCamCapture.style.css';

import WebCam from 'react-webcam';
import {useDispatch} from 'react-redux';

import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { setCameraImage } from '../../features/cameraSlice';
import { useHistory } from 'react-router-dom';

const videoConstraints = {
    width: 250,
    height: 400,
    facingMode: 'user'
}

const WebCamCapture = () => {
    
    const dispatch = useDispatch();
    const webCamRef = useRef(null);
    const history = useHistory();
    // const [image, setImage] = useState(null);

    const capture = useCallback(
        () => {
            const imageSrc = webCamRef.current.getScreenshot();
            // setImage(imageSrc);
            // console.log('Image Source',imageSrc);
            dispatch(setCameraImage(imageSrc));
            history.push('/preview');
        },
        [webCamRef]
    )

    return (
        <div className="webcamCapture">
            <WebCam 
                audio= {false}
                height= {videoConstraints.height}
                ref = {webCamRef}
                width = {videoConstraints.width}
                screenshotFormat="image/jpeg"
                videoConstraints={videoConstraints}
            />

            <RadioButtonUncheckedIcon  className="webcamCapture__button" onClick={capture} />
           
        </div>
    )
}

export default WebCamCapture;
