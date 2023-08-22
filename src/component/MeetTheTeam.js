import React, {Component} from "react";
import {Col, Container, Row} from "reactstrap";

//import icon
import FeatherIcon from "feather-icons-react";

export default class MeetTheTeam extends Component {
    constructor(props) {
        super(props);
        this.state = {
            names: [
                {
                    id: 1,
                    name: "Sandeep Bhimawad",
                    designation: "Co-founder"
                },
                {
                    id: 2,
                    name: "Rahul Nahar",
                    designation: "Co-founder"
                },
                {
                    id: 3,
                    name: "Yogesh Patidar",
                    designation: "Co-founder"
                },
                {
                    id: 4,
                    name: "Abhisek Thakur",
                    designation: "Accountant"
                },
                {
                    id: 5,
                    name: "Yogendra Bhimawad",
                    designation: "Customer Representative"
                },
                {
                    id: 6,
                    name: "Arun Gothi",
                    designation: "Stock Manager"
                },
                {
                    id: 7,
                    name: "Rahul Patidar",
                    designation: "Field officer"
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
                                    <h2 className="">Meet the Team</h2>
                                    <p className="text-muted">
                                    "Get to know the talented individuals who bring our vision to life and drive our success."
                                    </p>
                                </div>
                            </div>
                        </Row>
                        <Row>
                            {/* Render Footer Link */}
                            {this.state.names.map((item, key) => (
                                <Col lg={4} md={6} key={key}>
                                    <div className="project-box mb-4">
                                        <div className="position-relative overflow-hidden rounded">
                                            <div>
                                                <FeatherIcon
                                                    className="icon mr-1"
                                                    icon="user"/>
                                                <span className="mt-2">
                                                    <b>{item.name}</b>
                                                </span>
                                                <div>
                                                   <span className="mt-2">
                                                    {item.designation}
                                                </span>
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
