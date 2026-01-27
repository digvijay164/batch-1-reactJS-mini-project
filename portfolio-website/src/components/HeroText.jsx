import React from 'react'
import { FlipWords } from './flipWords'
import { motion } from "motion/react";
import { delay } from 'motion';
const HeroText = () => {
    const Words = ["Secure", "Modern", "scalable"]
    const Variants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    };
    return (
        <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
            {/* Dextop View */}
            <div className="flex-col hidden md:flex c-space">
                <motion.h1
                    className='text-4xl font-medium'
                    variants={Variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1 }}
                >
                    Hii I'm Digvijay
                </motion.h1>

                <div className="flex flex-col items-start">
                    <motion.p
                        className='text-5xl font-medium text-neutral-300'
                        variants={Variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.2 }}
                    >
                        A Devloper <br /> Dedicated to crafting
                    </motion.p>

                    <motion.div className=""
                        variants={Variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.5 }}
                    >
                        {/* animated words */}
                        <FlipWords
                            words={Words}
                            className="font-black text-white text-8xl"
                        />
                    </motion.div>

                    <motion.p
                        className='text-4xl font-medium text-neutral-300'
                        variants={Variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.8 }}
                    >
                        Web soluations
                    </motion.p>
                </div>

            </div>
            {/* /Dextop View */}

            <div className="flex- flex-col space-y-6 md:hidden">
                <motion.p
                    className="text-4xl font-medium"
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1 }}
                >
                    Hi,I'm Ali
                </motion.p>
                <div>
                    <motion.p
                        className="text-5xl font-black text-neutral-300"
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.2 }}
                    >
                        Building
                    </motion.p>
                    <motion.div
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.5 }}
                    >
                        <FlipWords
                            words={words}
                            className="font-bold text-white text-7xl"
                        />
                    </motion.div>
                    <motion.p
                        className="text-4xl font-black text-neutral300"
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.8 }}
                    >
                        Web Applications
                    </motion.p>
                </div>
            </div>


        </div>
    )
}

export default HeroText
