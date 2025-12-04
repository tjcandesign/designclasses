const Footer = () => {
    return (
        <footer className="footer border-t border-gray-800 py-16 bg-[#111111]">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-bold uppercase mb-4 text-white">Workhorse Studio</h3>
                        <p className="text-gray-400 max-w-md mb-6">
                            Hands-on design education in a functioning studio environment.
                        </p>
                        <p className="text-gray-400 text-sm">
                            Reclaiming human-centered design for the sake of humanity.
                        </p>
                    </div>
                    <div>
                        <h4 className="uppercase font-bold mb-4 text-sm text-white tracking-wider">Contact</h4>
                        <p className="text-gray-400 mb-2">hello@wrkhrs.co</p>
                        <p className="text-gray-400 text-sm">Washington, DC</p>
                    </div>
                </div>
                <div className="mt-12 pt-6 border-t border-gray-800 flex justify-between text-sm text-gray-400">
                    <span>© {new Date().getFullYear()} Workhorse Studio</span>
                    <span>Long Live Design</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
