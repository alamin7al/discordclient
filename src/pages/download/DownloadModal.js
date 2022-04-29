import './DownloadHome.css'
import { Container, Modal, Button } from "react-bootstrap";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import card1 from '../img/card1.svg'
import card2 from '../img/card2.svg'
import card3 from '../img/card3.svg'
import card4 from '../img/card4.svg'
import card5 from '../img/card5.png'
import card6 from '../img/card6.png'


import "swiper/css/grid";
import "swiper/css/pagination";

import "./styles.css";

import { Grid, Pagination } from "swiper";


function MydModalWithGrid(props) {
    return (
        <div className="">
            <Modal
                size="xl"

                // aria-labelledby="contained-modal-title-vcenter"
                centered

                {...props}>
                <Modal.Header closeButton>
                    <Modal.Title className="i7carererheding" id="contained-modal-title-vcenter">
                        <h1 style={{fontSize:'18px',color:'#4B76FF'}} className=" "> People, Talent, and Vibe</h1>
                      
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <Container>
                        <>
                            <div className="row">
                                <div className="col-lg-12 ">


                                    <Swiper
                                        slidesPerView={3}


                                        pagination={{
                                            clickable: true,
                                        }}
                                        modules={[Grid, Pagination]}
                                        className="mySwiper"
                                    >


                                        <SwiperSlide>
                                            <div class="card card1 " style={{ width: '96%', height: '100%' }}>
                                                <div className="card1">
                                                    <h4>Better Emoji</h4>
                                                    <p    style={{fontSize:'16px'}}>Collect or make your own custom and animated emojis.
                                                    </p>
                                                    <img className='w-50 h-50 mx-auto ' src={card1} alt="" />
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div class="card card2 " style={{ width: '96%', height: '100%' }}>
                                                <div className="card2">
                                                    <h4>Better Emoji</h4>
                                                    <p   style={{fontSize:'16px'}}>Collect or make your own custom and animated emojis.
                                                    </p>
                                                    <img className='w-50 h-50 mx-auto ' src={card2} alt="" />
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div class="card card3 " style={{ width: '96%', height: '100%' }}>
                                                <div className="card3">
                                                    <h4>Better Emoji</h4>
                                                    <p   style={{fontSize:'16px'}}>Collect or make your own custom and animated emojis.
                                                    </p>
                                                    <img className='w-50 h-50 mx-auto ' src={card3} alt="" />
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div class="card card4 " style={{ width: '96%', height: '100%' }}>
                                                <div className="card4">
                                                    <h4>Better Emoji</h4>
                                                    <p   style={{fontSize:'16px'}}>Collect or make your own custom and animated emojis.
                                                    </p>
                                                    <img className='w-50 h-50 mx-auto ' src={card4} alt="" />
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div class="card card5 " style={{ width: '96%', height: '100%' }}>
                                                <div className="card5">
                                                    <h4>Better Emoji</h4>
                                                    <p   style={{fontSize:'16px'}}>Collect or make your own custom and animated emojis.
                                                    </p>
                                                    <img className='w-50 h-50 mx-auto ' src={card5} alt="" />
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div class="card card6 " style={{ width: '96%', height: '100%' }}>
                                                <div className="card6">
                                                    <h4>Better Emoji</h4>
                                                    <p   style={{fontSize:'16px'}}>Collect or make your own custom and animated emojis.
                                                    </p>
                                                    <img className='w-50 h-50 mx-auto ' src={card6} alt="" />
                                                </div>
                                            </div>
                                        </SwiperSlide>







                                    
                            
                                    </Swiper>
                                </div>
                            </div>
                        </>



                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

function DownloadModal() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <button style={{ border: '0', outline: '0' }} className="downloadmodalbtn" onClick={() => setModalShow(true)}>
                Download For Windows
            </button>

            <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
        </>
    );
}

export default DownloadModal