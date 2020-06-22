import React from 'react';

class Sidebar extends React.Component {
    render () {
        return (
            <div class='sidebar-container'>
                <img src='img/headshot.jpg' class='main-pic' />
                <h1 class='title-name'>Naveen <strong>Venkatesan</strong></h1>
                <h3 class='title-subtitle'>Chabinyc Research Group<br />UC Santa Barbara</h3>
                
                <p class='nav-link'>Home</p>
                <p class='nav-link'>About Me</p>
                <p class='nav-link'>Research</p>
                <p class='nav-link'>Publications</p>
                <p class='nav-link'>Photos</p>
                <p class='nav-link'>Blog</p>

            </div>
        );
    }
}

export default Sidebar;