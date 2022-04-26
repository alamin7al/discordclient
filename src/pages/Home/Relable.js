import React from 'react'
import pic from '../img/home3.svg'
import pic2 from '../img/home6.svg'
import { BsDownload } from 'react-icons/bs';
import Footer from '../Footer/Footer';
import DownloadModal from '../download/DownloadModal';

export default function Relable() {
    return (
        <div style={{ background: '#F6F6F6', }} className='  clearfix'>
            <div className=' d-flex justify-content-center align-items-center  '  >
                <div 
                  data-aos="fade-up"
                  data-aos-duration="1000"
                
                className=' '>
                    <h1 className='discord-headline '>RELIABLE TECH FOR STAYING CLOSE</h1>
                    <p className='my-4 text-center' style={{ lineHeight: '1.6rem', fontSize: '17px' }}>Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch <br /> friends stream their  games, or gather up and have a drawing session with screen share.</p>
                    <img className='img-fluid ' src={pic} alt="" />

                    <div className='' style={{ background: '#F6F6F6', width: 'auto', height: '300px' }}>
                        <img className='img-fluid' src={pic2} alt="" />
                        <h3 className='discord-relable'>Ready to start your journey?</h3>
                        <button className='btnheder4 mt-5 '><BsDownload className='fs-5'></BsDownload> <DownloadModal/></button>
                    </div>

                </div>

            </div>
            <Footer></Footer>

        </div>
    )
}
