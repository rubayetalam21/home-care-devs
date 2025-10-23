import { useState } from "react";
import { motion } from "framer-motion";

export default function ClientFeedbackForm() {
    const [formData, setFormData] = useState({
        name: "",
        role: "",
        rating: 0,
        feedback: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Integrate with backend / Firebase / API later
        console.log("Feedback Submitted:", formData);
        setSubmitted(true);
    };

    return (
        <div className="max-w-lg mx-auto px-4 py-20">
            {/* Page Title */}
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold text-center text-[#D4AF37] mb-10"
            >
                Client Feedback Form
            </motion.h1>

            {!submitted ? (
                <motion.form
                    onSubmit={handleSubmit}
                    className="bg-white shadow-lg rounded-2xl p-8 space-y-6"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <div>
                        <label className="block text-gray-600 font-semibold mb-2">
                            Full Name
                        </label>
                        <input
                            type="text"
                            required
                            className="input input-bordered w-full"
                            value={formData.name}
                            onChange={(e) =>
                                setFormData({ ...formData, name: e.target.value })
                            }
                        />
                    </div>

                    <div>
                        <label className="block text-gray-600 font-semibold mb-2">
                            Profession / Role
                        </label>
                        <input
                            type="text"
                            required
                            className="input input-bordered w-full"
                            value={formData.role}
                            onChange={(e) =>
                                setFormData({ ...formData, role: e.target.value })
                            }
                        />
                    </div>

                    <div>
                        <label className="block text-gray-600 font-semibold mb-2">
                            Rating
                        </label>
                        <div className="flex gap-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <span
                                    key={star}
                                    onClick={() => setFormData({ ...formData, rating: star })}
                                    className={`cursor-pointer text-2xl ${star <= formData.rating ? "text-[#FFD700]" : "text-gray-300"
                                        }`}
                                >
                                    ★
                                </span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-600 font-semibold mb-2">
                            Feedback Message
                        </label>
                        <textarea
                            required
                            rows="4"
                            className="textarea textarea-bordered w-full"
                            value={formData.feedback}
                            onChange={(e) =>
                                setFormData({ ...formData, feedback: e.target.value })
                            }
                        ></textarea>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="w-full py-2 bg-[#40E0D0] text-white rounded-lg hover:bg-[#2fb2a7] transition"
                    >
                        Submit Feedback
                    </motion.button>
                </motion.form>
            ) : (
                <motion.div
                    className="text-center bg-white rounded-2xl shadow-md p-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <h2 className="text-2xl font-semibold text-[#40E0D0] mb-2">
                        Thank you for your feedback!
                    </h2>
                    <p className="text-gray-600">
                        Your valuable feedback helps Home Arc improve our services.
                    </p>
                </motion.div>
            )}
        </div>
    );
}
