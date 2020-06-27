import React from 'react';
import { Helmet } from 'react-helmet';

class Home extends React.Component {
    render () {
        return (
            <div class='content-container'>
                <Helmet>
                    <title>Naveen Venkatesan | Home</title>    
                </Helmet>

                <h1 class='home-title' style={{'color': '#cc7000'}}>Hi, I'm Naveen!</h1>
                <h3 class='home-subtitle' style={{'color': '#0081cc'}}>Materials Scientist | Data Enthusiast | Writer</h3>
                
                <p class='section-text' style={{'textAlign':'justify'}}>
                    I am a highly-motivated researcher who is passionate about using data 
                    analysis to drive solutions to fundamental problems. Strong materials characterization background 
                    with extensive synchrotron X-ray diffraction and device measurement experience. Proficient knowledge 
                    of scripting with Python for data analysis, machine learning, and data visualization. Also familiar 
                    with making data queries with SQL.
                </p>

                <p class='section-text' style={{'margin-top':'20px'}}>
                    <strong>Latest:</strong> Article on NBA shot charts featured in Towards Data Science on Medium
                </p>

                <div class='home-button-div'>
                    <div class='home-button'>Resume</div>
                    <div class='home-button'>Curriculum Vitae</div>
                    <div class='home-button'>Connect on LinkedIn</div>
                </div>
            </div>
        );
    }
}

export default Home;