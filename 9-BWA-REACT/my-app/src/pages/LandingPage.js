
import React, { Component } from 'react';

import Header from 'parts/Header'
import landingPage from 'json/landingPage.json'


export default class LandingPage extends Component {
    render() {
        return <>
            <Header {...this.props}></Header>
            <hero></hero>
        </>
    }
}
