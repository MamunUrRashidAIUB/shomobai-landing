import { FiFacebook, FiYoutube, FiMail, FiPhone } from "react-icons/fi";

export default function Footer() {
    return (
        <footer className="bg-nav text-main pt-16 pb-8 px-6 md:px-12">

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

                {/* LEFT BRAND */}
                <div>
                    <h2 className="text-2xl font-bold text-brand">
                        Shomobai
                    </h2>

                    <p className="mt-4 text-main/70 text-sm leading-relaxed">
                        A trusted cooperative society empowering members through
                        savings, loans, and sustainable development since 1979.
                    </p>

                    <div className="flex gap-4 mt-6">
                        <a href="#" className="p-2 bg-white rounded-full hover:scale-110 transition">
                            <FiFacebook className="text-brand" />
                        </a>
                        <a href="#" className="p-2 bg-white rounded-full hover:scale-110 transition">
                            <FiYoutube className="text-brand" />
                        </a>
                    </div>
                </div>

                {/* QUICK LINKS */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">
                        Quick Links
                    </h3>

                    <ul className="space-y-3 text-sm text-main/70">
                        <li><a href="#home" className="hover:text-brand">Home</a></li>
                        <li><a href="#services" className="hover:text-brand">Services</a></li>
                        <li><a href="#about" className="hover:text-brand">About</a></li>
                        <li><a href="#notice" className="hover:text-brand">Notice</a></li>
                        <li><a href="#contact" className="hover:text-brand">Contact</a></li>
                    </ul>
                </div>

                {/* CONTACT */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">
                        Contact Info
                    </h3>

                    <div className="space-y-3 text-sm text-main/70">

                        <div className="flex items-center gap-2">
                            <FiPhone className="text-brand" />
                            <span>+880 1234 567890</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <FiMail className="text-brand" />
                            <span>info@shomobai.com</span>
                        </div>

                        <p className="mt-4">
                            Dhaka, Bangladesh
                        </p>
                    </div>
                </div>

            </div>

            {/* BOTTOM LINE */}
            <div className="mt-12 border-t border-black/10 pt-6 text-center text-sm text-main/60">
                © {new Date().getFullYear()} Shomobai. All rights reserved.
            </div>

        </footer>
    );
}