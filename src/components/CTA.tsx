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
                        <div className="max-w-xl">
                            <div className="mb-12 text-left">
                                <h2 className="text-5xl font-bold mb-4 text-black">READY TO START?</h2>
                                <p className="text-black text-xl" style={{ fontFamily: "'DM Mono', monospace" }}>Secure your spot in an upcoming workshop.</p>
                            </div>

                            <div className="flex flex-col space-y-8">
                                <div className="flex items-center gap-6">
                                    <div className="w-16 h-16 rounded-full border-2 border-black flex items-center justify-center text-2xl font-bold text-black shrink-0">1</div>
                                    <h3 className="text-xl text-black font-bold">Select your workshop</h3>
                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="w-16 h-16 rounded-full border-2 border-black flex items-center justify-center text-2xl font-bold text-black shrink-0">2</div>
                                    <h3 className="text-xl text-black font-bold">Submit your details</h3>
                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="w-16 h-16 rounded-full border-2 border-black flex items-center justify-center text-2xl font-bold text-black shrink-0">3</div>
                                    <h3 className="text-xl text-black font-bold">We'll confirm your enrollment</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#FFC107] p-10 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] relative z-20 rounded-lg">
                        <h3 className="text-2xl font-bold text-black mb-6">Sign up for more information</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-black text-sm font-bold mb-2 uppercase tracking-wider">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-[#FFF8E1] border border-black text-black p-4 focus:outline-none focus:border-black transition-colors placeholder-gray-500 rounded-lg"
                                    style={{ fontFamily: "'DM Mono', monospace" }}
                                    placeholder="Jane Doe"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-black text-sm font-bold mb-2 uppercase tracking-wider">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-[#FFF8E1] border border-black text-black p-4 focus:outline-none focus:border-black transition-colors placeholder-gray-500 rounded-lg"
                                    style={{ fontFamily: "'DM Mono', monospace" }}
                                    placeholder="jane@example.com"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-black text-sm font-bold mb-2 uppercase tracking-wider">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full bg-[#FFF8E1] border border-black text-black p-4 focus:outline-none focus:border-black transition-colors placeholder-gray-500 rounded-lg"
                                    style={{ fontFamily: "'DM Mono', monospace" }}
                                    placeholder="(555) 123-4567"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-black text-[#FFC107] font-bold py-4 hover:bg-gray-900 transition-colors uppercase tracking-widest text-sm rounded-lg"
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
