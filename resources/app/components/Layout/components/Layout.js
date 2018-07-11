import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createHashHistory } from "history";
import { Grid } from "@material-ui/core";
import Home from "../../Home";
import View from "../../View";


const Layout = () => (
    <div className="wrapper">
        <Grid container>
            <Router history={createHashHistory()}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/view/:id" component={View} />
                </Switch>
            </Router>
        </Grid>
    </div>
);


export default Layout;