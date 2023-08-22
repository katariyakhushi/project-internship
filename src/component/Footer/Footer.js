import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Col, Container, Row} from "reactstrap";
import FooterLink from "../Footer/Footer_link";

// Footer Image
import footer_image from "../../assets/images/hero-1-bg-img.png";

import logolight from "../../assets/images/logo.png";
// Import Logo
//import icon
import FeatherIcon from "feather-icons-react";

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            links: [
                {
                    id: 1,
                    title: "Companies",
                    child: [
                        {title: "Coromandel", link: "https://www.coromandel.biz/"},
                        {title: "Dhanuka", link: "https://www.dhanuka.com/"},
                        {title: "PlantBiotix", link: "https://www.plantbiotix.com/"},
                    ],
                },
                {
                    id: 2,
                    title: "Product",
                    child: [
                        {title: "INCRYL", link: "/"},
                        {title: "LIMO-CRUB", link: "/"},
                        {title: "MONAS-CRUB", link: "/"},
                        {title: "RUBITROL", link: "/"},
                        {title: "Xplorer-Glory", link: "/"},
                    ],
                },
                {
                    id: 3,
                    title: "Learn More",
                    child: [
                        {title: "About Us", link: "/"},
                        {title: "Customer Service", link: "/"},
                        {title: "How to use Fertilizers?", link: "/"},
                        {title: "Suppport & Guidance", link: "/"},
                    ],
                },
            ],
        };
    }

    render() {
        return (
            <React.Fragment>
                {/* Footer Start */}
                <footer
                    className="footer"
                    style={{backgroundImage: "url(" + footer_image + ")"}}
                >
                    <Container>
                        <Row>
                            <Col lg={4}>
                                <div className="mb-5">
                                    <Link to="#">
                                        <img src={logolight} alt="" className="" height="35"/>
                                    </Link>
                                    <p className="text-white-50 my-4">किसानों का अपना बाजार शाजापुर से स्टार्ट हुआ एक संस्थान है जो किसानों को खाद बीज दवाई एग्री एक्सपर्ट के माध्यम से  घर तक पहुंचाने का काम करता है इन प्रोडक्ट का समय पर उपयोग कर किसान अपनी फसलों का  उत्पादन बढ़ाकर अच्छी उपज ले साथ ही गुणवत्ता बढ़ाकर अपनी फसलों का अच्छा भाव ले सके सके इन सभी सुविधाओं को किसानों तक पहुंचाने के लिए किसानों का अपना बाजार ने एक पहल कि हे अपनी ब्रांच बढ़ाकर वह ज्यादा से ज्यादा किसानों तक पहुंच सके यह शाखाएं अभी तक 1 शाजापुर 2 बेरछा 3 बोड़ा  4 सुजालपुर में पहुंच चुकी है 1 शाजापुर में टंकी चौराहे के पास है 2  बेरछा में यहां sbi bank के पास है 3 वोडा में यहां सोसाइटी के सामने नरसिंह रोड पर है</p>
                                    <div className="text-white-70">
                                        <a href="https://instagram.com/kisanokaapnabazar?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noreferrer">
                                            <FeatherIcon
                                                className="icon mr-1"
                                                icon="instagram"/>{" "} Join Us
                                            on Instagram
                                        </a>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={7} className="offset-lg-1">
                                <Row>
                                    {/* Render Footer Link */}
                                    {this.state.links.map((item, key) => (
                                        <Col md={4} key={key}>
                                            <h4 className="text-white f-22 font-weight-normal mb-3">
                                                {item.title}
                                            </h4>
                                            <ul className="list-unstyled footer-sub-menu">
                                                {item.child.map((linkItem, key) => (
                                                    <li key={key}>
                                                        <Link className="footer-link" to={linkItem.link}>
                                                            {linkItem.title}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </Col>
                                    ))}
                                </Row>
                            </Col>
                        </Row>
                        {/* Render Footer Link End */}
                        <FooterLink/>
                    </Container>
                </footer>
                {/* Footer End */}
            </React.Fragment>
        );
    }
}

export default Footer;
