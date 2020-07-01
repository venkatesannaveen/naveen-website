import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import aboutPhoto from '../img/aboutme.jpg';

class AboutMe extends React.Component {
    render () {
        return (
            <div class='content-container'>
                <Helmet>
                <title>Naveen Venkatesan | About Me</title>
                </Helmet>
                
                <h1 class='section-title'>About Me</h1>
                
                <img src={aboutPhoto} class='banner-pic' />
                
                <h2 class='section-subtitle'>My Story</h2>
                <p class='section-text'>
                    I was born and grew up in the San Francisco Bay Area, and lived for a few years in India when I was 
                    younger. My undergraduate education was at UC Berkeley, where I studied chemical engineering and materials 
                    science, and worked in Professor Nitash Balsara's research group on polymer electrolytes for lithium 
                    batteries. After graduating, I moved a few miles down the coast to UC Santa Barbara, where I recently 
                    completed my PhD in materials science. My graduate research, in Professor Michael Chabinyc's group, 
                    is focused on structural and electronic characterization of layered halide perovskites (more info can 
                    be found on the <Link to='/research' style={{'textDecoration':'none'}}>research</Link> and&nbsp;
                    <Link to='/publications' style={{'textDecoration':'none'}}>publications</Link> pages).
                </p>
                <p class='section-text' style={{'marginTop':'20px'}}>
                    Outside of research, I have a variety of hobbies. I have always really enjoyed playing music &ndash; 
                    I learned to play piano when I was younger and played alto saxophone in my middle school and high school 
                    concert and jazz bands. I am also a self-taught guitarist, and somewhat of a "professional car karaoke 
                    singer". In addition to music, I am an avid amateur photographer who loves traveling &ndash; you can see 
                    some of my work on the <Link to='/photos' style={{'textDecoration':'none'}}>photos</Link> page. I am the 
                    proud owner of a 3D printer (Creality Ender 3), and have really embraced the maker culture. Some of my 
                    designs can be found at my <a href='https://www.thingiverse.com/naveenv92/about' target='_blank' rel='noreferrer noopener' style={{'textDecoration':'none'}}>Thingiverse profile</a>. 
                    Finally, I enjoy cooking (especially the science aspect of cooking &ndash; shoutout to&nbsp;
                    <a href='https://www.seriouseats.com/the-food-lab' target='_blank' rel='noreferrer noopener' style={{'textDecoration':'none'}}>The Food Lab</a>) and 
                    also playing golf (in addition to a variety of other sports)
                </p>

                <h2 class='section-subtitle'>Links</h2>
                <p class='section-text'>I will post any specific articles and updates to the <Link to='/blog' style={{'textDecoration':'none'}}>blog page</Link>.</p>
                <h3 class='section-subsubtitle'>Github</h3>
                <p class='section-text'>
                    I have coding projects and tutorials, including scripts to analyze and simulate synchrotron diffraction 
                    images (from my <a href='https://pubs.acs.org/doi/10.1021/acs.chemmater.8b03832' arget='_blank' rel='noreferrer noopener' style={{'textDecoration':'none'}}>publication in 2018</a>), all hosted at my <a href='https://github.com/naveenv92' target='_blank' rel='noreferrer noopener' style={{'textDecoration':'none'}}>Github page</a>.
                </p>
                <h3 class='section-subsubtitle'>Project Euler</h3>
                <p class='section-text'>I enjoy solving some of the problems at <a href='https://projecteuler.net/' target='_blank' rel='noreferrer noopener' style={{'textDecoration':'none'}}>Project Euler</a> in my free time, and here is my progress so far:</p>
                <img src='https://projecteuler.net/profile/naveenv92.png' alt='' style={{'display':'block', 'marginTop':'20px', 'marginBottom':'20px', 'marginLeft':'10%'}} />
                <h3 class='section-subsubtitle'>Blog</h3>
                <p class='section-text'>
                    I typically post articles about data analysis and visualization on Medium, in the publications Towards Data Science, 
                    The Startup, and Level Up Coding. Links to all my articles can be found on the <Link to='/blog' style={{'textDecoration':'none'}}>blog page</Link>, and here is 
                    a link to my <a href='https://medium.com/@naveen.venkatesan' target='_blank' rel='noreferrer noopener' style={{'textDecoration':'none'}}>Medium profile</a>.
                </p>
            </div>
        );
    }
}

export default AboutMe;