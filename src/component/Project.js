import React, {Component} from "react";
import {Col, Container, Row} from "reactstrap";

//import icon
import FeatherIcon from "feather-icons-react";

import {Link} from "react-router-dom";

// feature Image
import Img1 from "../assets/images/project/img-1.png";
import Img2 from "../assets/images/project/img-2.png";
import Img3 from "../assets/images/project/img-3.png";
import Img4 from "../assets/images/project/img-4.png";
import Img5 from "../assets/images/project/img-5.png";
import Img6 from "../assets/images/project/img-6.png";

export default class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [
                {
                    id: 1,
                    img: Img1,
                    title: 'Plantbiotix',
                    designation: 'INCRYL'
                },
                {
                    id: 2,
                    img: Img2,
                    title: 'Plantbiotix',
                    designation: 'INCRYL ULTRA'
                },
                {
                    id: 3,
                    img: Img3,
                    title: 'Plantbiotix',
                    designation: 'LIMO-CRUB'
                },
                {
                    id: 4,
                    img: Img4,
                    title: 'Plantbiotix',
                    designation: 'MONAS-CRUB'
                },
                {
                    id: 5,
                    img: Img5,
                    title: 'Plantbiotix',
                    designation: 'RUBITROL'
                },
                {
                    id: 6,
                    img: Img6,
                    title: 'Plantbiotix',
                    designation: 'xplorer-glory'
                },
            ],
        };
    }

    render() {
        return (
            <React.Fragment>
                <section className="section bg-light" id="project">
                    <Container>
                        <Row className="justify-content-center">
                            <div className="col-lg-7">
                                <div className="text-center mb-5">
                                    <h2 className="">Our Latest Products</h2>
                                    <p className="text-muted">
                                    "Use specialized agricultural medicines for safe production in farming."
                                    "Choose the right agricultural remedies for the health of trees and plants."
                                    </p>
                                </div>
                            </div>
                        </Row>
                        <Row>
                            {/* Render Footer Link */}
                            {this.state.projects.map((item, key) => (
                                <Col lg={4} md={6} key={key}>
                                    <div className="project-box mb-4">
                                        <div className="position-relative overflow-hidden rounded">
                                            <img src={item.img} width="180" height="350" alt="" className="img-fluid d-block mx-auto shadow"/>
                                            <div className="project-overlay">
                                                <div className="project-content">
                                                    <Link to="#">
                                                        <div className="project-icon">
                                                            <i>
                                                                <FeatherIcon icon="eye"/>
                                                            </i>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column align-items-center p-3">
                                            <h4 className="f-17 mb-1 text-center">
                                                <Link to="#" className="text-dark">{item.title}</Link>
                                            </h4>
                                            <p className="text-center" style={{
                                                color: "green"
                                            }}>{item.designation}</p>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}
