import React from 'react';

class Publications extends React.Component {
    render () {
        return (
            <div class='content-container'>
                <h1 class='section-title'>Publications</h1>
                
                <h2 class='section-subtitle'>Education</h2>
                <h3 class='section-subsubtitle'>University of California, Santa Barbara | 2015 - 2020</h3>
                <p class='section-text'><strong>PhD, Materials Science</strong></p>
                <p class='section-text'><strong>Research Advisor:</strong> Professor Michael L. Chabinyc (<a href='https://labs.materials.ucsb.edu/chabinyc/michael/' target='_blank'>Group Website</a>)</p>
                <p class='section-text'><strong>Thesis Title:</strong> Charge carrier dynamics and structural characterization of layered hybrid halide perovskite thin films</p>

                <h3 class='section-subsubtitle'>University of California, Berkeley | 2010 - 2015</h3>
                <p class='section-text'><strong>MS, Materials Science and Engineering</strong></p>
                <p class='section-text'><strong>BS, Chemical Engineering and Materials Science</strong></p>
                <p class='section-text'><strong>Research Advisor:</strong> Professor Nitash P. Balsara (<a href='http://www.cchem.berkeley.edu/npbgrp/index.html'>Group Website</a>)</p>

                <h2 class='section-subtitle'>My Story</h2>
            </div>
        );
    }
}

export default Publications;