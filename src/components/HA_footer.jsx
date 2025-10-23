import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function HA_footer() {
    return (
        <footer className="bg-[#455A64] text-white py-10 mt-16">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Brand Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-2xl font-bold text-[#D4AF37]">Home Arc Ltd.</h2>
                    <p className="mt-3 text-sm text-gray-300">
                        Providing modern, affordable real estate solutions — at less than half the cost of ready flats in Dhaka.
                    </p>
                </motion.div>

                {/* Quick Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-lg font-semibold mb-3 text-[#40E0D0]">Quick Links</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li><Link to="/" className="hover:text-[#40E0D0]">Home</Link></li>
                        <li><Link to="/projects" className="hover:text-[#40E0D0]">Projects</Link></li>
                        <li><Link to="/ongoing" className="hover:text-[#40E0D0]">Ongoing</Link></li>
                        <li><Link to="/feedback" className="hover:text-[#40E0D0]">Feedback</Link></li>
                        <li><Link to="/contact" className="hover:text-[#40E0D0]">Contact</Link></li>
                    </ul>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <h3 className="text-lg font-semibold mb-3 text-[#40E0D0]">Contact</h3>
                    <ul className="space-y-3 text-gray-300 text-sm">
                        <li className="flex items-center space-x-2">
                            <MapPin size={16} />
                            <span>ECB Chattar, Dhaka Cantonment, Dhaka</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <Phone size={16} />
                            <span>+880 17XX-XXXXXX</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <Mail size={16} />
                            <span>info@homearc.com</span>
                        </li>
                    </ul>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h3 className="text-lg font-semibold mb-3 text-[#40E0D0]">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-[#40E0D0] transition"><Facebook size={20} /></a>
                        <a href="#" className="hover:text-[#40E0D0] transition"><Instagram size={20} /></a>
                        <a href="#" className="hover:text-[#40E0D0] transition"><Linkedin size={20} /></a>
                    </div>
                </motion.div>
            </div>

            {/* Divider + Copyright */}
            <div className="border-t border-gray-600 mt-10 pt-6 text-center text-sm text-gray-400">
                © {new Date().getFullYear()} Home Arc Ltd. | All rights reserved.
            </div>
        </footer>
    );
}
