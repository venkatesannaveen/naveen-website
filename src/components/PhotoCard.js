import React from 'react';

class PhotoCard extends React.Component {
    render () {
        return (
            <div class='photo-card'>
                <a href={'https://unsplash.com/photos/' + this.props.image} target='_blank' rel='noreferrer noopener'>
                    <img class='photo-img' src={'https://source.unsplash.com/' + this.props.image + '/300x200'} />
                </a>
            </div>
        );
    }
}

export default PhotoCard;