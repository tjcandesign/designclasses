import React from 'react';

const InstructorBio: React.FC = () => {
    return (
        <section className="py-24 bg-[#111111] text-white border-b border-gray-800">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold mb-6 text-[#FFC107]">About the Instructor</h2>
                <img src="/Tj.jpg" alt="Tj Cichecki" className="w-48 h-48 rounded-full mx-auto mb-6 object-cover" />
                <p className="text-lg md:text-xl leading-relaxed font-light text-gray-300 mb-4">
                    Theodore (Tj) Cichecki is a Partner, Principal Designer and Creative Director at Workhorse. With over 15 years of experience, Tj specializes in branding design, visual identity, and strategic storytelling. He has led the creative direction for numerous brand campaigns, helping organizations define and communicate their core values through compelling visual systems.
                </p>
                <p className="text-base text-[#FFC107]" style={{ fontFamily: "'DM Mono', monospace" }}>
                    Tj’s expertise spans brand strategy, environmental graphics, and digital experiences. He has worked with a variety of clients, from cultural institutions to tech startups, delivering cohesive brand identities that resonate across touchpoints. His hands‑on approach includes overseeing in‑house fabrication, prototyping, and production, ensuring that every design element is executed with precision.
                </p>
            </div>
        </section>
    );
};

export default InstructorBio;
