import React from 'react';

class BlogCard extends React.Component {
    render () {
        return (
            <a href={this.props.link} target='_blank' style={{'textDecoration': 'none', 'color': 'black'}} rel='noreferrer noopener'>
                <div class='pub-card'>
                    <div class='blog-content'>
                        <span style={{'color': 'rgb(100, 100, 100)'}}><em>{this.props.date}</em></span> <br />
                        <span style={{'color': '#4838db', 'fontWeight': '800'}}>{this.props.title}</span> <br />
                        <span style={{'fontWeight': '600'}}>{this.props.publication}</span><br />
                        <div style={summaryStyle}>{this.props.summary}</div>
                    </div>
                    <div class='blog-pic'>
                        <img src={this.props.blogpic} style={{'width':'100%'}} />
                    </div>
                </div>
            </a>
        );
    }
}

const summaryStyle = {
    'width': '100%',
    'marginTop': '5px',
}

export default BlogCard;