import React from 'react';
import { Helmet } from 'react-helmet';
import BlogCard from './BlogCard';

class Blog extends React.Component {
    render () {
        return (
            <div class='content-container'>
                <Helmet>
                <title>Naveen Venkatesan | Blog</title>
                </Helmet>

                <h1 class='section-title'>Blog</h1>
                <p class='section-text'>
                    I write for several publications on Medium and am also a writer on freeCodeCamp. Click any of the entries for a link to the original blog post.
                </p>
                <BlogCard 
                    link='https://towardsdatascience.com/make-a-simple-nba-shot-chart-with-python-e5d70db45d0d'
                    date='June 17, 2020'
                    title='Make a Simple NBA Shot Chart with Python'
                    publication='Towards Data Science'
                    summary="Have you ever wanted to make a fancy-looking NBA shot chart? It's simpler than ever!"
                    blogpic='https://miro.medium.com/max/1400/1*TTqlI9xcHGcNUygDVVQT1g.png'
                />
                <BlogCard
                    link='https://medium.com/swlh/generating-candlestick-charts-from-scratch-ef6e1d3cf0e9'
                    date='June 14, 2020'
                    title='Generating Candlestick Charts From Scratch'
                    publication='The Startup'
                    summary={<span>Use <code>matplotlib</code> to generate a candlestick chart of stock data</span>}
                    blogpic='https://miro.medium.com/max/1400/1*P1MMt7TOQn9mdbdJW0gmlw.png'
                />
                <BlogCard
                    link='https://towardsdatascience.com/visualizing-the-2019-20-english-premier-league-season-with-matplotlib-and-pandas-fd491a07cfda'
                    date='June 2, 2020'
                    title={<span>Visualizing the 2019-20 English Premier League Season with <code>matplotlib</code> and <code>pandas</code></span>}
                    publication='Towards Data Science'
                    summary='What stats lie behind the 2019-20 English Premier League table?'
                    blogpic='https://miro.medium.com/max/1144/1*BfD5vgSSJw6EoztmNMv68w.png'
                />
                <BlogCard
                    link='https://levelup.gitconnected.com/a-simple-method-to-calculate-circular-intensity-averages-in-images-4186a685af3'
                    date='May 31, 2020'
                    title='A Simple Method to Calculate Circular Intensity Averages in Images'
                    publication='Level Up Coding'
                    summary='Using Python to determine intensity variation with radial distance in images'
                    blogpic='https://miro.medium.com/max/698/1*Pj2ywikZZWuALlkG4EmwwQ.png'
                />
                <BlogCard
                    link='https://towardsdatascience.com/a-guide-to-creating-and-using-your-own-matplotlib-style-30de6c60bac0'
                    date='May 25, 2020'
                    title={<span>A Guide to Creating and Using Your Own <code>matplotlib</code> style</span>}
                    publication='Towards Data Science'
                    summary={<span>Creating a style template for easy re-use of <code>matplotlib</code> settings</span>}
                    blogpic='https://miro.medium.com/max/1118/1*eTIbkSjuW5KNqPgEJsFaYA.png'
                />
                <BlogCard
                    link='https://towardsdatascience.com/scraping-nfl-stats-to-compare-quarterback-efficiencies-4989642e02fe'
                    date='May 17, 2020'
                    title='Using Python to Scrape NFL Stats and Compare Quarterback Efficiencies'
                    publication='Towards Data Science'
                    summary={<span>Using <code>BeautifulSoup</code> to scrape NFL stats and plot radar charts of quarterbacks</span>}
                    blogpic='https://miro.medium.com/max/1322/1*qYaAN8n21VviuULMFwvGCA.png'
                />
                <BlogCard
                    link='https://towardsdatascience.com/visualizing-musical-intervals-with-lissajous-curves-351248ee30ff'
                    date='May 14, 2020'
                    title='Visualizing Musical Intervals with Lissajous Curves'
                    publication='Towards Data Science'
                    summary='Using dynamic Python animations to visualize dissonance in musical intervals'
                    blogpic='https://miro.medium.com/max/600/1*TwiRWKg1KIbPt3p1mfxf5w.gif'
                />
                <BlogCard
                    link='https://towardsdatascience.com/using-logistic-regression-to-create-a-binary-and-multiclass-classifier-from-basics-26f5e1e92777'
                    date='May 9, 2020'
                    title='Using Logistic Regression to Create a Binary and Multiclass Classifier from Basics'
                    publication='Towards Data Science'
                    summary='Using Python to generate binary and multiclass classifiers optimized with gradient descent'
                    blogpic='https://miro.medium.com/max/1076/1*Z2vfZdTGBteSEHuj6-CfUw.png'
                />
                <BlogCard
                    link='https://towardsdatascience.com/intro-to-dynamic-visualization-with-python-animations-and-interactive-plots-f72a7fb69245'
                    date='April 25, 2020'
                    title='Intro to Dynamic Visualization with Python &ndash; Animations and Interactive Plots'
                    publication='Towards Data Science'
                    summary='Making basic animations and interactive plots with Python'
                    blogpic='https://miro.medium.com/max/864/1*mJMm9bGXpcR4wgDWjwzybg.gif'
                />
                <BlogCard
                    link='https://towardsdatascience.com/visualizing-three-dimensional-data-heatmaps-contours-and-3d-plots-with-python-bd718d1b42b4'
                    date='April 16, 2020'
                    title='Visualizing Three-Dimensional Data with Python &ndash; Heatmaps, Contours, and 3D Plots'
                    publication='Towards Data Science'
                    summary='Plotting heatmaps, contour plots, and 3D plots with Python'
                    blogpic='https://miro.medium.com/max/864/1*CWmrRqBA28RIJOR1LUagQg.png'
                />
                <BlogCard
                    link='https://towardsdatascience.com/basic-curve-fitting-of-scientific-data-with-python-9592244a2509'
                    date='April 11, 2020'
                    title='Basic Curve Fitting of Scientific Data with Python'
                    publication='Towards Data Science'
                    summary='A basic guide to using Python to fit non-linear functions to experimental data points'
                    blogpic='https://miro.medium.com/max/784/1*vN3Fuen7j4IJWNq3yuZzbQ.png'
                />
                <BlogCard
                    link='https://towardsdatascience.com/an-introduction-to-making-scientific-publication-plots-with-python-ea19dfa7f51e'
                    date='April 1, 2020'
                    title='An Introduction to Making Scientific Publication Plots with Python'
                    publication='Towards Data Science'
                    summary='An introduction to how to use Python to plot data for scientific publications'
                    blogpic='https://miro.medium.com/max/808/1*3hgnupbwTYNkWsf44a7QAw.png'
                />
                <BlogCard
                    link='https://medium.com/@naveen.venkatesan/visualizing-covid-19-data-29d05bb9c982'
                    date='March 29, 2020'
                    title='Visualizing COVID-19 Data'
                    publication='Self-published'
                    summary='Assessing the impact and spread of COVID-19 across the world'
                    blogpic='https://miro.medium.com/max/1400/1*gjOgvP7izM93lmXdI88Tww.png'
                />
                
            </div>
        );
    }
}

export default Blog;