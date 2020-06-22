import React from 'react';

class Home extends React.Component {
    render () {
        return (
            <div class='content-container'>
                <h1 class='home-title'>Hi, I'm Naveen!</h1>
                <h3 class='home-subtitle'>Materials Scientist | Data Enthusiast | Writer</h3>
                <p class='section-text' style={{'textAlign':'justify'}}>I am a highly-motivated researcher who is passionate about using data 
                analysis to drive solutions to fundamental problems. Strong materials characterization background 
                with extensive synchrotron X-ray diffraction and device measurement experience. Proficient knowledge 
                of scripting with Python for data analysis, machine learning, and data visualization. Also familiar 
                with making data queries with SQL.</p>
            </div>
        );
    }
}

export default Home;