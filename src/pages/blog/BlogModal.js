
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
                        <h1 className="i7carererheding text-dark">   TOP TIER PERKS AND BENEFITS:</h1>

                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <Container>

                        <div className="row text-dark ">
                            <h5>  PRODUCT & FEATURES</h5>
                            <h3 className="my-3">
                                STARTING NOW, NITRO USERS GET 3 MONTHS OF PICSART GOLD

                            </h3>
                        <p className='modalstyle'>  If you’ve ever agonized over your profile icon and banner or loaded up your server with custom stickers and emojis, you know how satisfying it can be to express your true self. Or maybe you just read our recent blog post about the Design Buddies server and have some big ideas you’re itching to try out. </p>

                        <p className='modalstyle'>Discord and self-expression go hand in hand. That’s why we’re excited to partner with our friends at Picsart to offer three months of their expansive creative suite: Picsart Gold.</p>
                        ‍

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

function BlogModal() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <button className="blogmodal" onClick={() => setModalShow(true)}>
                Calixta’s Guide to Navigating the Voice Acting Industry
            </button>

            <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
        </>
    );
}

export default BlogModal
