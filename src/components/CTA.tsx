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
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-5xl font-bold mb-4 text-white">READY TO START?</h2>
                                <p className="text-gray-400">Secure your spot in an upcoming workshop.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                                <div className="text-center flex flex-col items-center">
                                    <div className="w-16 h-16 rounded-full border-2 border-[#FFC107] flex items-center justify-center text-2xl font-bold text-[#FFC107] mb-4">1</div>
                                    <h3 className="text-xl text-white font-bold mb-2">Select your workshop</h3>
                                </div>
                                <div className="text-center flex flex-col items-center">
                                    <div className="w-16 h-16 rounded-full border-2 border-[#FFC107] flex items-center justify-center text-2xl font-bold text-[#FFC107] mb-4">2</div>
                                    <h3 className="text-xl text-white font-bold mb-2">Submit your details</h3>
                                </div>
                                <div className="text-center flex flex-col items-center">
                                    <div className="w-16 h-16 rounded-full border-2 border-[#FFC107] flex items-center justify-center text-2xl font-bold text-[#FFC107] mb-4">3</div>
                                    <h3 className="text-xl text-white font-bold mb-2">We'll confirm your enrollment</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#e6ac00] p-10 shadow-2xl relative z-20 border-2 border-black">
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
                                    className="w-full bg-white border border-gray-300 text-black p-4 focus:outline-none focus:border-black transition-colors"
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
                                    className="w-full bg-white border border-gray-300 text-black p-4 focus:outline-none focus:border-black transition-colors"
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
                                    className="w-full bg-white border border-gray-300 text-black p-4 focus:outline-none focus:border-black transition-colors"
                                    placeholder="(555) 123-4567"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-black text-[#FFC107] font-bold py-4 hover:bg-gray-900 transition-colors uppercase tracking-widest text-sm"
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
