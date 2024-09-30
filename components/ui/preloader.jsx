// components/ui/preloader.jsx
'use client'
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Preloader = () => {
    const controls = useAnimation();

    useEffect(() => {
        const animate = async () => {
            const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
            const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

            // Initial animation
            await controls.start({
                opacity: 0,
                y: -100,
                transition: { delay: 1.5, duration: 0.5, ease: "easeInOut" },
            });

            // Morphing path animation
            await controls.start({
                d: curve,
                transition: { duration: 0.5, ease: "easeIn" },
            });

            await controls.start({
                d: flat,
                transition: { duration: 0.5, ease: "easeOut" },
            });

            // Hide preloader
            await controls.start({
                y: -1500,
                transition: { duration: 0.5, ease: "easeInOut" },
            });

            // Set preloader display to none
            await controls.start({
                zIndex: -1,
                display: "none",
                transition: { duration: 0.1 },
            });
        };

        animate();
    }, [controls]);

    return (
        <motion.div className="preloader" animate={controls}>
            <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
                <motion.path
                    id="preloaderSvg"
                    d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"
                    animate={controls}
                />
            </svg>
            <div className="preloader-heading">
                <div className="load-text">
                    <span>L</span>
                    <span>o</span>
                    <span>a</span>
                    <span>d</span>
                    <span>i</span>
                    <span>n</span>
                    <span>g</span>
                </div>
            </div>
        </motion.div>
    );
};

export default Preloader;