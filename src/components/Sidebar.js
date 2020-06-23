import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Sidebar extends React.Component {
    render () {
        return (
            <div class='sidebar-container'>
                <img class='main-pic' src='img/headshot.jpg' />
                <h1 class='title-name'>Naveen <strong>Venkatesan</strong></h1>
                <h3 class='title-subtitle'>Chabinyc Research Group<br />UC Santa Barbara</h3>
                
                <Link to='/'><p class='nav-link'>Home</p></Link>
                <Link to='/about'><p class='nav-link'>About Me</p></Link>
                <Link to='/research'><p class='nav-link'>Research</p></Link>
                <Link to='/publications'><p class='nav-link'>Publications</p></Link>
                <p class='nav-link'>Photos</p>
                <p class='nav-link'>Blog</p>

                <a href='https://scholar.google.com/citations?user=7w_3668AAAAJ&hl=en' target='_blank' class='ai ai-google-scholar'></a>
                <a href='https://www.linkedin.com/in/naveenvenkatesan/' target='_blank' class='fa fa-linkedin'></a>
                <a href='https://medium.com/@naveen.venkatesan' target='_blank' class='fa fa-medium'></a>
                <a href='https://github.com/naveenv92' target='_blank' class='fa fa-github-alt'></a>
                <a href='mailto:naveen.venkatesan@gmail.com' target='_blank' class='fa fa-envelope-o'></a>

                <p style={{'color': 'gray'}}>&copy; 2020 Naveen Venkatesan</p>
            </div>
        );
    }
}

export default Sidebar;