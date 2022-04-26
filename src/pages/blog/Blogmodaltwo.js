
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
                        <h1 className="i7carererheding text-dark">     Make Your Discord Profile Shine: Profile Pointers From Design Pros</h1>

                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <Container>

                        <div className="row text-dark ">
                   
                         
                        <p className='modalstyle'>  If you’ve ever agonized over your profile icon and banner or loaded up your server with custom stickers and emojis, you know how satisfying it can be to express your true self. Or maybe you just read our recent blog post about the Design Buddies server and have some big ideas you’re itching to try out. </p>

                        <p className='modalstyle'>Discord and self-expression go hand in hand. That’s why we’re excited to partner with our friends at Picsart to offer three months of their expansive creative suite: Picsart Gold.</p>
                        

                      
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

function BlogModaltwo() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <button className="blogmodal" onClick={() => setModalShow(true)}>
            Make Your Discord Profile Shine: Profile Pointers From Design Pros
            </button>

            <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
        </>
    );
}

export default BlogModaltwo
