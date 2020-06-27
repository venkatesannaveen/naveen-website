import React from 'react';
import { Helmet } from 'react-helmet'
import PubCard from './PubCard';

class Publications extends React.Component {
    render () {
        return (
            <div class='content-container'>
                <Helmet>
                <title>Naveen Venkatesan | Publications</title>
                </Helmet>

                <h1 class='section-title'>Publications</h1>
                <p class='section-text'>Click on any of the entries for a link to the publication. 
                Link to <a href='https://scholar.google.com/citations?user=7w_3668AAAAJ&hl=en' target='_blank' rel='noreferrer noopener'>Google Scholar profile</a>.</p>
                <h2 class='section-subtitle'>2020</h2>
                <PubCard 
                    title='Bright magnetic dipole radiation from two-dimensional lead-halide perovskites' 
                    authors={<span>R. A. DeCrescent, <strong>N. R. Venkatesan</strong>, C. J. Dahlman, R. M. Kennard,
                    X. Zhang, W. Li, X. Du, M. L. Chabinyc, R. Zia, J. A. Schuller</span>}
                    journal='Science Advances'
                    link='https://advances.sciencemag.org/content/6/6/eaay4900' 
                />

                <h2 class='section-subtitle'>2019</h2>
                <PubCard
                    title='Optical constants and effective-medium origins of large optical anisotropies in layered hybrid organic/inorganic perovskites'
                    authors={<span>R. A. DeCrescent, <strong>N. R. Venkatesan</strong>, C. J. Dahlman, R. M. Kennard,
                    M. L. Chabinyc, R. Zia, J. A. Schuller</span>}
                    journal='ACS Nano'
                    link='https://pubs.acs.org/doi/abs/10.1021/acsnano.9b05504'
                />
                <PubCard
                    title='Enhanced yield-mobility products in hybrid halide Ruddlesden&ndash;Popper compounds with aromatic ammonium spacers'
                    authors={<span><strong>N. R. Venkatesan</strong>, A. Mahdi, B. Barraza, G. Wu, M. L. Chabinyc, R. Seshadri</span>}
                    journal='Dalton Transactions'
                    link='https://pubs.rsc.org/en/content/articlelanding/2019/dt/c9dt03074c#!divAbstract'
                />
                <PubCard
                    title={<span>Controlling solvate intermediate growth for phase-pure organic lead iodide Ruddlesden&ndash;Popper 
                           (C<sub>4</sub>H<sub>9</sub>NH<sub>3</sub>)<sub>2</sub>(CH<sub>3</sub>NH<sub>3</sub>)<sub>n-1</sub>
                           Pb<sub>n</sub>I<sub>3n+1</sub> perovskite thin films</span>}
                    authors={<span>C. J. Dahlman, R. A. DeCrescent, <strong>N. R. Venkatesan</strong>, R. M. Kennard,
                             G. Wu, M. A. Everest, J. A. Schuller, M. L. Chabinyc</span>}
                    journal='Chemistry of Materials'
                    link='https://pubs.acs.org/doi/abs/10.1021/acs.chemmater.9b01952'     
                />

                <h2 class='section-subtitle'>2018</h2>
                <PubCard
                    title='Phase intergrowth and structural defects in organic metal halide Ruddlesden&ndash;Popper thin films'
                    authors={<span><strong>N. R. Venkatesan</strong>, R. M. Kennard, R. A. DeCrescent, H. Nakayama,
                    C. J. Dahlman, E. E. Perry, J. A. Schuller, M. L. Chabinyc</span>}
                    journal='Chemistry of Materials'
                    link='https://pubs.acs.org/doi/10.1021/acs.chemmater.8b03832'
                />
                <PubCard
                    title='Steady-state microwave conductivity reveals mobility-lifetime product in methylammonium lead iodide'
                    authors={<span>J. G. Labram, E. E. Perry, <strong>N. R. Venkatesan</strong>, M. L. Chabinyc</span>}
                    journal='Applied Physics Letters'
                    link='https://aip.scitation.org/doi/abs/10.1063/1.5041959'
                />
                <PubCard
                    title={<span>N-type surface doping of MAPbI<sub>3</sub> via charge transfer from small molecules</span>}
                    authors={<span>E. E. Perry, J. G. Labram, <strong>N. R. Venkatesan</strong>, H. Nakayama, M. L. Chabinyc</span>}
                    journal='Advanced Electronic Materials'
                    link='https://onlinelibrary.wiley.com/doi/10.1002/aelm.201800087'
                />
                <PubCard
                    title='Effects of side-chain topology on aggregation of conjugated polymers'
                    authors={<span>B. McDearmon, E. Lim, I.-H. Lee, L. M. Kozycz, K. O'Hara, P. I. Robledo, <strong>N. R. Venkatesan</strong>,
                    M. L. Chabinyc, C. J. Hawker</span>}
                    journal='Macromolecules'
                    link='https://pubs.acs.org/doi/abs/10.1021/acs.macromol.8b00176'
                />
                <PubCard
                    title='Charge-carrier dynamics and crystalline texture of layered Ruddlesden&ndash;Popper hybrid lead iodide 
                    perovskite thin films'
                    authors={<span><strong>N. R. Venkatesan</strong>, J. G. Labram, M. L. Chabinyc</span>}
                    journal='ACS Energy Letters'
                    link='https://pubs.acs.org/doi/abs/10.1021/acsenergylett.7b01245'
                />

                <h2 class='section-subtitle'>2017</h2>
                <PubCard
                    title='Charge transport in a two-dimensional hybrid metal thiocyanate compound'
                    authors={<span>J. G. Labram&dagger;, <strong>N. R. Venkatesan&dagger;</strong>, C. J. Takacs, H. A. Evans,
                    E. E. Perry, F. Wudl, M. L. Chabinyc (&dagger;equal co-authors)</span>}
                    journal='Journal of Materials Chemistry C'
                    link='https://pubs.rsc.org/en/content/articlelanding/2017/TC/C7TC01161J#!divAbstract'
                />

                <h2 class='section-subtitle'>2016</h2>
                <PubCard
                    title='Relationship between ion dissociation, melt morphology, and electrochemical performance of lithium
                    and magnesium single-ion conducting block copolymers'
                    authors={<span>J. L. Thelen, S. Inceoglu, <strong>N. R. Venkatesan</strong>, N. G. Mackay, N. P. Balsara</span>}
                    journal='Macromolecules'
                    link='https://pubs.acs.org/doi/abs/10.1021/acs.macromol.6b01886'
                />
                <PubCard
                    title={<span>Structure and ionic conductivity of polystyrene-<em>block</em>-poly(ethylene oxide) electrolytes
                    in the high salt concentration limit</span>}
                    authors={<span>M. Chintapalli, T. N. P. Le, <strong>N. R. Venkatesan</strong>, N. G. Mackay, A. A. Rojas,
                    J. L. Thelen, X. C. Chen, D. Devaux, N. P. Balsara</span>}
                    journal='Macromolecules'
                    link='https://pubs.acs.org/doi/abs/10.1021/acs.macromol.5b02620'
                />

            </div>
        );
    }
}

export default Publications;