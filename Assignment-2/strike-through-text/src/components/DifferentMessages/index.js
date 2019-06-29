import React from 'react';
import './styles.css'

function DifferentMessages(props){
    return (
        <div className="msgs-list">
            <div className="success-msg">Well Done! You are good to go..</div>
            <div className="info-msg">Heads up! this is an info..</div>
            <div className="warning-msg">Warning! better check yourself..</div>
            <div className="error-msg">oh snap! change a few things up..</div>
        </div>
    )
}

export default DifferentMessages