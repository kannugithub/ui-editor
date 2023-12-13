import React from 'react';
import user from "../Assets/Images/user-demo.jpg";
import weather from "../Assets/Images/weather.png";

const Header = () => {
  return (
    <>
        <div className='main-header'>
            <div className='inner'>
                <div className='left-sec'>
                    <span><img src={user} alt="user" /></span>

                    <span className='title'>John Smith</span>
                </div>
                <div className='right-sec'>
                    <img src={weather} alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Header