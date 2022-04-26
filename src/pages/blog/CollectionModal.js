
import { useState } from "react";
import { Container, Modal, Button } from "react-bootstrap";
import './Blog.css'
import b1 from '../img/f1.svg'
import b2 from '../img/f2.png'
import b3 from '../img/f3.png'
import b4 from '../img/f4.png'
import b5 from '../img/f5.png'

import blog2 from '../img/blog2.png'
import blog3 from '../img/blog3.png'
import blog4 from '../img/blog4.png'
import blog5 from '../img/blog5.png'
import blog6 from '../img/blog6.png'
import blog7 from '../img/blog7.png'
import blog8 from '../img/blog8.jpeg'
function MydModalWithGrid(props) {
    return (
        <div className="">
            <Modal
                size="xl"
                // aria-labelledby="contained-modal-title-vcenter"
                centered
                style={{ color: '#fff' }}
                {...props}>
                <Modal.Header closeButton>
                    <Modal.Title className="i7carererheding" id="contained-modal-title-vcenter">
                        <h1 className="i7carererheding text-dark">  Discord Welcomes Elizabeth Hamren As</h1>

                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <Container>
                    <div className="row text-dark">
                        <div className="col-md-4 col-lg-4 col-sm-6 my-5">
                            <div className="text-start ">
                                <img className='img-fluid blogimage' src={blog2} alt="" />
                                <h5 className='blogtile my-3'>PRODUCT & FEATURES
                                </h5>
                                <h2 className='blogtext'> PlayStation® x Discord: Connect Your Account and Show What You’re Playing

                                </h2>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-6 my-5">
                            <div className="text-start ">
                                <img className='img-fluid blogimage' src={blog3} alt="" />
                                <h5 className='blogtile my-3'>            COMMUNITY

                                </h5>
                                <h2 className='blogtext'>
                                    Make Your Discord Profile Shine: Profile Pointers from Design Pros


                                </h2>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-6 my-5">
                            <div className="text-start ">
                                <img className='img-fluid blogimage' src={blog4} alt="" />
                                <h5 className='blogtile my-3'>            DISCORD HQ

                                </h5>
                                <h2 className='blogtext'>
                                    Discord Welcomes Elizabeth Hamren as new COO
                                </h2>
                            </div>
                        </div>

                        <div className="col-md-4 col-lg-4 col-sm-6 my-5">
                            <div className="text-start ">
                                <img className='img-fluid blogimage' src={blog5} alt="" />
                                <h5 className='blogtile my-3'>            POLICY & SAFETY

                                </h5>
                                <h2 className='blogtext'>
                                    Parents & Educators, join us on Discord!
                                </h2>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-6 my-5">
                            <div className="text-start ">
                                <img className='img-fluid blogimage' src={blog6} alt="" />
                                <h5 className='blogtile my-3'>PRODUCT & FEATURES
                                </h5>
                                <h2 className='blogtext'>           PlayStation® x Discord: Connect Your Account and Show What You’re Playing

                                </h2>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-6 my-5">
                            <div className="text-start ">
                                <img className='img-fluid blogimage' src={blog7} alt="" />
                                <h5 className='blogtile my-3'>            ENGINEERING & DESIGN

                                </h5>
                                <h2 className='blogtext'>
                                    How Data Science Informs Strategy & Innovation at Discord
                                </h2>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-6 ">
                            <div className="text-start ">
                                <img className='img-fluid blogimage' src={blog8} alt="" />
                                <h5 className='blogtile my-3'>            ENGINEERING & DESIGN

                                </h5>
                                <h2 className='blogtext'>
                                    How Data Science Informs Strategy & Innovation at Discord
                                </h2>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4">
                                <div className='text-start'>
                                    <img src={b3} style={{width:'100%',height:'150px'}}  className='rounded-3 ' alt="" />
                                    <h3 className='ftitle my-4'>Starting Now, Nitro Users Get 3 Months of Picsart Gold

                                    </h3>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className='text-start'>
                                    <img src={b4} style={{width:'100%',height:'150px'}} className=' rounded-3' alt="" />
                                    <h3 className='ftitle my-4'>Starting Now, Nitro Users Get 3 Months of Picsart Gold

                                    </h3>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className='text-start'>
                                    <img src={b5} style={{width:'100%',height:'150px'}} className=' rounded-3' alt="" />
                                    <h3 className='ftitle my-4'>Starting Now, Nitro Users Get 3 Months of Picsart Gold

                                    </h3>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className='text-start'>
                                    <img src={b2} style={{width:'100%',height:'150px'}} className=' rounded-3' alt="" />
                                    <h3 className='ftitle my-4'>Starting Now, Nitro Users Get 3 Months of Picsart Gold

                                    </h3>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className='text-start'>
                                    <img src={b1} style={{width:'100%',height:'150px'}} className=' rounded-3' alt="" />
                                    <h3 className='ftitle my-4'>Starting Now, Nitro Users Get 3 Months of Picsart Gold

                                    </h3>
                                </div>
                            </div>


















                    </div>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
        </div >
    );
}

function CollectionModal() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <button className="blogbtn" onClick={() => setModalShow(true)}>
                View Collection
            </button>

            <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
        </>
    );
}

export default CollectionModal