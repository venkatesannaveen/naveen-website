import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

class Home extends React.Component {
    render () {
        return (
            <div class='content-container'>
                <Helmet>
                    <title>Naveen Venkatesan | Home</title>    
                </Helmet>

                <h1 class='home-title' style={{'color': '#cc7000', 'font-family':'Muli'}}>Hi, I'm Naveen!</h1>
                <h3 class='home-subtitle' style={{'color': '#0081cc', 'font-family':'Muli'}}>Materials Scientist | Data Enthusiast | Writer</h3>
                
                <p class='section-text' style={{'textAlign':'center'}}>
                    I am a highly-motivated researcher who is passionate about using data 
                    analysis to drive solutions to fundamental problems. Strong fundamental materials characterization background 
                    with extensive synchrotron X-ray diffraction and device measurement experience. Proficient knowledge 
                    of scripting with Python for data analysis, machine learning, and data visualization. Also familiar 
                    with making data queries with SQL.
                </p>

                <p class='section-text' style={{'margin-top':'20px', 'textAlign':'center'}}>
                    <strong>Latest:</strong> Article on using <code>pylustrator</code> <a style={{'textDecoration':'none'}} href='https://towardsdatascience.com/generate-easily-reproducible-scientific-figures-with-pylustrator-9426292e07a4' target='_blank' rel='noreferrer noopener'>Towards Data Science</a>
                </p>

                <div class='home-button-div'>
                    <Link to='/resume' class='home-button'><div>Resume</div></Link>
                    <div class='home-button' onClick={()=> window.open('https://www.linkedin.com/in/naveenvenkatesan/', '_blank')}>LinkedIn</div>
                </div>
            </div>
        );
    }
}

export default Home;