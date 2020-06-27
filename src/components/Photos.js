import React from 'react';
import { Helmet } from 'react-helmet';
import PhotoCard from './PhotoCard';

class Photos extends React.Component {
    render () {
        return (
            <div class='content-container'>
                <Helmet>
                <title>Naveen Venkatesan | Photos</title>
                </Helmet>

                <h1 class='section-title'>Photos</h1>
                
                <p class='section-text'>
                    One of my hobbies is amateur photography, so here is a glimpse of the 
                    world through my viewfinder. Clicking on the images will take you to
                    the original link.
                </p>

                <p class='section-text' style={{'marginTop':'20px'}}>
                    If you would like to see more of my work, here is the link to my profile on
                    <a href='https://unsplash.com/@naveenv92' target='_blank' rel='noreferrer noopener'>Unsplash</a>.
                </p>

                <div class='photo-container'>
                    <PhotoCard image='bInAdkhsqRs' />
                    <PhotoCard image='X3ZIKjz-DUg' />
                    <PhotoCard image='od1X6_LDs_0' />
                    <PhotoCard image='sH4kZibDFbI' />
                    <PhotoCard image='QEn-Np7sSC4' />
                    <PhotoCard image='LLH6bTb5YP4' />
                    <PhotoCard image='QhMdY7PXVzo' />
                    <PhotoCard image='PaOZ5cKLnYk' />
                    <PhotoCard image='VYKzHVasBtE' />
                    <PhotoCard image='2JA6I43k2IA' />
                    <PhotoCard image='bfh_KwonYlQ' />
                    <PhotoCard image='hecVGoBG6E0' />
                </div>
            </div>
        );
    }
}

export default Photos;