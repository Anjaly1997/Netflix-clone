import React from 'react'
import './Banner.css'

function Banner() {
  return (
    <div className='banner'>
        <div className='content'>
            <h1 className='title'>Movie Name</h1>
            <div className="banner_buttons">
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi beatae mollitia sequi obcaecati, quo cum quia eos ex amet neque omnis ipsam</h1>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner