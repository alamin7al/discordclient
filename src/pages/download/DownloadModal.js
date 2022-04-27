import './DownloadHome.css'
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
                        <h1 className="i7carererheding ">  REPORTING PROBLEMS TO DISCORD</h1>
                        <p className="fw-normal" style={{ fontSize: '18px' }}>If you encounter a violation of our Terms of Service or Community Guidelines, we ask that you report this behavior to us.

                        </p>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <Container>
                        <div className="row gy-2">
                            <h5 className="fs-3 fw-bolder text-center">If you are a Discord user</h5>

                            <p className="fw-normal" >If the violation happened on a server, you should first reach out to the server’s moderators, who may be able to respond immediately and help resolve your concerns. In addition, please remember that you always have the ability to block any users that you don’t want to interact with anymore.
                            </p>

                            <p className="fw-normal">            If it happened in a Direct Message or contacting the moderators doesn’t help, fill out the Report Form.
                            </p>
                            <p className="fw-normal"> Please make sure to fill in all fields on the form. Providing a concise summary of the issue and including relevant message links will help us respond to your request quickly.</p>

                            <p className="fw-normal"> You’ll get an email confirming your report, and we’ll send another email when we’ve investigated the situation.</p>


                            <h5 className="fs-3 fw-bolder ">         If you are not a Discord user</h5>


                            <p className="fw-normal">
                                If there is a report you’d like to make about a Discord user or server and you don’t use Discord, you can also use the Report Form.
                            </p>






                            <h5 className="fs-3 fw-bolder text-center">                            If you are the parent of a Discord user
                            </h5>


                            <p className="fw-normal">     Please select “Parent of a User” when filling out our Report Form and provide a concise description of the issue that you and your teen are having. For help gathering the information we will need to take action, please review the instructions here.
                            </p>
                            <p className="fw-normal">
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