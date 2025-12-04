export interface Workshop {
    id: string;
    title: string;
    description: string;
    learns: string[];
    outcomes: string[];
    image: string;
}

export const workshops: Workshop[] = [
    {
        id: 'intro-graphic-design',
        title: 'Beginner Intro to Graphic Design',
        description: 'A comprehensive introduction to the fundamental principles of graphic design, perfect for those starting their creative journey.',
        learns: [
            'Core design principles (typography, color, layout)',
            'Introduction to Adobe Creative Cloud',
            'Visual hierarchy and composition',
            'Design thinking process'
        ],
        outcomes: [
            'A portfolio-ready design project',
            'Understanding of industry-standard tools',
            'Foundation for further design study'
        ],
        image: 'https://images.unsplash.com/photo-1626785774573-4b799314346d?q=80&w=1000&auto=format&fit=crop'
    },
    {
        id: 'exhibit-design',
        title: 'Graphic Design for Exhibit Design',
        description: 'Learn how to translate 2D graphics into 3D spaces, focusing on environmental design and visitor experience.',
        learns: [
            'Spatial planning and scale',
            'Materiality and production methods',
            'Wayfinding and signage systems',
            'User flow in physical spaces'
        ],
        outcomes: [
            'Scale model or 3D visualization of an exhibit',
            'Technical production files',
            'Understanding of large-format print'
        ],
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop'
    },
    {
        id: 'beyond-canva',
        title: 'Moving Beyond Canva',
        description: 'Transition from template-based design to professional custom creation using industry-standard software.',
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
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop'
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
        image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1000&auto=format&fit=crop'
    },
    {
        id: 'tshirt-production',
        title: 'Graphic Design for T-Shirt Production',
        description: 'Master the art of designing for apparel, from concept to print-ready separation files.',
        learns: [
            'Screen printing constraints and techniques',
            'Color separation and halftones',
            'Fabric selection and ink types',
            'Mockup creation for presentation'
        ],
        outcomes: [
            'Production-ready separation files',
            'Printed t-shirt sample',
            'Understanding of the apparel supply chain'
        ],
        image: 'https://images.unsplash.com/photo-1503341455253-b2e72333dbdb?q=80&w=1000&auto=format&fit=crop'
    },
    {
        id: 'creative-entrepreneurship',
        title: 'Creative Entrepreneurship for Designers',
        description: 'Business fundamentals for creatives, covering pricing, contracts, and client management.',
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
        image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop'
    }
];
