import React from 'react';
import HeroSlider from '../components/slider/HeroSlider'
import DynamicSection from '../components/dynamicSection/DynamicSection';
import AboutSection from '../components/about-section/AboutSection';
import GetStartedSection from '../components/get-started-section/GetStartedSection';

const Home = () => {
    return (
        <div>
            <HeroSlider></HeroSlider>

            <DynamicSection></DynamicSection>

            <AboutSection></AboutSection>

            <GetStartedSection></GetStartedSection>
            
        </div>
    );
};

export default Home;