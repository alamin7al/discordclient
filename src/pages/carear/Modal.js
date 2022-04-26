
import { useState } from "react";
import { Container, Modal,  Button } from "react-bootstrap";
import i1 from '../img/i1.svg'
import i2 from '../img/i2.svg'
import i3 from '../img/i3.svg'
import i4 from '../img/i4.svg'
import i5 from '../img/i5.svg'
import i6 from '../img/i6.svg'
import i7 from '../img/i7.svg'
import './Slider.css'
function MydModalWithGrid(props) {
    return (
        <div className="">
            <Modal
                size="xl"
                // aria-labelledby="contained-modal-title-vcenter"
                centered
                style={{ color: '#fff',backgroundColor:'#5865F2' }}
                {...props}>
                <Modal.Header
                style={{ color: '#fff',backgroundColor:'#5865F2' }}
                
                closeButton>
                    <Modal.Title
                    
                    className="i7carererheding" id="contained-modal-title-vcenter">
                      <h1 className="i7carererheding">   TOP TIER PERKS AND BENEFITS:g</h1>
                      
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body 
                style={{ color: '#fff',backgroundColor:'#5865F2' }}
                
                className="show-grid">
                    <Container>
                        <div className="row gx-5 gy-5">

                            <div className='col-lg-4 col-md-6 col-sm-6 p-2'>
                                <div className='filtercard  '>
                                    <div className="p-3">
                                        <img style={{ height: '70px', width: '100px' }} src={i1} alt="" />
                                        <h2 className='my-3 fiterHeder'> Stay Healthy </h2>
                                        <div className="d-flex justify-content-between align-items-start">
                                            <p className='filterText'> We take care of our team with comprehensive Medical, Dental, and Vision plans. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 col-sm-6 p-2'>
                                <div className='filtercard  '>
                                    <div className="p-3">
                                        <img style={{ height: '70px', width: '100px' }} src={i2} alt="" />
                                        <h2 className='my-3 fiterHeder'> Stay Healthy </h2>
                                        <div className="d-flex justify-content-between align-items-start">
                                            <p className='filterText'> We take care of our team with comprehensive Medical, Dental, and Vision plans. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 col-sm-6 p-2'>
                                <div className='filtercard  '>
                                    <div className="p-3">
                                        <img style={{ height: '70px', width: '100px' }} src={i3} alt="" />
                                        <h2 className='my-3 fiterHeder'> Stay Healthy </h2>
                                        <div className="d-flex justify-content-between align-items-start">
                                            <p className='filterText'> We take care of our team with comprehensive Medical, Dental, and Vision plans. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 col-sm-6 p-2'>
                                <div className='filtercard  '>
                                    <div className="p-3">
                                        <img style={{ height: '70px', width: '100px' }} src={i4} alt="" />
                                        <h2 className='my-3 fiterHeder'> Stay Healthy </h2>
                                        <div className="d-flex justify-content-between align-items-start">
                                            <p className='filterText'> We take care of our team with comprehensive Medical, Dental, and Vision plans. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 col-sm-6 p-2'>
                                <div className='filtercard  '>
                                    <div className="p-3">
                                        <img style={{ height: '70px', width: '100px' }} src={i5} alt="" />
                                        <h2 className='my-3 fiterHeder'> Stay Healthy </h2>
                                        <div className="d-flex justify-content-between align-items-start">
                                            <p className='filterText'> We take care of our team with comprehensive Medical, Dental, and Vision plans. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 col-sm-6 p-2'>
                                <div className='filtercard  '>
                                    <div className="p-3">
                                        <img style={{ height: '70px', width: '100px' }} src={i6} alt="" />
                                        <h2 className='my-3 fiterHeder'> Stay Healthy </h2>
                                        <div className="d-flex justify-content-between align-items-start">
                                            <p className='filterText'> We take care of our team with comprehensive Medical, Dental, and Vision plans. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 col-sm-6 p-2'>
                                <div className='filtercard  '>
                                    <div className="p-3">
                                        <img style={{ height: '70px', width: '100px' }} src={i7} alt="" />
                                        <h2 className='my-3 fiterHeder'> Stay Healthy </h2>
                                        <div className="d-flex justify-content-between align-items-start">
                                            <p className='filterText'> We take care of our team with comprehensive Medical, Dental, and Vision plans. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>



                    </Container>
                </Modal.Body>
                <Modal.Footer 
                style={{ color: '#fff',backgroundColor:'#5865F2' }}
                
                >
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

function Apps() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <button className="modalbtn" onClick={() => setModalShow(true)}>
            Open Discord in Your Browser
            </button>

            <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
        </>
    );
}

export default Apps