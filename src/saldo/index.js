import React, { Component } from 'react';
import SaldoContainer from './containers/SaldoContainer'



export default class Saldo extends Component {

    render() {
        return (
            <SaldoContainer {...this.props} />
        )
    }

} 