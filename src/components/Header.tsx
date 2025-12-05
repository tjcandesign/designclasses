import { Link } from 'react-router-dom';
import logo from '../assets/workhorse-logo.png';

const Header = () => {
    return (
        <header className="header border-b border-gray-800 bg-black">
            <div className="container mx-auto px-6 py-6 flex justify-between items-center">
                <div className="w-20 md:w-24">
                    <Link to="/">
                        <img src={logo} alt="Workhorse" className="w-full h-auto" />
                    </Link>
                </div>

                <nav>
                    <ul className="flex gap-6">
                        <li>
                            <Link to="/course" className="uppercase font-medium text-base tracking-widest text-white border-b-2 border-[#FFC107] pb-1 hover:text-[#FFC107] transition-colors" style={{ fontFamily: "'DM Mono', monospace" }}>
                                Workshops
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
