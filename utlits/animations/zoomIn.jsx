"use client"
import React from 'react'
import { motion } from "framer-motion"

const ZoomIn = ({ children, delay = 1 }) => {
    const zoomInVariants = {
        offscreen: {
            opacity: 0
        },
        onscreen: {
            opacity: 1,
            transition: {
                // type: "spring",
                // bounce: 0.4,
                duration: 0.8,
                delay: (delay === 1 ? 0 : 0.1 * delay)
            }
        }
    };
    return (
        <motion.div
            variants={zoomInVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0 }}
        >
            {children}
        </motion.div>
    )
}

export default ZoomIn