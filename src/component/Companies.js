import React, {Component} from "react";
import {Col, Container, Row} from "reactstrap";

import Slider from "react-slick";

// Import client   Image
import Img1 from "../assets/images/companies/coromandel.jpeg";
import Img2 from "../assets/images/companies/dhanuka.jpeg";
import Img3 from "../assets/images/companies/plantbiotix.jpeg";

export default class Companies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 1,
                    img: Img1,
                    name: 'Coromandel',
                },
                {
                    id: 2,
                    img: Img2,
                    name: 'Dhanuka',
                    
                },
                {
                    id: 3,
                    img: Img3,
                    name: 'Plantbiotix',
                }
            ],
        };
    }

    render() {
        var settings = {
            dots: true,
            speed: 300,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            centerPadding: '20px',
            responsive: [
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 3,
                        infinite: true,
                        centerPadding: '20px'
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        infinite: true,
                        centerPadding: '20px'
                    }
                },
                {
                    breakpoint: 0,
                    settings: {
                        slidesToShow: 1,
                        infinite: true,
                        centerPadding: '20px'
                    }
                }
            ]
        };

        const slides = this.state.items.map((item, key) => {
            return (
                <div className="item" key={key}>
                    <div className="testi-box text-center m-2">
                            <div className="mt-1 mb-3">
                            <div className="mt-1 mb-3" >
                                <img src={item.img} alt="" className="testi-icon img-fluid d-block mx-auto w-auto" />
                            </div>
                        </div>
                        <div className="test-user-info">
                            <h5 className="f-17 mt-3 mb-1">{item.name}</h5>
                     
                        </div>
                    </div>
                </div>
            );
        });

        return (
            <React.Fragment>
                <section className="section" id="companies">
                    <Container>
                        <Row className="justify-content-center" >
                            <Col lg={7}>
                                <div className="text-center mb-5" >
                                    <h2 className="">Our Partnerships</h2>
                                    <p className="text-muted">Kisano Ka Apna Bazar has partnerships with the leading companies
                                        manufacturing and supplying pesticides, insecticides and fertilizers to increase criop yields.</p>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12}>
                                <div
                                    id="testi-clients"
                                    className="owl-carousel owl-theme testi-content"
                                   
                                >
                                    <Slider {...settings}>
                                        {slides}
                                    </Slider>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}
