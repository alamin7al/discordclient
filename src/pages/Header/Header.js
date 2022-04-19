import React from 'react'
import '../Navigation/Navigation.css'
import { BsDownload } from 'react-icons/bs';
import background from '../img/discord.png'

export default function Header() {
  const myStyle = {
    background: `url(${background})`,
    height: '530px',
    width: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  

  return (
    <div style={myStyle}>
      <div
  data-aos="fade-up"
  data-aos-duration="1000"
      className="d-flex justify-content-center align-items-center" style={{ height: '100%' }} >
        <div style={{width:'600px',height:'350px', color:'white'}}>
          <h1 style={{ fontWeight: '800' }} className=' discord-heder'> IMAGINE A PLACE...</h1>
          <p className='discord-text'>...where you can belong to a school club, a gaming group, or a worldwide art community. Where  just you and a handful of friends can spend time together...</p>

          <button  className='btnheder2 me-3 mb-2'><BsDownload className='fs-5'></BsDownload> Download For Windows</button>
          <button  className='btnheder3'> Open Discord in Your Browser</button>
        </div>
      </div>
    </div>
  )
}
