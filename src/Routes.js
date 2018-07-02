import React, { Component } from 'react';

import { Router, Stack, Scene } from 'react-native-router-flux';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Landingpage from './pages/Landingpage';

export default class Routes extends Component {
    render () {
        return(
        <Router>
            <Stack key="root" hideNavBar={false}>
                <Scene key="login" component={Login} title="Login" />
                <Scene key="signup" component={Signup} title="Register"/>
                <Scene key="landingpage" component={Landingpage} title="Home" initial={true}/>
            </Stack>
        </Router>
        );
    }
}