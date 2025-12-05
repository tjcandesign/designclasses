const Footer = () => {
    return (
        <footer className="footer border-t border-gray-800 py-8 bg-[#111111]">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-sm font-bold uppercase mb-2 text-white">Workhorse Studio</h3>
                        <p className="text-gray-400 text-xs max-w-md mb-3">
                            Hands-on design education in a functioning studio environment.
                        </p>
                        <p className="text-gray-400 text-[10px]">
                            Reclaiming human-centered design for the sake of humanity.
                        </p>
                    </div>
                    <div>
                        <h4 className="uppercase font-bold mb-2 text-[10px] text-white tracking-wider">Contact</h4>
                        <p className="text-gray-400 text-xs mb-1">hello@wrkhrs.co</p>
                        <p className="text-gray-400 text-[10px]">Washington, DC</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
