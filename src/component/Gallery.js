import React, {Component} from "react";
import {Col, Container, Row} from "reactstrap";

//import icon
import FeatherIcon from "feather-icons-react";


// feature Image
import Img1 from "../assets/images/activities/a-1.jpeg";
import Img2 from "../assets/images/activities/a-2.jpeg";
import Img3 from "../assets/images/activities/a-3.jpeg";
import Img4 from "../assets/images/activities/a-4.jpeg";
import Img5 from "../assets/images/activities/a-5.jpeg";

export default class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                {
                    id: 1,
                    img: Img1,
                },
                {
                    id: 2,
                    img: Img2,
                },
                {
                    id: 3,
                    img: Img3,
                },
                {
                    id: 4,
                    img: Img4,
                },
                {
                    id: 5,
                    img: Img5,
                },
            ],
        };
    }

    render() {
        return (
            <React.Fragment>
                <section className="section bg-light" id="gallery">
                    <Container>
                        <Row className="justify-content-center">
                            <div className="col-lg-7">
                                <div className="text-center mb-5">
                                    <h2 className="">Spreading the Awareness</h2>
                                    <p className="text-muted">
                                    "Kisano Ka Apna Bazar team is dedicated to bring in social awareness among the farmers and ensure visits to
                                        villages regarding the products farmers use."
                                    </p>
                                </div>
                            </div>
                        </Row>
                        <Row>
                            {/* Render Footer Link */}
                            {this.state.images.map((item, key) => (
                                <Col lg={4} md={6} key={key}>
                                    <div className="project-box mb-4">
                                        <div className="position-relative overflow-hidden rounded">
                                            <img src={item.img} alt="" className="img-fluid d-block mx-auto shadow"/>
                                            <div className="project-overlay">
                                                <div className="project-content">
                                                    <div className="project-icon" style={{
                                                        cursor: "pointer"
                                                    }}>
                                                        <a href={item.img} style={{
                                                            textDecoration: "none"
                                                        }}>
                                                            <i>
                                                                <FeatherIcon icon="eye"/>
                                                            </i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
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
