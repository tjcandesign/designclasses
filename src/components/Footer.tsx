const Footer = () => {
    return (
        <footer className="footer border-t py-lg" style={{ marginTop: 'var(--spacing-2xl)' }}>
            <div className="container">
                <div className="grid">
                    <div style={{ gridColumn: 'span 6' }}>
                        <h3 className="text-xl font-bold uppercase mb-4">Workhorse</h3>
                        <p style={{ color: 'var(--color-text-muted)', maxWidth: '300px' }}>
                            Reclaiming human-centered design for the sake of humanity.
                        </p>
                    </div>
                    <div style={{ gridColumn: 'span 3' }}>
                        <h4 className="uppercase font-bold mb-4" style={{ fontSize: 'var(--font-size-sm)' }}>Social</h4>
                        <ul style={{ color: 'var(--color-text-muted)' }}>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">LinkedIn</a></li>
                            <li><a href="#">Twitter</a></li>
                        </ul>
                    </div>
                    <div style={{ gridColumn: 'span 3' }}>
                        <h4 className="uppercase font-bold mb-4" style={{ fontSize: 'var(--font-size-sm)' }}>Contact</h4>
                        <p style={{ color: 'var(--color-text-muted)' }}>hello@wrkhrs.co</p>
                    </div>
                </div>
                <div style={{ marginTop: 'var(--spacing-xl)', paddingTop: 'var(--spacing-md)', borderTop: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
                    <span>© {new Date().getFullYear()} Workhorse Studio</span>
                    <span>Long Live Design</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
