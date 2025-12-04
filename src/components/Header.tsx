import { Link } from 'react-router-dom';
import logo from '../assets/workhorse-logo.png';

const Header = () => {
    return (
        <header className="header border-b border-gray-800 bg-black">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <Link to="/course" className="logo flex items-center">
                    <img src={logo} alt="Workhorse" className="h-12" />
                </Link>
                <nav>
                    <ul className="flex gap-6">
                        <li>
                            <Link to="/course" className="uppercase font-medium text-sm text-white hover:text-[#FFC107] transition-colors" style={{ fontFamily: "'DM Mono', monospace" }}>
                                Workshops
                            </Link>
                        </li>
                        <li>
                            <a
                                href="https://wrkhrs.co"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="uppercase font-medium text-sm text-gray-400 hover:text-white transition-colors"
                                style={{ fontFamily: "'DM Mono', monospace" }}
                            >
                                Studio
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
