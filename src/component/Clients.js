import React, {Component} from "react";
import {Col, Container, Row} from "reactstrap";

import Slider from "react-slick";

// Import client   Image
import Img1 from "../assets/images/user/img-1.jpg";
import Img2 from "../assets/images/user/img-2.jpg";
import Img3 from "../assets/images/user/img-3.jpg";
import Img4 from "../assets/images/user/img-4.jpg";
import FeatherIcon from "feather-icons-react";

export default class Clients extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 1,
                    img: Img1,
                    name: 'Rahul Agrawal',
                    location: 'Kalapipal , Shajapur.',
                    review: 'I am highly satisfied with the agricultural products  I purchased from your store.  My crops were under severe pest attack, but these products helped control them effectively and improved the overall health of my crops.'
                },
                {
                    id: 2,
                    img: Img2,
                    name: 'Sanjay Patel',
                    designation: 'Barcha, Shajapur',
                    review: 'I have used your agricultural product and I am quite satisfied with its results. It has been effective in protecting and enhancing the productivity of my crops.Your agricultural product has proven to be a valuable asset, enhancing crop health and yield.'
                },
                {
                    id: 3,
                    img: Img3,
                    name: 'Rajesh patidar',
                    designation: 'Boda, Shajapur',
                    review: 'I have tried your agricultural product and I am amazed at how it has positively impacted the safety of my crops.The agricultural product has proven to be helpful in safeguarding my plants.'
                },
                {
                    id: 4,
                    img: Img4,
                    name: 'Mukesh jain',
                    designation: 'Tilavad, Shajapur',
                    review: 'Your product has been a game-changer for my farm. It effectively tackles pests and has positively impacted my harvest.Your agricultural solution has kept my crops protected and boosted productivity. Highly recommended!',
                },
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
                        <div className="card border-0 shadow p-4 mb-4">
                            <div className="mt-1 mb-3">
                                <FeatherIcon className="icon mr-1"
                                             icon="message-square"/>
                            </div>
                            <p className="text-muted mb-0 f-15">{item.review}</p>
                        </div>
                            <div className="test-user-info">
                           <h5 className="f-17 mt-3 mb-1">{item.name}</h5>
                            <p className="text-muted f-14">{item.designation}</p>
                        </div>
                    </div>
                </div>
            );
        });

        return (
            <React.Fragment>
                <section className="section" id="clients">
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg={7}>
                                <div className="text-center mb-5">
                                    <h2 className="">What Our Customers Say</h2>
                                    <p className="text-muted">Kisano ka apna bazar believes in their customers
                                        success.</p>
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
