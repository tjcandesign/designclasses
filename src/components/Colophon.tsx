import React from 'react';

const Colophon: React.FC = () => {
  return (
    <section className="py-16 bg-black text-gray-500 border-t border-gray-900 text-sm">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Left column - Title and description */}
          <div>
            <h3 className="text-3xl font-bold text-white tracking-tight mb-4">Website Colophon</h3>
            <p className="text-gray-400 mb-4">
              This site was designed and developed to serve as a living example of the principles taught in our workshops: clarity, structure, and purpose.
            </p>
            <p className="text-gray-400">
              Traditionally found at the end of a book, a colophon details the production notes and typography used in its creation. In web design, it serves a similar role by crediting the tools, technologies, and typefaces that power the digital experience.
            </p>
          </div>

          {/* Right 3 columns - Data */}
          <div style={{ fontFamily: "'DM Mono', monospace" }}>
            <h4 className="text-white uppercase mb-4 tracking-wider text-xs">Tech Stack</h4>
            <ul className="space-y-1">
              <li>React 18</li>
              <li>TypeScript</li>
              <li>Vite</li>
              <li>Tailwind CSS v4</li>
              <li>Netlify</li>
            </ul>
          </div>
          <div style={{ fontFamily: "'DM Mono', monospace" }}>
            <h4 className="text-white uppercase mb-4 tracking-wider text-xs">Typography</h4>
            <ul className="space-y-1">
              <li><span className="text-[#FFC107]">Headings:</span> <a href="https://fonts.google.com/specimen/Big+Shoulders+Display" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Big Shoulders Display</a></li>
              <li><span className="text-[#FFC107]">Body:</span> <a href="https://fonts.google.com/specimen/Inter" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Inter</a></li>
              <li><span className="text-[#FFC107]">Details:</span> <a href="https://fonts.google.com/specimen/DM+Mono" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">DM Mono</a></li>
            </ul>
          </div>
          <div style={{ fontFamily: "'DM Mono', monospace" }}>
            <h4 className="text-white uppercase mb-4 tracking-wider text-xs">Development</h4>
            <p>Built with <a href="https://deepmind.google/technologies/antigravity/" target="_blank" rel="noopener noreferrer" className="text-[#FFC107] hover:text-white transition-colors">Antigravity</a> by Google DeepMind</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Colophon;
