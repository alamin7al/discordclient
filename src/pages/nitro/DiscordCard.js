import React from 'react';
import card1 from '../img/card1.svg'
import card2 from '../img/card2.svg'
import card3 from '../img/card3.svg'
import card4 from '../img/card4.svg'
import card5 from '../img/card5.png'
import card6 from '../img/card6.png'

const DiscordCard = () => {
    return (
        <div className='container my-5'>

            <div className="row gx-5 gy-5">
                <div className="col-md-6 col-lg-4 col-sm-6 ">
                    <div className="card card1 " style={{ width: '100%',height:'350px' }}>

                        <h4>Better Emoji</h4>
                        <p className='my-3'>Collect or make your own custom and animated emojis.
                        </p>
                        <img className='h-75 w-75 mx-auto mt-3' src={card1} alt="" />
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 col-sm-6">
                    <div class="card card2 " style={{ width: '100%',height:'350px' }}>
                        <h4>Better Emoji</h4>
                        <p className='my-3'>Collect or make your own custom and animated emojis.
                        </p>
                        <img className='h-50 w-75 mx-auto mt-3' src={card2} alt="" />
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 col-sm-6">
                    <div class="card card3 " style={{ width: '100%',height:'350px' }}>
                        <h4>Better Emoji</h4>
                        <p className='my-3'>Collect or make your own custom and animated emojis.
                        </p>
                        <img className='h-75 w-75 mx-auto mt-3' src={card3} alt="" />
                    </div>
                </div>

                <div className="col-md-6 col-lg-4 col-sm-6 ">
                    <div class="card card4 " style={{ width: '100%',height:'350px' }}>
                        <h4>Better Emoji</h4>
                        <p className='my-3'>Collect or make your own custom and animated emojis.
                        </p>
                        <img className='h-75 w-75 mx-auto mt-3' src={card4} alt="" />
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 col-sm-6">
                    <div class="card card5 " style={{ width: '100%',height:'350px' }}>
                        <h4>Better Emoji</h4>
                        <p className='my-3'>Collect or make your own custom and animated emojis.
                        </p>
                        <img className='h-75 w-75 mx-auto mt-3' src={card5} alt="" />
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 col-sm-6">
                    <div class="card card6 " style={{ width: '100%',height:'350px' }}>
                        <h4>Better Emoji</h4>
                        <p className='my-3'>Collect or make your own custom and animated emojis.
                        </p>
                        <img className='h-75 w-75 mx-auto mt-3' src={card6} alt="" />
                    </div>
                </div>

            </div>
          
        </div>
    );
};

export default DiscordCard;