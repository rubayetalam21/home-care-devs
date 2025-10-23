import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 1,
            name: "Swopnonir Project",
            location: "ECB Chattar, Dhaka Cantonment",
            type: "B+G+9 Residential Building",
            status: "Ongoing",
            image: "/images/project1.jpg",
            details:
                "A premium 10-storied residential complex offering modern flats designed for engineers, doctors, and army officers. The project includes a rooftop community space, underground parking, and 24/7 security.",
            size: "2.87 Katha",
            flats: "36 Units",
            handover: "December 2026",
        },
        {
            id: 2,
            name: "Dream Haven",
            location: "Badda, Dhaka",
            type: "43 Katha Residential Project",
            status: "Upcoming",
            image: "/images/project2.jpg",
            details:
                "A 160-flat project focused on sustainable living and modern architecture at an affordable price. Located near major road networks, ensuring easy accessibility to the city center.",
            size: "43 Katha",
            flats: "160 Units",
            handover: "June 2027",
        },
        {
            id: 3,
            name: "Home Vista",
            location: "Uttara, Dhaka",
            type: "Luxury Apartment Complex",
            status: "Completed",
            image: "/images/project3.jpg",
            details:
                "Completed in record time with full customer satisfaction. Home Vista offers premium interiors, high-quality materials, and excellent connectivity to the airport and major business hubs.",
            size: "10 Katha",
            flats: "24 Units",
            handover: "December 2023",
        },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-20">
            {/* Page Title */}
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold text-center text-[#D4AF37] mb-10"
            >
                Our Projects
            </motion.h1>

            {/* Project Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        whileHover={{ scale: 1.03 }}
                    >
                        <div className="relative h-56">
                            <img
                                src={project.image}
                                alt={project.name}
                                className="w-full h-full object-cover"
                            />
                            <span
                                className={`absolute top-3 right-3 px-3 py-1 text-xs font-semibold rounded-full ${project.status === "Ongoing"
                                        ? "bg-[#40E0D0] text-white"
                                        : project.status === "Completed"
                                            ? "bg-green-500 text-white"
                                            : "bg-yellow-500 text-white"
                                    }`}
                            >
                                {project.status}
                            </span>
                        </div>
                        <div className="p-5">
                            <h3 className="text-xl font-bold text-[#455A64]">{project.name}</h3>
                            <p className="text-sm text-gray-500">{project.location}</p>
                            <p className="text-sm mt-2 text-gray-700 line-clamp-2">
                                {project.details}
                            </p>
                            <button
                                onClick={() => setSelectedProject(project)}
                                className="mt-4 px-4 py-2 bg-[#40E0D0] text-white rounded-lg hover:bg-[#2fb2a7] transition"
                            >
                                View Details
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className="fixed inset-0 bg-black/60 flex justify-center items-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 overflow-hidden relative"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-3 right-3 bg-gray-200 hover:bg-gray-300 rounded-full p-1"
                            >
                                <X size={20} className="text-gray-600" />
                            </button>

                            <img
                                src={selectedProject.image}
                                alt={selectedProject.name}
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6">
                                <h2 className="text-2xl font-bold text-[#D4AF37]">
                                    {selectedProject.name}
                                </h2>
                                <p className="text-sm text-gray-500">{selectedProject.location}</p>
                                <p className="mt-4 text-gray-700">{selectedProject.details}</p>

                                <div className="grid grid-cols-2 gap-4 mt-6 text-sm">
                                    <div>
                                        <span className="font-semibold text-[#40E0D0]">Type:</span>{" "}
                                        {selectedProject.type}
                                    </div>
                                    <div>
                                        <span className="font-semibold text-[#40E0D0]">Land Size:</span>{" "}
                                        {selectedProject.size}
                                    </div>
                                    <div>
                                        <span className="font-semibold text-[#40E0D0]">Total Flats:</span>{" "}
                                        {selectedProject.flats}
                                    </div>
                                    <div>
                                        <span className="font-semibold text-[#40E0D0]">Handover:</span>{" "}
                                        {selectedProject.handover}
                                    </div>
                                </div>

                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="mt-6 w-full bg-[#40E0D0] text-white py-2 rounded-lg hover:bg-[#2fb2a7] transition"
                                >
                                    Close
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
