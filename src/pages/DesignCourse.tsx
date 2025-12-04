import React from 'react';
import Hero from '../components/DesignCourseHero';
import Overview from '../components/Overview';
import WorkshopList from '../components/WorkshopList';
import Pathway from '../components/Pathway';
import WhyWorkhorse from '../components/WhyWorkhorse';
import CTA from '../components/CTA';

const DesignCourse: React.FC = () => {
    return (
        <div className="design-course-page bg-black text-white">
            <Hero />
            <Overview />
            <WorkshopList />
            <Pathway />
            <WhyWorkhorse />
            <CTA />
        </div>
    );
};

export default DesignCourse;
