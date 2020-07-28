import React from 'react';
import { Helmet } from 'react-helmet';

class Resume extends React.Component {
    render () {
        return (
            <div class='content-container' style={{'font-family':'Muli'}}>
                <Helmet>
                    <title>Naveen Venkatesan | Resume</title>    
                </Helmet>

                <h1 class='resume-title' style={{'marginBottom':'0'}}>Naveen <strong>Venkatesan, PhD</strong></h1>
                <h3 class='resume-strong' style={{'textAlign':'center', 'color':'rgba(100, 100, 100)'}}>MATERIALS SCIENTIST AND DATA ENTHUSIAST</h3>

                <h2 class='resume-subtitle'>SUMMARY</h2>
                <div class='resume-card'>
                    <p class='resume-text' style={{'marginTop':'5px'}}>
                        I am a materials scientist with 5 years of graduate and postdoctoral research in fundamental
                        materials characterization, with an emphasis on X-ray diffraction and semiconductor device 
                        measurements of optoelectronic materials (thin films and nanoparticles). Adept at correlating 
                        optical measurements to structural and electronic properties. I have an excellent scientific 
                        publication record and my work was the basis for most of the two-dimensional perovskite work 
                        in my research group. Passionate about data analysis and visualization and am a self-taught 
                        data scientist. I have good fundamental knowledge of data structures and 5+ years of experience 
                        writing data analysis scripts in Python to perform data analysis, visualization, and machine 
                        learning tasks.
                    </p>
                </div>

                <h2 class='resume-subtitle'>EDUCATION</h2>
                <div class='resume-card'>
                    <h3 class='resume-strong'>University of California, Santa Barbara | 2015 - 2020</h3>
                    <p class='resume-text'><strong>PhD, Materials Science</strong></p>
                    <p class='resume-text'><strong>Research Advisor:</strong> Professor Michael L. Chabinyc (<a href='https://labs.materials.ucsb.edu/chabinyc/michael/' target='_blank' rel='noreferrer noopener'>Group Website</a>)</p>
                    <p class='resume-text'><strong>Thesis Title:</strong> Charge carrier dynamics and structural characterization of layered hybrid halide perovskite thin films</p>

                    <h3 class='resume-strong' style={{'marginTop':'20px'}}>University of California, Berkeley | 2010 - 2015</h3>
                    <p class='resume-text'><strong>MS, Materials Science and Engineering</strong></p>
                    <p class='resume-text'><strong>BS, Chemical Engineering and Materials Science</strong></p>
                    <p class='resume-text'><strong>Research Advisor:</strong> Professor Nitash P. Balsara (<a href='http://www.cchem.berkeley.edu/npbgrp/index.html' target='_blank' rel='noreferrer noopener'>Group Website</a>)</p>
                </div>

                <h2 class='resume-subtitle'>SKILLS</h2>
                <div class='resume-card'>
                    <h3 class='resume-strong'>Experimental</h3>
                    <p class='resume-text'>
                        X-ray Scattering (Lab/Synchrotron), Neutron Scattering, Crystallography, UV-Vis, Photoluminescence, 
                        Electroluminescence, Glovebox, Electron Microscopy, Device Physics, Colloidal Nanoparticle Synthesis, 
                        Pulsed Laser Spectroscopy, Device Measurements
                    </p>

                    <h3 class='resume-strong' style={{'marginTop':'20px'}}>Programming</h3>
                    <p class='resume-text'>
                        Python, MATLAB, Java, Javascript, React, HTML, CSS, SQL
                    </p>

                    <h3 class='resume-strong' style={{'marginTop':'20px'}}>Data Science</h3>
                    <p class='resume-text'>
                        Machine Learning (scikit-learn, keras), Jupyter, matplotlib, pandas
                    </p>

                    <h3 class='resume-strong' style={{'marginTop':'20px'}}>Other Skills</h3>
                    <p class='resume-text'>
                        CAD Design (Fusion 360), 3D Printing, Excellent Communicator, Motivated Self-Starter
                    </p>
                </div>

                <h2 class='resume-subtitle'>RELEVANT EXPERIENCE</h2>
                <div class='resume-card'>
                    <h3 class='resume-strong'>Recurring Data Science Contributor</h3>
                    <p class='resume-text'>Medium Publications | 2020 &ndash; Present</p>
                    <ul>
                        <li class='resume-point'>
                            Author articles providing data visualization, analysis, and machine learning tutorials 
                            with Python, amassing >50,000 views
                        </li>
                    </ul>

                    <h3 class='resume-strong' style={{'marginTop':'20px'}}>Graduate/Postdoctoral Researcher</h3>
                    <p class='resume-text'>Chabinyc Research Group &ndash; UC Santa Barbara | 2015 &ndash; Present</p>
                    <ul>
                        <li class='resume-point'>
                            Set groundwork for layered perovskite research in group &ndash; investigated 3 systems for 
                            feasibility in optoelectronic devices using a combination of various X-ray diffraction techniques 
                            and transient photoconductivity measurements
                        </li>
                        <li class='resume-point'>
                            Developed and published software (Python with PyQt GUI) to analyze synchrotron diffraction data 
                            and simulated diffraction patterns of thin films from crystal structures
                        </li>
                        <li class='resume-point'>
                            Wrote 2 proposals and conducted X-ray and neutron diffraction experiments at 3 different user facilities
                        </li>
                        <li class='resume-point'>
                            Initiated 2 research collaborations that have resulted in 5 journal publications and mentored 3 students 
                            resulting in 1 journal publication
                        </li>
                        <li class='resume-point'>
                            Co-authored 11 peer-reviewed journal articles (4 as lead author) and gave 5 conference presentations
                        </li>
                    </ul>

                    <h3 class='resume-strong' style={{'marginTop':'20px'}}>Undergraduate Researcher</h3>
                    <p class='resume-text'>Balsara Research Group &ndash; UC Berkeley | 2010 &ndash; 2015</p>
                    <ul>
                        <li class='resume-point'>
                            Increased lithium ion conductivity of polymer electrolytes by approximately 10x through manipulation 
                            of the Li-salt concentration in electrolyte formulation
                        </li>
                        <li class='resume-point'>
                            Measured polymer morphology changes with <em>in-situ</em> synchrotron X-ray scattering measurements
                        </li>
                        <li class='resume-point'>
                            Co-author on 2 peer-reviewed journal articles
                        </li>
                    </ul>
                </div>

                <h2 class='resume-subtitle'>PROFESSIONAL EXPERIENCE</h2>
                <div class='resume-card'>
                    <h3 class='resume-strong'>Failure Analysis Intern</h3>
                    <p class='resume-text'>Western Digital Corporation | Summer 2014</p>
                    <ul>
                        <li class='resume-point'>
                            Collected and indexed secondary ion mass spectrometry (ToF-SIMS) spectra of all components 
                            in company manufactured hard disk drives
                        </li>
                        <li class='resume-point'>
                            Generated database of spectra as future reference for engineering team to determine source of 
                            drive failures
                        </li>
                    </ul>

                    <h3 class='resume-strong' style={{'marginTop':'20px'}}>Process Engineering Intern</h3>
                    <p class='resume-text'>DuPont Industrial Biosciences | Summer 2013</p>
                    <ul>
                        <li class='resume-point'>
                            Optimized feed flow rate and recycle streams in pilot-scale microfiltration unit to filter 
                            out biomass from fermentation product and confirmed filtration efficiency with optical enzyme 
                            assays
                        </li>
                        <li class='resume-point'>
                            Confirmed feasibility of pilot microfiltration unit allowing company to purchase a production-scale 
                            unit
                        </li>
                    </ul>
                </div>

                <h2 class='resume-subtitle'>PROJECTS</h2>
                <div class='resume-card'>
                    <h3 class='resume-strong'>Synchrotron X-Ray Diffraction Software</h3>
                    <p class='resume-text'><a href='https://naveenv92.github.io/xray-scattering-tools/' target='_blank' rel='noreferrer noopener'>naveenv92.github.io/xray-scattering-tools</a></p>
                    <ul>
                        <li class='resume-point'>
                            Developed novel software to allow scientists to simulate synchrotron X-ray diffraction 
                            patterns of materials
                        </li>
                    </ul>
                    <h3 class='resume-strong' style={{'marginTop':'20px'}}>Python Science Tutorial</h3>
                    <p class='resume-text'><a href='https://github.com/naveenv92/python-science-tutorial' target='_blank' rel='noreferrer noopener'>github.com/naveenv92/python-science-tutorial</a></p>
                    <ul>
                        <li class='resume-point'>
                            Empower experimental scientists to use Python for data analysis and visualization 
                            with online Jupyter notebook tutorials
                        </li>
                    </ul>

                    <h3 class='resume-strong' style={{'marginTop':'20px'}}>COVID-19 Data Visualization</h3>
                    <p class='resume-text'><a href='https://github.com/naveenv92/covid-19-visualization' target='_blank' rel='noreferrer noopener'>github.com/naveenv92/covid-19-visualization</a></p>
                    <ul>
                        <li class='resume-point'>
                            Created visualizations of COVID-19 infections from JHU CSSE database &ndash; use 
                            to predict instantaneous case doubling rates
                        </li>
                    </ul>
                </div>

            </div>
        );
    }
}

export default Resume;