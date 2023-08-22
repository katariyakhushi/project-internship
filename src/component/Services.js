import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";

// Import Background Image
import store1 from "../assets/images/stores/store-shajapur.jpeg";
import store2 from "../assets/images/stores/store-bercha.jpeg";
import store3 from "../assets/images/stores/store-badoda.jpeg";

export default class Services extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="section bg-light" id="services">
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg={7}>
                                <div className="text-center mb-5">
                                    <h2 className="">Our Stores</h2>
                                    <p className="text-muted">
                                        Kisano Ka Apna Bazar has stores in below three locations
                                    </p>
                                </div>
                            </Col>
                        </Row>
                        <Row className="d-flex align-items-stretch">
                            <StoreCard
                                imgSrc={store2}
                                title="Nr. SBI bank, Berchha"
                                mapSrc="https://goo.gl/maps/Sg9uwKzj48cRxVci7"
                            />
                            <StoreCard
                                imgSrc={store1}
                                title="Tanki Chouraha, Shajapur"
                                mapSrc="https://goo.gl/maps/L83vR2wVbokMc4456"                             
                                 />
                            <StoreCard
                                imgSrc={store3}
                                title="Narsee Road, Boda"
                                mapSrc="https://goo.gl/maps/RQwGHJHYd3WYvAVW7"    
                                                              ></StoreCard>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

function StoreCard({ imgSrc, title, mapSrc }) {

    return (
        <Col lg={4}>
            <div className="card service-box text-center p-2">
                <img src={imgSrc} alt="" className="img-fluid d-block" />
                <br />
                <h4 className="service-title mt-4 mb-3 f-18">{title}</h4>
                <a href={mapSrc} className="read-more" target="_blank"  rel="noreferrer">
                    Locate Me<span className="right-icon ml-2">&#8594;</span>
                </a>
            </div>
        </Col>
    );
}
