import { motion } from "framer-motion";
import { useLottie } from "lottie-react";
import socialAnim from "../../lottie/socialdevelopment.json";

// ── Stats ─────────────────────────────────────────────────────────────────────
const stats = [
    { value: "1979", label: "Founded" },
    { value: "3,000+", label: "Active Members" },
    { value: "৳27Cr+", label: "Yearly Turnover" },
    { value: "45+", label: "Years of Service" },
];

// ── Lottie illustration ───────────────────────────────────────────────────────
function AboutIllustration() {
    const { View } = useLottie({
        animationData: socialAnim,
        loop: true,
        autoplay: true,
    });

    return <div className="w-full h-full">{View}</div>;
}

// ── Fade-in variants ──────────────────────────────────────────────────────────
import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1], // valid easing
    },
  }),
};

// ── Component ─────────────────────────────────────────────────────────────────
export default function About() {
    return (
        <section id="about" className="py-16 md:py-24 px-4 sm:px-6 md:px-12 overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto">

                {/* HEADER */}
                <div className="text-center mb-14">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block text-xs font-semibold uppercase tracking-widest text-brand mb-3"
                    >
                        Who We Are
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 }}
                        className="text-2xl sm:text-3xl md:text-4xl font-bold text-main"
                    >
                        About <span className="text-brand">Shomobai</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mt-3 text-main/70 max-w-2xl mx-auto text-sm leading-relaxed"
                    >
                        A cooperative society dedicated to empowering communities through transparent financial services, sustainable development, and collective growth since 1979.
                    </motion.p>
                </div>

                {/* TWO COLUMN */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">

                    {/* LEFT */}
                    <div className="space-y-6">

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            {/* BADGE */}
                            <span className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full bg-brand-soft text-brand mb-4">
                                <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                                Est. 1979
                            </span>

                            <h3 className="text-xl sm:text-2xl font-bold text-main leading-snug">
                                Rooted in Community,<br />
                                <span className="text-brand">Built for the Future</span>
                            </h3>

                            <p className="mt-4 text-main/70 leading-relaxed">
                                Shomobai Cooperative Society was established with a singular vision — to create a financial ecosystem where every member can thrive. Over 45 years, we have grown into a trusted institution serving thousands of members.
                            </p>

                            <p className="mt-3 text-main/70 leading-relaxed">
                                Our cooperative model ensures fair value distribution, enabling access to savings, loans, and development programs that improve real lives.
                            </p>
                        </motion.div>

                        {/* DIVIDER */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="origin-left h-px bg-gradient-to-r from-brand/30 to-transparent"
                        />

                        {/* TAGS */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-wrap gap-3"
                        >
                            {[
                                "Savings & Deposits",
                                "Business Loans",
                                "Social Programs",
                                "Investment Advisory",
                            ].map((tag) => (
                                <span
                                    key={tag}
                                    className="text-xs font-medium px-3 py-1.5 rounded-full border border-brand/20 bg-white text-brand shadow-sm"
                                >
                                    {tag}
                                </span>
                            ))}
                        </motion.div>
                    </div>

                    {/* RIGHT LOTTIE */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex justify-center"
                    >
                        <div className="relative w-full max-w-sm">

                            <div className="absolute inset-0 rounded-3xl bg-brand-soft blur-2xl scale-110" />

                            <div className="relative rounded-3xl overflow-hidden p-4">
                                <AboutIllustration />
                            </div>
                        </div>
                    </motion.div>

                </div>

                {/* STATS */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-20">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            custom={i}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="rounded-2xl bg-white border border-gray-100 shadow-sm p-5 text-center"
                        >
                            <div className="text-2xl sm:text-3xl font-black text-brand">
                                {stat.value}
                            </div>
                            <div className="mt-1 text-xs sm:text-sm text-main/70 font-medium">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}