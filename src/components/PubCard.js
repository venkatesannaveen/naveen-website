import React from 'react';

class PubCard extends React.Component {
    render () {
        return (
            <a href={this.props.link} target='_blank' style={{'textDecoration': 'none', 'color': 'black'}}>
                <div class='pub-card'>
                    <span style={{'color': 'rgb(100, 100, 100)'}}><em>{this.props.journal}</em></span> <br />
                    <span style={{'color': '#4838db', 'fontWeight': '800'}}>{this.props.title}</span> <br />
                    <div style={authorStyle}>{this.props.authors}</div>
                </div>
            </a>
        );
    }
}

const authorStyle = {
    'width': '100%',
    'marginTop': '10px'
}

export default PubCard;