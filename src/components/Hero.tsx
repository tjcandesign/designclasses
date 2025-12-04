const Hero = () => {
    return (
        <section className="hero py-xl">
            <div className="container">
                <div className="grid">
                    <div style={{ gridColumn: 'span 12' }}>
                        <h1 className="text-3xl uppercase mb-4" style={{ fontSize: 'clamp(48px, 8vw, 120px)', lineHeight: '0.9' }}>
                            Harness Ambition.<br />
                            <span style={{ color: 'var(--color-accent)' }}>Shape the Future.</span>
                        </h1>
                    </div>
                    <div style={{ gridColumn: 'span 6', marginTop: 'var(--spacing-lg)' }}>
                        <p className="text-lg" style={{ fontSize: '24px', lineHeight: '1.4' }}>
                            Immersive design workshops for those who refuse to settle.
                            Master the craft, build your network, and define your legacy.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
