import { motion } from "framer-motion";

const notices = [
    {
        type: "Important",
        title: "Annual General Meeting 2026",
        date: "15 July 2026",
        desc: "All members are requested to attend the AGM at the main office auditorium.",
        pinned: true,
    },
    {
        type: "Update",
        title: "Loan Application Process Improved",
        date: "10 July 2026",
        desc: "We’ve simplified the loan approval system for faster processing.",
    },
    {
        type: "Notice",
        title: "Office Holiday Announcement",
        date: "05 July 2026",
        desc: "Office will remain closed due to national holiday.",
    },
    {
        type: "Notice",
        title: "New Savings Scheme Launched",
        date: "01 July 2026",
        desc: "Higher interest savings plan now available for members.",
    },
    {
        type: "Update",
        title: "Branch Expansion",
        date: "28 June 2026",
        desc: "New branch opening in your district soon.",
    },
];

export default function Notice() {
    return (
        <section id="notice" className="py-20 px-6 md:px-12 bg-white">
            <div className="max-w-5xl mx-auto">

                {/* HEADER */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-main">
                        Latest <span className="text-brand">Notices</span>
                    </h2>
                    <p className="mt-3 text-main/70 text-sm md:text-base">
                        Important updates for members and community
                    </p>
                </div>

                {/* SCROLL BOX */}
                <div className="relative max-h-[420px] overflow-y-auto pr-3 space-y-8
                        scrollbar-thin scrollbar-thumb-brand/40 scrollbar-track-transparent">

                    {notices.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                            className={`relative pl-5 border-l-2 ${item.pinned ? "border-brand" : "border-brand/20"
                                }`}
                        >

                            {/* DOT */}
                            <div
                                className={`absolute -left-[7px] top-2 w-3.5 h-3.5 rounded-full border-2 border-white
                ${item.pinned ? "bg-brand" : "bg-brand/40"}`}
                            />

                            {/* CARD */}
                            <div
                                className={`p-5 rounded-2xl shadow-sm border transition hover:shadow-md
                ${item.pinned
                                        ? "bg-brand/5 border-brand/30"
                                        : "bg-white border-gray-100"
                                    }`}
                            >

                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-xs font-semibold px-2 py-1 rounded-full bg-brand/10 text-brand">
                                        {item.type}
                                    </span>

                                    <span className="text-xs text-main/60">
                                        {item.date}
                                    </span>
                                </div>

                                <h3 className="text-lg font-semibold text-main">
                                    {item.title}
                                </h3>

                                <p className="mt-2 text-sm text-main/70">
                                    {item.desc}
                                </p>

                                <button className="mt-4 text-sm font-medium text-brand relative group">
                                    View Details
                                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-brand transition-all group-hover:w-full"></span>
                                </button>

                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}