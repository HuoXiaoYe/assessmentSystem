import React from 'react';
import "./success.css"

function Success() {
    return (
        <div className="success-container">
            <img src="/images/success.png" alt="vote_success" />
            <p style={{marginTop:".5rem"}}>恭喜您已经完成全部评测</p>
        </div>
    )
}

export default Success;