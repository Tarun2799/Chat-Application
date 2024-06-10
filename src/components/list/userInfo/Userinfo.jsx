import React from 'react';
import "./userInfo.css";

const Userinfo = () => {
  return (
    <div className='userInfo'>
        <div className="user">
            <img src="public\avatar.png" alt=""  />
            <h2>Tarun Jhamb</h2>
        </div>
        <div className="icons">
            <img src="public\more.png" />
            <img src="public\video.png" />
            <img src="public\edit.png" />
        </div>
    </div>
  )
}

export default Userinfo