'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Register = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submittedData, setSubmittedData] = useState({ name: '', email: '', phone: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const encode = (data: any) =>
        Object.keys(data)
            .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
            .join('&');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: encode({ 'form-name': 'register', ...formData })
            });
            setSubmittedData(formData);
            setIsSubmitted(true);
            setFormData({ name: '', email: '', phone: '' });
        } catch (err) {
            console.error(err);
            alert('Submission failed, please try again.');
        }
    };

    const closeSuccessModal = () => setIsSubmitted(false);

    return (
        <section className="min-h-screen bg-[#FFC107] text-black flex items-center justify-center py-24">
            <div className="max-w-xl w-full bg-white p-10 rounded-lg shadow-xl">
                <h2 className="text-4xl font-bold mb-6 text-center">Register for a Workshop</h2>
                <form
                    name="register"
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                >
                    <input type="hidden" name="form-name" value="register" />
                    <input type="hidden" name="bot-field" />
                    <div>
                        <label htmlFor="name" className="block font-bold mb-2 uppercase tracking-wider">
                            Full Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Jane Doe"
                            className="w-full p-3 border rounded bg-[#FFF8E1] focus:outline-none"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block font-bold mb-2 uppercase tracking-wider">
                            Email Address
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="jane@example.com"
                            className="w-full p-3 border rounded bg-[#FFF8E1] focus:outline-none"
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block font-bold mb-2 uppercase tracking-wider">
                            Phone Number
                        </label>
                        <input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="(555) 123‑4567"
                            className="w-full p-3 border rounded bg-[#FFF8E1] focus:outline-none"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-black text-[#FFC107] font-bold py-3 rounded hover:bg-gray-900 transition"
                    >
                        Register
                    </button>
                </form>
                {isSubmitted && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm"
                        onClick={closeSuccessModal}
                    >
                        <motion.div
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            className="bg-white p-8 rounded-lg shadow-xl max-w-sm w-full text-center"
                        >
                            <h3 className="text-2xl font-bold mb-4">Thanks, {submittedData.name}!</h3>
                            <p className="mb-4">We’ve received your registration. We’ll be in touch soon.</p>
                            <button
                                onClick={closeSuccessModal}
                                className="mt-4 bg-black text-[#FFC107] py-2 px-6 rounded hover:bg-gray-900 transition"
                            >
                                Close
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Register;
