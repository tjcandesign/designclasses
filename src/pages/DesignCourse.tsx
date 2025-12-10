import React from 'react';
import Hero from '../components/DesignCourseHero';
import Overview from '../components/Overview';
import WorkshopList from '../components/WorkshopList';
import WhyWorkhorse from '../components/WhyWorkhorse';
import CTA from '../components/CTA';
import Colophon from '../components/Colophon';
import InstructorBio from '../components/InstructorBio';

const DesignCourse: React.FC = () => {
    return (
        <div className="design-course-page bg-black text-white">
            <Hero />
            <Overview />
            <WorkshopList />
            <WhyWorkhorse />
            <CTA />
            <InstructorBio />
            <Colophon />
        </div>
    );
};

export default DesignCourse;
