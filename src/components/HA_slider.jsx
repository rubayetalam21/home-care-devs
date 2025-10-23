import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HA_slider() {
    const slides = [
        {
            id: 1,
            title: "Modern Living with Home Arc Ltd.",
            subtitle: "Your dream home — built with trust, quality & affordability.",
            image: "/images/slide1.jpg",
        },
        {
            id: 2,
            title: "Ongoing Projects Across Dhaka",
            subtitle: "Explore premium flats at half the cost of traditional ready flats.",
            image: "/images/slide2.jpg",
        },
        {
            id: 3,
            title: "From Design to Delivery",
            subtitle: "We handle every step — land, design, construction, and interiors.",
            image: "/images/slide3.jpg",
        },
    ];

    const [current, setCurrent] = useState(0);

    // Auto-slide every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

    return (
        <div className="relative w-full h-[85vh] overflow-hidden">
            <AnimatePresence>
                {slides.map(
                    (slide, index) =>
                        index === current && (
                            <motion.div
                                key={slide.id}
                                className="absolute inset-0"
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1 }}
                            >
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-6">
                                    <motion.h1
                                        initial={{ y: 30, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.2, duration: 0.8 }}
                                        className="text-3xl md:text-5xl font-bold text-[#D4AF37] drop-shadow-lg"
                                    >
                                        {slide.title}
                                    </motion.h1>
                                    <motion.p
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.4, duration: 0.8 }}
                                        className="mt-4 text-lg md:text-xl text-white max-w-2xl"
                                    >
                                        {slide.subtitle}
                                    </motion.p>
                                </div>
                            </motion.div>
                        )
                )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/60 p-2 rounded-full transition"
            >
                <ChevronLeft className="text-gray-800" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/60 p-2 rounded-full transition"
            >
                <ChevronRight className="text-gray-800" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full transition-all ${index === current ? "bg-[#40E0D0]" : "bg-white/50"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
