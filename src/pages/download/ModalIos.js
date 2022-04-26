
import { useState } from "react";
import { Container, Modal, Button } from "react-bootstrap";


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
                        <h1 className="i7carererheding ">  Download</h1>
                        <p  className="fw-normal"  style={{ fontSize: '18px' }}> we ask that you report this behavior to us.

                        </p>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <Container>
                        <div className="row gy-2">
                         



                            <h5 className="fs-3 fw-bolder text-center">                            If you are the parent of a Discord user
                            </h5>


                            <p  className="fw-normal">     Please select “Parent of a User” when filling out our Report Form and provide a concise description of the issue that you and your teen are having. For help gathering the information we will need to take action, please review the instructions here.
                            </p>
                            <p  className="fw-normal">
                                We also recommend that you check out our Parents and Educators section in this Safety Center, which contains useful steps about how to keep your teen’s account safe.
                            </p>







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

function ModalIos() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <button  className="commonnbtn" onClick={() => setModalShow(true)}>
                Download 
            </button>

            <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
        </>
    );
}

export default ModalIos