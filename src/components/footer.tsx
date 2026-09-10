import React from 'react';
import footerLogo from '../assets/logo-footer.png'; 

const Footer = () => {
    return (
        <footer className="bg-[#06091A] text-white pt-20 pb-10">
            
            <div className="container mx-auto px-4 pt-30">
                
                {/* Footer Logo */}
                <div className="flex justify-center mb-12">
                    <img src={footerLogo} alt="Footer Logo" className="w-32 h-auto" />
                </div>

                {/* Footer Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    
                    {/* About Us */}
                    <div className="space-y-3">
                        <h3 className="text-lg font-semibold text-white">About Us</h3>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                            We are a passionate team dedicated to providing the best fantasy cricket experience to our users.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-3">
                        <h3 className="text-lg font-semibold text-white">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-yellow-400 transition">Home</a></li>
                            <li><a href="#" className="hover:text-yellow-400 transition">Services</a></li>
                            <li><a href="#" className="hover:text-yellow-400 transition">About</a></li>
                            <li><a href="#" className="hover:text-yellow-400 transition">Contact</a></li>
                        </ul>
                    </div>

                    {/* Subscribe Section */}
                    <div className="space-y-3">
                        <h3 className="text-lg font-semibold text-white">Subscribe</h3>
                        <p className="text-gray-400 text-sm">
                            Subscribe to our newsletter for the latest updates and player insights.
                        </p>
                        
                        {/* Input & Button Group */}
                        <div className="flex flex-col sm:flex-row gap-2 mt-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-4 py-2.5 rounded-xl bg-white text-gray-800 text-sm focus:outline-none w-full"
                            />
                            <button className="bg-gradient-to-r from-amber-400 to-pink-500 text-black font-semibold px-5 py-2.5 rounded-xl text-sm hover:opacity-90 transition cursor-pointer whitespace-nowrap">
                                Subscribe
                            </button>
                        </div>
                    </div>

                </div>

                {/* Bottom Copyright */}
                <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-xs">
                    <p>©{new Date().getFullYear()} BPL Dream 11. All Rights Reserved.</p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;