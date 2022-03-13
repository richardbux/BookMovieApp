import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'typeface-roboto';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';
// import Controller from './screens/Controller';
import Home from './screens/home/Home.js';

const App = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home {...props} />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
ReactDOM.render(
    <App baseUrl="http://localhost:8085/api/v1/" />,
    document.getElementById('root'));
registerServiceWorker();