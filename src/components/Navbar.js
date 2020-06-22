import React from 'react';

class Navbar extends React.Component {
    render () {
        return (
            <div class='navbar-container'>
                <div class='navbar-home'>
                    <a href='#'>
                    <img src='img/headshot.jpg' class='navbar-img' />
                    <p class='navbar-title'>Naveen <strong>Venkatesan</strong></p>
                    </a>
                </div>
                <div class='navbar-hamburger'>
                    <a href='#' class='fa fa-bars navbar-toggle'></a>
                </div>
            </div>
        );
    }
}

export default Navbar;