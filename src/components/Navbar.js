import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { show: false };
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu () {
        this.setState({ show: !this.state.show });
    }

    render () {
        return (
            <div class='navbar-container'>
                <div class='navbar-home'>
                    <a href='#'>
                    <img src='img/headshot.jpg' class='navbar-img' />
                    <p class='navbar-title'>Naveen <strong>Venkatesan</strong></p>
                    </a>
                </div>
                <div class='navbar-hamburger' onClick={this.toggleMenu}>
                    <a class='fa fa-bars navbar-toggle' style={{'cursor':'pointer'}}></a>
                </div>
                <div class='navbar-links' style={{'display': this.state.show ? '' : 'none'}}>
                    <Link to='/' className='nav-link-top'><div class='navbar-item' onClick={this.toggleMenu}>Home</div></Link>
                    <Link to='/about' className='nav-link-top'><div class='navbar-item' onClick={this.toggleMenu}>About Me</div></Link>
                    <Link to='/research' className='nav-link-top'><div class='navbar-item' onClick={this.toggleMenu}>Research</div></Link>
                    <Link to='/publications' className='nav-link-top'><div class='navbar-item' onClick={this.toggleMenu}>Publications</div></Link>
                    <Link to='/photos' className='nav-link-top'><div class='navbar-item' onClick={this.toggleMenu}>Photos</div></Link>
                    <Link to='/blog' className='nav-link-top'><div class='navbar-item' onClick={this.toggleMenu}>Blog</div></Link>
                </div>
            </div>
        );
    }
}

export default Navbar;