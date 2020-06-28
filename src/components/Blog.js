import React from 'react';
import { Helmet } from 'react-helmet';

class Blog extends React.Component {
    render () {
        return (
            <div class='content-container'>
                <Helmet>
                <title>Naveen Venkatesan | Blog</title>
                </Helmet>

                <h1 class='section-title'>Blog</h1>

                <h3 class='section-subsubtitle'>Circular Averaging Images</h3>
                <a class="embedly-card" data-card-controls="0" href="https://towardsdatascience.com/an-introduction-to-making-scientific-publication-plots-with-python-ea19dfa7f51e">An Introduction to Making Scientific Publication Plots with Python</a>
                <script async src="//cdn.embedly.com/widgets/platform.js" charset="UTF-8"></script>
            </div>
        );
    }
}

export default Blog;