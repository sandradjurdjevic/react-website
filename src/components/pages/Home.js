import React, {Component} from 'react';
import Header from '../common/Header';
import image from '../assets/header-bg.jpg';

//reusable components
import Services from '../common/Services'
import Portfolio from '../common/Portfolio'

class Home extends Component{
    render(){
        return(
            <div> 
                
                <Header 
                    title="Welcome to our studio!"
                    subtitle="IT'S NICE TO MEET YOU"
                    bottomtext="Tell me more"
                    link="/services"
                    showbutton={true}
                    image={image}
                />
                <Services />
                <Portfolio />
            </div>
        );
    }
}

export default Home;