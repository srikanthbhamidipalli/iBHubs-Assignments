import React from 'react';

import NormalImage from './NormalImage'
import RoundCornerImage from './RoundCornerImage'
import CircularImage from './CircularImage'
import './styles.css'

function ImageShow(props){
    return (
        <div className="image-show">
            <span><NormalImage /></span>
            <span><RoundCornerImage/></span>
            <span><CircularImage /></span>
        </div>
    )
}

export default ImageShow