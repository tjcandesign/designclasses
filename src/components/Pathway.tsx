import React from 'react';

const Pathway: React.FC = () => {
    return (
        <section className="py-24 bg-[#111111] text-white border-t border-gray-800">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                    <div className="md:col-span-5">
                        <div className="bg-[#FFC107] p-12 text-black h-full flex flex-col justify-center">
                            <h3 className="text-3xl font-bold mb-6 uppercase tracking-tight">Exclusive Pathway</h3>
                            <p className="text-lg font-medium mb-8">
                                Top-performing students may be invited to join the Workhorse Studio Internship Program or granted individual studio access.
                            </p>
                            <div className="w-16 h-1 bg-black"></div>
                        </div>
                    </div>
                    <div className="md:col-span-7">
                        <h2 className="text-4xl font-bold mb-8">BEYOND THE CLASSROOM</h2>
                        <div className="space-y-8">
                            <div>
                                <h4 className="text-xl font-bold text-[#FFC107] mb-2">Internship Program</h4>
                                <p className="text-gray-400">
                                    A selective 3-month program working directly on client projects under the mentorship of senior designers.
                                    Gain real agency experience and build a professional network.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-[#FFC107] mb-2">Studio Access</h4>
                                <p className="text-gray-400">
                                    Graduates who demonstrate responsibility and skill may apply for independent access to our studio facilities,
                                    including high-end workstations, print lab, and meeting spaces.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pathway;
