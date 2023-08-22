import React, {Component} from "react";
import routes from "../src/routes";
import {BrowserRouter as Router, Route, Switch, withRouter,} from "react-router-dom";

//import style
import "./assets/css/pe-icon-7.css";

import "./assets/scss/themes.scss";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <React.Fragment>
                <Router>
                    <Switch>
                        {routes.map((route, idx) => (
                            <Route path={route.path} component={route.component} key={idx}/>
                        ))}
                    </Switch>
                </Router>
            </React.Fragment>
        );
    }
}

export default withRouter(App);
