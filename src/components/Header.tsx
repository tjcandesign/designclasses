import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header border-b">
            <div className="container" style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Link to="/" className="logo text-xl font-bold uppercase" style={{ letterSpacing: '-0.05em' }}>
                    Workhorse
                </Link>
                <nav>
                    <ul style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
                        <li><Link to="/" className="uppercase font-medium" style={{ fontSize: 'var(--font-size-sm)' }}>Workshops</Link></li>
                        <li><a href="https://wrkhrs.co" target="_blank" rel="noopener noreferrer" className="uppercase font-medium" style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>Studio</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
