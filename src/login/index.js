import React, { Component } from 'react';
import LoginContainer from './containers/LoginContainer'



export default class Login extends Component {

    render() {
        return (
            <LoginContainer {...this.props} />
        )
    }

} 