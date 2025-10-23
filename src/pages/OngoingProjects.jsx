import { motion } from "framer-motion";

export default function OngoingProjects() {
    const projects = [
        {
            id: 1,
            name: "Swopnonir Project",
            location: "ECB Chattar, Dhaka Cantonment",
            type: "B+G+9 Residential Building",
            status: "Ongoing",
            image: "/images/project1.jpg",
            details:
                "A premium 10-storied residential complex offering modern flats designed for engineers, doctors, and army officers. Includes rooftop community space, underground parking, and 24/7 security.",
            size: "2.87 Katha",
            flats: "36 Units",
            handover: "December 2026",
        },
        {
            id: 2,
            name: "Dream Haven",
            location: "Badda, Dhaka",
            type: "43 Katha Residential Project",
            status: "Ongoing",
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
                "Completed in record time with full customer satisfaction. Offers premium interiors, high-quality materials, and excellent connectivity.",
            size: "10 Katha",
            flats: "24 Units",
            handover: "December 2023",
        },
    ];

    // Filter only ongoing projects
    const ongoingProjects = projects.filter((p) => p.status === "Ongoing");

    return (
        <div className="max-w-7xl mx-auto px-4 py-20">
            {/* Page Title */}
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold text-center text-[#D4AF37] mb-10"
            >
                Ongoing Projects
            </motion.h1>

            {/* Grid */}
            {ongoingProjects.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {ongoingProjects.map((project, index) => (
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
                                <span className="absolute top-3 right-3 px-3 py-1 text-xs font-semibold rounded-full bg-[#40E0D0] text-white">
                                    {project.status}
                                </span>
                            </div>
                            <div className="p-5">
                                <h3 className="text-xl font-bold text-[#455A64]">{project.name}</h3>
                                <p className="text-sm text-gray-500">{project.location}</p>
                                <p className="text-sm mt-2 text-gray-700 line-clamp-2">
                                    {project.details}
                                </p>

                                <div className="mt-4 text-sm">
                                    <p>
                                        <span className="font-semibold text-[#40E0D0]">Land Size:</span>{" "}
                                        {project.size}
                                    </p>
                                    <p>
                                        <span className="font-semibold text-[#40E0D0]">Flats:</span>{" "}
                                        {project.flats}
                                    </p>
                                    <p>
                                        <span className="font-semibold text-[#40E0D0]">Handover:</span>{" "}
                                        {project.handover}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500 mt-10">
                    No ongoing projects available right now.
                </p>
            )}
        </div>
    );
}
