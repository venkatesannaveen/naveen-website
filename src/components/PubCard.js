import React from 'react';

class PubCard extends React.Component {
    render () {
        return (
            <a href={this.props.link} target='_blank' style={{'textDecoration': 'none', 'color': 'black'}}>
                <div style={pubStyle} class='pub-card'>
                    <em>{this.props.journal}</em> <br />
                    <strong>{this.props.title}</strong> <br />
                    <div style={authorStyle}>{this.props.authors}</div>
                </div>
            </a>
        );
    }
}

const pubStyle = {
    'padding': '10px',
    'marginLeft': '10%',
    'marginTop': '20px',
    'marginBottom': '20px',
    'width': '80%',
    'borderRadius': '5px',
    'boxShadow': '0 0 2px rgba(0,0,0,0.12), 0 0 4px rgba(0,0,0,0.12), 0 0 8px rgba(0,0,0,0.12), 0 0 16px rgba(0,0,0,0.12), 0 0 32px rgba(0,0,0,0.12)'
}

const authorStyle = {
    'width': '100%',
    'marginTop': '10px'
}

export default PubCard;