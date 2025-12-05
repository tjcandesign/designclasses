import React, { useState } from 'react';

const CTA: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submittedData, setSubmittedData] = useState({
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

    const encode = (data: any) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            // Submit to Netlify Forms
            await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({ "form-name": "contact", ...formData })
            });

            // Show success modal
            console.log('Form submitted:', formData);
            setSubmittedData(formData);
            setIsSubmitted(true);
            setFormData({ name: '', email: '', phone: '' });

        } catch (error) {
            console.error('Form submission error:', error);
            alert('There was an error submitting the form. Please try again.');
        }
    };

    const closeSuccessModal = () => {
        setIsSubmitted(false);
    };

    return (
        <section className="py-24 bg-[#FFC107] text-black relative">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="max-w-xl">
                            <div className="mb-12 text-left">
                                <h2 className="text-5xl font-bold mb-4 text-black">Ready to Start?</h2>
                                <p className="text-black text-xl" style={{ fontFamily: "'DM Mono', monospace" }}>Secure your spot in an upcoming workshop.</p>
                            </div>

                            <div className="flex flex-col space-y-8">
                                <div className="flex items-center gap-6">
                                    <div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center text-xl font-bold text-black shrink-0" style={{ fontFamily: "'DM Mono', monospace" }}>1</div>
                                    <h3 className="text-xl text-black font-bold">Select your workshop</h3>
                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center text-xl font-bold text-black shrink-0" style={{ fontFamily: "'DM Mono', monospace" }}>2</div>
                                    <h3 className="text-xl text-black font-bold">Submit your details</h3>
                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center text-xl font-bold text-black shrink-0" style={{ fontFamily: "'DM Mono', monospace" }}>3</div>
                                    <h3 className="text-xl text-black font-bold">We'll confirm your enrollment</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#FFC107] p-10 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] relative z-20 rounded-lg">
                        <h3 className="text-2xl font-bold text-black mb-6">Sign up to receive more information via Email</h3>
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-6"
                            name="contact"
                            method="post"
                            data-netlify="true"
                            data-netlify-honeypot="bot-field"
                        >
                            <input type="hidden" name="form-name" value="contact" />
                            <input type="hidden" name="bot-field" />

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
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Success Modal */}
            {isSubmitted && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={closeSuccessModal}></div>
                    <div className="relative bg-white p-8 md:p-12 max-w-lg w-full rounded-lg shadow-2xl text-center">
                        <button onClick={closeSuccessModal} className="absolute top-4 right-4 text-gray-400 hover:text-black">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>

                        <h3 className="text-2xl font-bold text-black mb-4">Information Received!</h3>
                        <p className="text-gray-600 mb-6">
                            Thank you for your interest. We have captured the following details and will be in touch shortly:
                        </p>

                        <div className="bg-gray-50 p-6 rounded-lg text-left mb-8 border border-gray-200">
                            <div className="mb-3">
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">Name</span>
                                <span className="text-lg font-medium text-black" style={{ fontFamily: "'DM Mono', monospace" }}>{submittedData.name}</span>
                            </div>
                            <div className="mb-3">
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">Email</span>
                                <span className="text-lg font-medium text-black" style={{ fontFamily: "'DM Mono', monospace" }}>{submittedData.email}</span>
                            </div>
                            {submittedData.phone && (
                                <div>
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">Phone</span>
                                    <span className="text-lg font-medium text-black" style={{ fontFamily: "'DM Mono', monospace" }}>{submittedData.phone}</span>
                                </div>
                            )}
                        </div>

                        <button
                            onClick={closeSuccessModal}
                            className="w-full bg-black text-[#FFC107] font-bold py-3 hover:bg-gray-800 transition-colors uppercase tracking-widest text-sm rounded-lg"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default CTA;
