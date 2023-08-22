import React, {Component} from "react";
import {Col, Container, Row} from "reactstrap";
import {Link} from "react-router-dom";

// Import Background Image
import Background from "../../assets/images/hero-1-bg-img.png";
import hero from "../../assets/images/hero-bg.jpeg";

class Section extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="hero-1-bg bg-light" style={{backgroundImage: `url(${Background})`}} id="home">
                    <Container>
                        <Row className="align-items-center justify-content-center">
                            <Col lg={6}>
                                <h1 className="display-4 font-weight-medium mb-4">Kisano Ka Apna Bazar</h1>
                                <p className="text-muted mb-4 pb-3">किसानों का अपना बाजार शाजापुर से स्टार्ट हुआ एक संस्थान है जो किसानों को खाद बीज दवाई एग्री एक्सपर्ट के माध्यम से
                                    घर तक पहुंचाने का काम करता है इन प्रोडक्ट का समय पर उपयोग कर किसान अपनी फसलों का  उत्पादन बढ़ाकर अच्छी उपज ले साथ ही गुणवत्ता बढ़ाकर अपनी
                                    फसलों का अच्छा भाव ले सके सके इन सभी सुविधाओं को किसानों तक पहुंचाने के लिए किसानों का अपना बाजार ने एक पहल कि हे अपनी ब्रांच बढ़ाकर वह ज्यादा से ज्यादा किसानों तक
                                    पहुंच सके यह शाखाएं अभी तक 1 शाजापुर 2 बेरछा 3 बोड़ा  4 सुजालपुर में पहुंच चुकी है 1 शाजापुर में टंकी चौराहे के पास है 2  बेरछा में यहां sbi bank के पास है 3 वोडा में यहां सोसाइटी के
                                    सामने नरसिंह रोड पर है</p>
                                <Link to="#" className="btn btn-success">More<span
                                    className="ml-2 right-icon">&#8594;</span></Link>
                            </Col>
                            <Col lg={6} md={10}>
                                <div className=" mt-5 mt-lg-0">
                                    <img src={hero} alt="" className="img-fluid d-block mx-auto"/>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Section;
