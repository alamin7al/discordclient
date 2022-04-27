import React from 'react'
import '../Navigation/Navigation.css'
import '../carear/Carer.css'
import { BsDownload } from 'react-icons/bs';
import background from '../img/discord.png'
import { Link } from 'react-router-dom';
import DownloadModal from '../download/DownloadModal';


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
        className="d-flex justify-content-center align-items-center flex-wrap" style={{ height: '100%' }} >
        <div style={{ width: '600px', height: '350px', color: 'white' }}>
          <h1 style={{ fontWeight: '800' }} className='discord-heder'> IMAGINE A PLACE...</h1>
          <p className='discord-text'>...where you can belong to a school club, a gaming group, or a worldwide art community. Where  just you and a handful of friends can spend time together...</p>
        

            <button className='btnheder2 me-3 mb-2'><BsDownload className='fs-5'></BsDownload> <DownloadModal /> </button>
            <Link className='btnheder3' to='/login'>
              Open Discord in your browser
            </Link>
  
        </div>
      </div>
    </div>
  )
}
