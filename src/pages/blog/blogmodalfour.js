
import { useState } from "react";
import { Container, Modal, Button } from "react-bootstrap";
import './Blog.css'
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
                        <h1 className="i7carererheding text-dark">  How Data Science Informs Strategy & Innovation At Discord
                        </h1>

                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <Container>

                        <div className="row text-dark ">




                            <div>
                                <p className='fs-4 fw-bold'>Got Discord Nitro? Get 3 Months of Picsart Gold, On Us
                                </p>
                                <p className='modalstyle'>So what is Picsart? And how’s it gonna improve your experience on Discord? </p>
                            </div>

                            <p className='modalstyle'>  Picsart offers a range of intuitive tools and templates you can use to edit photos and videos on both desktop and mobile. If you’re reading this post, you’ve got what you need to access the full Picsart suite and get cracking on the project of your dreams.</p>
                            <p className='modalstyle'>
                                Want to produce a sick animated profile icon? How about making #announcements, #rules, and #roles channel banners for your coffee-tasting server shine above all others? With Picsart creative tools, you’ll be able to express yourself from anywhere, in any way.</p>

                        </div>





                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

function BlogModalfour() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <button className="blogmodal" onClick={() => setModalShow(true)}>
                How Data Science Informs Strategy & Innovation At Discord
            </button>

            <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
        </>
    );
}

export default BlogModalfour
