export interface Workshop {
    id: string;
    title: string;
    description: string;
    learns: string[];
    outcomes: string[];
    image: string;
    sessions?: number;
    price?: number;
    featured?: boolean;
    available?: boolean;
    registrationDate?: string;
    seatsAvailable?: number;
}

export const workshops: Workshop[] = [
    {
        id: 'intro-graphic-design',
        title: 'Beginner Intro to Graphic Design',
        description: 'A comprehensive introduction to the fundamental principles of graphic design, perfect for those starting their creative journey.',
        learns: [
            'Core design principles (typography, color, layout)',
            'Introduction to Adobe Creative Suite',
            'Visual hierarchy and composition',
            'Design thinking process'
        ],
        outcomes: [
            'A portfolio-ready design project',
            'Understanding of industry-standard tools',
            'Foundation for further design study'
        ],
        image: 'https://images.unsplash.com/photo-1626785774573-4b799314346d?q=80&w=1000&auto=format&fit=crop',
        price: 150,
        sessions: 2,
        seatsAvailable: 3,
        available: true,
        registrationDate: '2025-04-15'
    },
    {
        id: 'beyond-canva',
        title: 'Moving Beyond Canva',
        description: 'Move beyond templates and gain a true understanding of Illustrator & Photoshop for professional design workflows.',
        learns: [
            'Limitations of templates vs. custom design',
            'Vector graphics vs. raster images',
            'Advanced typography control',
            'Brand consistency across mediums'
        ],
        outcomes: [
            'Custom brand assets created from scratch',
            'Proficiency in Illustrator/InDesign',
            'Professional file management workflows'
        ],
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop',
        sessions: 2,
        price: 150,
        available: false
    },
    {
        id: 'ai-design-workflow',
        title: 'AI-Assisted Web Design',
        description: 'Learn to build and deploy working prototypes in just over an hour using AI tools like Superwhisper, ChatGPT, Windsurf, and Antigravity.',
        learns: [
            'Voice-to-text AI workflow with Superwhisper',
            'ChatGPT transcript to prompt engineering',
            'AI-assisted coding with Windsurf & Antigravity',
            'Rapid prototyping & deployment via Netlify'
        ],
        outcomes: [
            'A fully deployed, working website',
            'Understanding of AI-driven development',
            'Drastically reduced development time'
        ],
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop',
        available: false,
        sessions: 1,
        price: 250
    },
    {
        id: 'laser-cutting',
        title: 'Laser Cutting at MLK Fab Lab',
        description: 'Hands-on training in digital fabrication, teaching you how to prepare files and operate laser cutters.',
        learns: [
            'File preparation for CNC/Laser',
            'Material selection and safety',
            'Prototyping techniques',
            '2D to 3D assembly logic'
        ],
        outcomes: [
            'Physical laser-cut product or prototype',
            'Certification for MLK Fab Lab usage',
            'Understanding of subtractive manufacturing'
        ],
        image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1000&auto=format&fit=crop',
        available: false
    },
    {
        id: 'creative-entrepreneurship',
        title: 'Creative Entrepreneurship for Designers',
        description: 'Multi-week course covering business fundamentals for creatives, including pricing, contracts, and client management.',
        learns: [
            'Pricing strategies and value-based billing',
            'Contract essentials and IP rights',
            'Client communication and boundaries',
            'Financial planning for freelancers'
        ],
        outcomes: [
            'Standard contract template',
            'Pricing structure for services',
            'Business plan outline'
        ],
        image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop',
        available: false,
        registrationDate: 'Registration starts January 1st'
    }
];
