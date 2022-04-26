
import { useState } from "react";
import { Container, Modal, Button } from "react-bootstrap";
import './Blog.css'
import blog from '../img/modalimg.png'
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
                        <h3 className="i7carererheding text-dark">   Starting Now, Nitro Users Get 3 Months Of Picsart Gold
                        </h3>

                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <Container>

                        <div className="row text-dark">

                            <img className="img-fluid my-4" src={blog} alt="" />
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

function BlogModalthree() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <button className="blogmodal" onClick={() => setModalShow(true)}>
                Starting Now, Nitro Users Get 3 Months Of Picsart Gold
            </button>

            <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
        </>
    );
}

export default BlogModalthree
