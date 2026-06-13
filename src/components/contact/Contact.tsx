import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

export default function Contact() {
    return (
        <section id="contact" className="py-24 px-6 md:px-12 bg-white relative overflow-hidden">

            {/* BACKGROUND */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-nav opacity-60 blur-3xl rounded-full" />
                <div className="absolute bottom-10 right-10 w-80 h-80 bg-nav opacity-40 blur-3xl rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* HEADER */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-main">
                        Contact Us
                    </h2>
                    <p className="mt-3 text-main/60 max-w-2xl mx-auto">
                        We're here to help! Contact our team for questions, support, or membership information.
                    </p>
                </div>

                {/* GRID */}
                <div className="grid lg:grid-cols-2 gap-10">

                    {/* LEFT SIDE - INFO */}
                    <div className="space-y-6">

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-nav rounded-2xl p-6 shadow-sm"
                        >
                            <h3 className="text-xl font-bold text-main mb-4">
                                Contact Information
                            </h3>

                            <div className="space-y-5">

                                {/* PHONE */}
                                <div className="flex gap-4">
                                    <FiPhone className="text-brand text-xl mt-1" />
                                    <div>
                                        <p className="font-semibold text-main">Main Office</p>
                                        <p className="text-main/70">+88 01739-926209</p>
                                        <p className="text-sm text-main/60">
                                            Mon–Thu: 9:00 AM – 5:00 PM (Friday Closed)
                                        </p>
                                    </div>
                                </div>

                                {/* EMAIL */}
                                <div className="flex gap-4">
                                    <FiMail className="text-brand text-xl mt-1" />
                                    <div>
                                        <p className="font-semibold text-main">Email Support</p>
                                        <p className="text-main/70">info@jbssltd.com</p>
                                        <p className="text-sm text-main/60">
                                            Response within 24 hours
                                        </p>
                                    </div>
                                </div>

                                {/* ADDRESS */}
                                <div className="flex gap-4">
                                    <FiMapPin className="text-brand text-xl mt-1" />
                                    <div>
                                        <p className="font-semibold text-main">Main Office</p>
                                        <p className="text-main/70">
                                            Jotbazar Bazar, Manda, Naogaon, Bangladesh
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT SIDE - FORM */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white border border-gray-100 rounded-2xl shadow-lg p-8"
                    >
                        <h3 className="text-xl font-bold text-main mb-6">
                            Send Us a Message
                        </h3>

                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="space-y-4"
                        >

                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="p-3 border rounded-xl focus:outline-none focus:border-brand"
                                />
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="p-3 border rounded-xl focus:outline-none focus:border-brand"
                                />
                            </div>

                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full p-3 border rounded-xl focus:outline-none focus:border-brand"
                            />

                            <input
                                type="text"
                                placeholder="Phone"
                                className="w-full p-3 border rounded-xl focus:outline-none focus:border-brand"
                            />

                            <select className="w-full p-3 border rounded-xl focus:outline-none focus:border-brand">
                                <option>Choose a subject</option>
                                <option>Membership</option>
                                <option>Loan Inquiry</option>
                                <option>Support</option>
                                <option>Other</option>
                            </select>

                            <textarea
                                rows={5}
                                placeholder="Message"
                                className="w-full p-3 border rounded-xl focus:outline-none focus:border-brand resize-none"
                            />

                            {/* SUBMIT */}
                            <button
                                type="submit"
                                className="w-full bg-nav text-black py-3 rounded-xl font-semibold hover:opacity-90 transition"
                            >
                                Send Message
                            </button>

                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}