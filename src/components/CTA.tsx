import React, { useState } from 'react';

const CTA: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for your interest! We will be in touch shortly.');
        setFormData({ name: '', email: '', phone: '' });
    };

    return (
        <section className="py-24 bg-[#FFC107] text-black">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-5xl font-bold mb-6 tracking-tight">READY TO START?</h2>
                        <p className="text-xl font-medium mb-8 max-w-md">
                            Spaces are limited for our upcoming workshops. Register now to secure your spot or join the waitlist for future sessions.
                        </p>

                        <div className="max-w-4xl mx-auto bg-[#111111] border border-gray-800 p-8 md:p-12">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Start?</h2>
                                <p className="text-gray-400">Secure your spot in an upcoming workshop.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-[#FFC107] mb-2" style={{ fontFamily: "'DM Mono', monospace" }}>1</div>
                                    <h3 className="text-white font-medium mb-2" style={{ fontFamily: "'DM Mono', monospace" }}>Select your workshop</h3>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-[#FFC107] mb-2" style={{ fontFamily: "'DM Mono', monospace" }}>2</div>
                                    <h3 className="text-white font-medium mb-2" style={{ fontFamily: "'DM Mono', monospace" }}>Submit your details</h3>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-[#FFC107] mb-2" style={{ fontFamily: "'DM Mono', monospace" }}>3</div>
                                    <h3 className="text-white font-medium mb-2" style={{ fontFamily: "'DM Mono', monospace" }}>We'll confirm your enrollment</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-black p-10 shadow-2xl">
                        <h3 className="text-2xl font-bold text-white mb-6">Express Interest</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-gray-400 text-sm font-bold mb-2 uppercase tracking-wider">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-[#1a1a1a] border border-gray-700 text-white p-4 focus:outline-none focus:border-[#FFC107] transition-colors"
                                    placeholder="Jane Doe"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-400 text-sm font-bold mb-2 uppercase tracking-wider">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-[#1a1a1a] border border-gray-700 text-white p-4 focus:outline-none focus:border-[#FFC107] transition-colors"
                                    placeholder="jane@example.com"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-gray-400 text-sm font-bold mb-2 uppercase tracking-wider">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full bg-[#1a1a1a] border border-gray-700 text-white p-4 focus:outline-none focus:border-[#FFC107] transition-colors"
                                    placeholder="(555) 123-4567"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-[#FFC107] text-black font-bold py-4 hover:bg-white transition-colors uppercase tracking-widest text-sm"
                            >
                                Submit Registration
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
