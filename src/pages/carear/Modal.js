
import { useState } from "react";
import { Container, Modal, Row, Col, Button } from "react-bootstrap";
import blog6 from '../img/blog6.png'

function MydModalWithGrid(props) {
    return (
        <Modal
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            {...props}>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Using Grid in Modal
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Container>
                    <div className="row gx-5 gy-5">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <h1 className="fw-light lead fs-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure dicta et porro quis veniam hic, temporibus voluptas illo tenetur delectus iusto inventore blanditiis officiis optio voluptatum saepe corrupti minus quas voluptatem ut perferendis vero exercitationem animi adipisci. Corporis porro quisquam, omnis earum voluptatem laboriosam, minima fuga, sunt necessitatibus dolorem aut. Ipsum, minima doloribus qui repellat veritatis incidunt quas ipsam? Deserunt.</h1>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                        <h1 className="fw-light lead fs-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure dicta et porro quis veniam hic, temporibus voluptas illo tenetur delectus iusto inventore blanditiis officiis optio voluptatum saepe corrupti minus quas voluptatem ut perferendis vero exercitationem animi adipisci. Corporis porro quisquam, omnis earum voluptatem laboriosam, minima fuga, sunt necessitatibus dolorem aut. Ipsum, minima doloribus qui repellat veritatis incidunt quas ipsam? Deserunt.</h1>

                        </div>
                    </div>



                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

function Apps() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <button className="modalbtn" onClick={() => setModalShow(true)}>
                Notice on Recruitment Scams
            </button>

            <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
        </>
    );
}

export default Apps