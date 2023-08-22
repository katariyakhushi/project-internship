import React, {Component, Suspense} from "react";

// Importing Section
const Navbar = React.lazy(() => import("../../component/Navbar/NavBar"));

const Section = React.lazy(() => import("./Section"));
const About = React.lazy(() => import("../../component/About"));
const Services = React.lazy(() => import("../../component/Services"));
const Feature = React.lazy(() => import("../../component/Feature"));
const Project = React.lazy(() => import("../../component/Project"));
const Clients = React.lazy(() => import("../../component/Clients"));
const Companies = React.lazy(() => import("../../component/Companies"));
const Gallery = React.lazy(() => import("../../component/Gallery"));
const Contact = React.lazy(() => import("../../component/Contact"));
const Footer = React.lazy(() => import("../../component/Footer/Footer"));
const MeetTheTeam = React.lazy(() => import("../../component/MeetTheTeam"));

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navItems: [
                {id: 1, idnm: "home", navheading: "Home"},
                {id: 2, idnm: "about", navheading: "Why us?"},
                {id: 3, idnm: "services", navheading: "Our Stores"},
                {id: 5, idnm: "project", navheading: "Products"},
                {id: 6, idnm: "companies", navheading: "Companies"},
                {id: 7, idnm: "clients", navheading: "Reviews"},
                {id: 8, idnm: "contact", navheading: "Contact Us"},
            ],
            pos: document.documentElement.scrollTop,
            imglight: false,
            navClass: "",
        };
    }

    componentDidMount() {
        window.addEventListener("scroll", this.scrollNavigation, true);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollNavigation, true);
    }

    scrollNavigation = () => {
        var scrollup = document.documentElement.scrollTop;
        if (scrollup > this.state.pos) {
            this.setState({navClass: "nav-sticky", imglight: false});
        } else {
            this.setState({navClass: "", imglight: false});
        }
    };

    //set preloader div
    PreLoader = () => {
        return (
            <div id="preloader">
                <div id="status">
                    <div className="spinner">
                        <div className="bounce1"></div>
                        <div className="bounce2"></div>
                        <div className="bounce3"></div>
                    </div>
                </div>
            </div>
        );
    };

    render() {
        return (
            <React.Fragment>
                <Suspense fallback={this.PreLoader()}>
                    {/* Importing Navbar */}
                    <Navbar
                        navItems={this.state.navItems}
                        navClass={this.state.navClass}
                        imglight={this.state.imglight}
                    />

                    {/* Importing Section */}
                    <Section/>

                    {/* Importing About */}
                    <About/>

                    {/* Importing Service */}
                    <Services/>

                    {/* Importing Feature */}
                    <Feature/>

                    {/* Importing Project */}
                    <Project/>

                    {/* Companies */}
                    <Companies/>

                    {/* Importing Client */}
                    <Clients/>

                    {/* Importing Gallery */}
                    <Gallery/>

                    {/* Importing Meet The Team Section */}
                    <MeetTheTeam/>

                    {/* Importing Contact Us */}
                    <Contact/>

                    {/* Importing Footer */}
                    <Footer/>
                </Suspense>
            </React.Fragment>
        );
    }
}

export default Layout;
