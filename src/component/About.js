import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Col, Container, Row} from "reactstrap";

// Import Background Image
import Img2 from "../assets/images/about/img-2.png";

//import icon
import FeatherIcon from "feather-icons-react";

export default class About extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="section" id="about">
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg={7}>
                                <div className="text-center mb-5">
                                    <h2 className="">Why us?</h2>
                                    <p className="text-muted">Kisano Ka Apna Bazar</p>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={6}>
                                <span className="font-weight-medium"><h4 className="line-height-1_6">किसानों का अपना बाजार शाजापुर से स्टार्ट हुआ एक संस्थान है जो किसानों को खाद बीज दवाई एग्री एक्सपर्ट के माध्यम से
                                    घर तक पहुंचाने का काम करता है इन प्रोडक्ट का समय पर उपयोग कर किसान अपनी फसलों का  उत्पादन बढ़ाकर अच्छी उपज ले साथ ही गुणवत्ता बढ़ाकर अपनी
                                    फसलों का अच्छा भाव ले सके सके इन सभी सुविधाओं को किसानों तक पहुंचाने के लिए किसानों का अपना बाजार ने एक पहल कि हे अपनी ब्रांच बढ़ाकर वह ज्यादा से ज्यादा किसानों तक
                                    पहुंच सके यह शाखाएं अभी तक 1 शाजापुर 2 बेरछा 3 बोड़ा  4 सुजालपुर में पहुंच चुकी है 1 शाजापुर में टंकी चौराहे के पास है 2  बेरछा में यहां sbi bank के पास है 3 वोडा में यहां सोसाइटी के
                                    सामने नरसिंह रोड पर है</h4></span>
                                <br/>
                                <br/>
                                <br/>

                                <p className="f-17 text-muted"><FeatherIcon
                                    className="icon-xs icon mr-2" icon="grid"/> Empowering Farmers</p>
                                <p className="f-17 text-muted"><FeatherIcon
                                    className="icon-xs icon mr-2"
                                    icon="layout"/> Quality and Value</p>
                                <p className="f-17 text-muted mb-4"><FeatherIcon
                                    className="icon-xs icon mr-2" icon="monitor"/> Expert Assistance</p>
                                <Link to="#" className="read-more f-18">More Information <span
                                    className="ml-2 right-icon f-24">&#8594;</span></Link>
                            </Col>
                            <Col lg={4}>
                                <div className="card border-0">
                                    <div className="bg-soft-info about-img rounded" style={{
                                        height: '150%',
                                        width: '200%'
                                    }}>
                                        <img src={Img2} alt="" className="img-fluid d-block mx-auto"/>
                                    
                                    </div>
                                    <div className="mt-3">
                                        <p className="text-uppercase text-muted mb-2 f-13">Green Solutions</p>
                                        <h4 className="f-18">Marketing Product</h4>
                                        <p className="text-muted">Kisano ka Apna Bazar:- Starting from Shajapur, our organization delivers fertilizers, seeds, and expert advice to farmers' doorsteps, enhancing crop production and quality. Join us today to elevate your crops to new heights</p>
                                        <Link to="#" className="read-more text-primary">Read More <span
                                            className="ml-2 right-icon">&#8594;</span></Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}
