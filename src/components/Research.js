import React from 'react';
import { Helmet } from 'react-helmet';
import researchPhoto from '../img/research.jpg';
import trmcPhoto from '../img/TRMC.png';
import giwaxsPhoto from '../img/GIWAXS.png';

class Research extends React.Component {
    componentDidMount() {
        let imageList = [researchPhoto, trmcPhoto, giwaxsPhoto]
        imageList.forEach((image) => {
            new Image().src = image
        });
    }
    
    render () {
        return (
            <div class='content-container'>
                <Helmet>
                <title>Naveen Venkatesan | Research</title>
                </Helmet>

                <h1 class='section-title'>Research</h1>
                
                <img src={researchPhoto} class='banner-pic' />
                
                <h2 class='section-subtitle'>Optoelectronic properties of layered perovskites</h2>
                <p class='section-text'>
                    In order to increase the ambient stability of halide perovskites, lower dimensional structures, 
                    often Ruddlesden&ndash;Popper of the form A'<sub>2</sub>A<sub>n-1</sub>B<sub>n</sub>X<sub>3n+1</sub> are 
                    used. The insertion of a larger cation in the A' site results in a loss of three-dimensional 
                    connectivity in the layered phases. Therefore, optical and transport properties become highly anisotropic. 
                    Using the contactless characterization technique time-resolved microwave conductivity (TRMC), we are able 
                    to measure carrier mobilities and lifetimes in layered perovskite thin films without the need to fabricate 
                    devices, allowing for high-throughput screening. Using these measurements, we can also make conclusions 
                    about electronic defect densities and carrier recombination pathways during device operation.
                </p>

                <img src={trmcPhoto} style={researchImage} />

                <h2 class='section-subtitle'>Thin film structure of layered perovskites</h2>
                <p class='section-text'>
                    Solution growth of perovskite thin films is typically done by spin-casting. Despite the ease of fabrication, 
                    the process of spin-casting results in highly non-equilibrium concentration gradients in the casting solution. 
                    Additionally, the high boiling point solvents used to dissolve perovskite precursors can form crystalline 
                    solvates with the precursors themselves, often requiring an anti-solvent to complete precipitation. Specific 
                    Ruddlesden&ndash;Popper phases (A'<sub>2</sub>A<sub>n-1</sub>B<sub>n</sub>X<sub>3n+1</sub>) can be targeted 
                    through stoichiometry of the precursor solution with the following chemical equation:
                </p>
                <h3 class='section-subsubtitle' style={{'textAlign':'center'}}>2 A'X + (n-1) AX + n BX<sub>2</sub> &#10230; A'<sub>2</sub>A<sub>n-1</sub>B<sub>n</sub>X<sub>3n+1</sub></h3>
                <p class='section-text' style={{'margin-top':'15px'}}>
                    Due to non-equilibrium crystallization and solvate formation during spin-casting, targeting a specific phase 
                    (n-value) typically results in a distribution of phases due to gradients in precursor concentrations. We have 
                    done nano-scale characterization of spin-cast Ruddlesden&ndash;Popper thin films to characterize these phase 
                    impurities and observed growth kinetics to try and create phase-pure samples.
                </p>

                <img src={giwaxsPhoto} style={researchImage} />
            </div>
        );
    }
}

const researchImage = {
    'width':'50%',
    'display':'block',
    'marginTop':'50px',
    'marginBottom':'50px',
    'marginLeft':'auto',
    'marginRight':'auto'
};

export default Research;