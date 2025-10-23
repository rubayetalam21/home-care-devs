import { motion } from "framer-motion";

export default function CustomerFeedback() {
    const feedbacks = [
        {
            id: 1,
            name: "Engr. Rakib Hasan",
            role: "Army Officer",
            image: "/images/client1.jpg",
            rating: 5,
            feedback:
                "Home Arc delivered exactly what they promised. Excellent design quality and timely updates. Highly recommended!",
        },
        {
            id: 2,
            name: "Dr. Mahbuba Rahman",
            role: "Doctor, CMH",
            image: "/images/client2.jpg",
            rating: 4,
            feedback:
                "Very professional and transparent service. The project quality and materials used exceeded expectations.",
        },
        {
            id: 3,
            name: "Engr. Abdullah Al Mamun",
            role: "Civil Engineer",
            image: "/images/client3.jpg",
            rating: 5,
            feedback:
                "Their costing model and communication made the entire process smooth. I’d definitely invest again with Home Arc.",
        },
    ];

    return (
        <div className="max-w-6xl mx-auto px-4 py-20">
            {/* Page Title */}
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold text-center text-[#D4AF37] mb-12"
            >
                Customer Feedback
            </motion.h1>

            {/* Feedback Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {feedbacks.map((f, i) => (
                    <motion.div
                        key={f.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2 }}
                        whileHover={{ scale: 1.05 }}
                        className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition"
                    >
                        <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#40E0D0]">
                            <img
                                src={f.image}
                                alt={f.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h3 className="text-lg font-semibold text-[#455A64]">{f.name}</h3>
                        <p className="text-sm text-gray-500">{f.role}</p>

                        {/* Rating */}
                        <div className="flex justify-center mt-2 mb-3">
                            {Array.from({ length: f.rating }).map((_, index) => (
                                <span key={index} className="text-[#FFD700] text-lg">★</span>
                            ))}
                        </div>

                        <p className="text-gray-700 text-sm italic">{f.feedback}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
