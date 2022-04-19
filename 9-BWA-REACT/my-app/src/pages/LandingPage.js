
import React, { Component } from 'react';

import Header from 'parts/Header'
import landingPage from 'json/landingPage.json'
import Hero from 'parts/Hero';
import MostPicked from 'parts/MostPicked';
import Categories from 'parts/Categories';
import Testimony from 'parts/Testimony';

export default class LandingPage extends Component {

    constructor(props){
        super(props);
        this.refMostPicked = React.createRef();
    }

    render() {
        return <>
            <Header {...this.props}></Header>
            <Hero 
                data={landingPage.hero}
                refMostPicked={this.refMostPicked}
            ></Hero>
            <MostPicked 
                data={landingPage.mostPicked}
                refMostPicked={this.refMostPicked}
            ></MostPicked>
            <Categories data={landingPage.categories}></Categories>
            <Testimony data={landingPage.testimonial}></Testimony>
        </>
    }
} 
