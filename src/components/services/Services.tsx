import { motion } from "framer-motion";
import { useLottie } from "lottie-react";

// Import all 4 matching animation files
import savingsAnim from "../../lottie/savings service.json";
import loanAnim from "../../lottie/businessloan.json";
import socialAnim from "../../lottie/socialdevelopment.json";
import investAnim from "../../lottie/businessinvestment.json";

// ── Per-card Lottie wrapper ──────────────────────────────────────────────────
function CardLottie({ animationData }: { animationData: object }) {
    const { View } = useLottie({
        animationData,
        loop: true,
        autoplay: true,
    });
    return <div className="w-full h-full">{View}</div>;
}

// ── Service data ─────────────────────────────────────────────────────────────
const services = [
    {
        id: "01",
        title: "Savings Service",
        desc: "Secure and flexible savings solutions to help you build wealth and reach your financial goals.",
        animation: savingsAnim,
        accentFrom: "#92e3a9",
        accentTo: "#dff7e5",
        features: [
            "Competitive interest rates",
            "Multiple account types",
            "Secure online access",
            "24/7 customer support",
        ],
    },
    {
        id: "02",
        title: "Business Loans",
        desc: "Tailored financing to support your business growth, expansion, and operational needs.",
        animation: loanAnim,
        accentFrom: "#93c5fd",
        accentTo: "#dbeafe",
        features: [
            "Flexible repayment terms",
            "Quick approval process",
            "Competitive interest rates",
            "Business advisory support",
        ],
    },
    {
        id: "03",
        title: "Social Development",
        desc: "Community-focused programs that promote social welfare and sustainable development.",
        animation: socialAnim,
        accentFrom: "#fcd34d",
        accentTo: "#fef9c3",
        features: [
            "Community infrastructure",
            "Education programs",
            "Healthcare initiatives",
            "Environmental projects",
        ],
    },
    {
        id: "04",
        title: "Business Investment",
        desc: "Strategic investment opportunities and financial planning for long-term business growth.",
        animation: investAnim,
        accentFrom: "#f9a8d4",
        accentTo: "#fce7f3",
        features: [
            "Portfolio management",
            "Risk assessment",
            "Growth strategies",
            "Market analysis",
        ],
    },
];

// ── Card component ────────────────────────────────────────────────────────────
function ServiceCard({
    service,
    index,
}: {
    service: (typeof services)[0];
    index: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
            className="group relative rounded-2xl overflow-hidden flex flex-col bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full"
        >
            {/* ── ANIMATION PANEL ── */}
            <div
                className="relative flex items-center justify-center h-40 sm:h-44 md:h-48 overflow-hidden"
                style={{
                    background: `linear-gradient(135deg, ${service.accentFrom}55, ${service.accentTo})`,
                }}
            >
                {/* Faint big number watermark */}
                <span className="absolute right-3 top-1 text-5xl sm:text-6xl font-black opacity-10 select-none text-text-main">
                    {service.id}
                </span>

                {/* Lottie animation — responsive size */}
                <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36">
                    <CardLottie animationData={service.animation as object} />
                </div>
            </div>

            {/* ── CARD BODY ── */}
            <div className="flex flex-col flex-1 p-4 sm:p-5 gap-3">

                {/* Title */}
                <h3 className="text-sm sm:text-base font-bold text-text-main">{service.title}</h3>

                {/* Description */}
                <p className="text-sm text-text-main/70 leading-relaxed">{service.desc}</p>

                {/* Feature list */}
                <ul className="mt-1 space-y-1.5 flex-1">
                    {service.features.map((f, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-text-main/75">
                            <span
                                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                style={{ background: service.accentFrom }}
                            />
                            {f}
                        </li>
                    ))}
                </ul>

                {/* CTA button */}
                <button
                    className="mt-4 w-full sm:w-auto relative overflow-hidden rounded-xl px-4 py-2 text-sm font-semibold border-2 transition-all duration-300 group/btn"
                    style={{
                        borderColor: service.accentFrom,
                        color: service.accentFrom,
                    }}
                    onMouseEnter={e => {
                        (e.currentTarget.querySelector('.btn-text') as HTMLElement).style.color = '#fff';
                    }}
                    onMouseLeave={e => {
                        (e.currentTarget.querySelector('.btn-text') as HTMLElement).style.color = service.accentFrom;
                    }}
                >
                    {/* left-to-right fill */}
                    <span
                        className="absolute inset-0 origin-left scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 ease-out rounded-xl"
                        style={{ background: service.accentFrom }}
                    />
                    <span
                        className="btn-text relative transition-colors duration-300"
                        style={{ color: service.accentFrom }}
                    >
                        Learn More →
                    </span>
                </button>

            </div>
        </motion.div>
    );
}

// ── Section ───────────────────────────────────────────────────────────────────
export default function Services() {
    return (
        <section id="services" className="py-12 md:py-20 px-4 sm:px-6 md:px-12">

            {/* HEADER */}
            <div className="max-w-7xl mx-auto text-center mb-14">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-block text-xs font-semibold uppercase tracking-widest text-text-main/50 mb-3"
                >
                    What We Offer
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 }}
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-main"
                >
                    Our Services
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="mt-3 text-text-main/60 max-w-xl mx-auto text-sm"
                >
                    Comprehensive financial and development services for our cooperative members
                </motion.p>
            </div>

            {/* CARDS GRID */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
                {services.map((service, i) => (
                    <ServiceCard key={service.id} service={service} index={i} />
                ))}
            </div>

        </section>
    );
}