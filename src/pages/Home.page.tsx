import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation,
} from "../config/motion";
import { useSnapshot } from "valtio/react";
import store from "../store";
import ButtonComponent from "../components/Button.component";

const Home = () => {
    const snap = useSnapshot(store);
    return (
        <AnimatePresence>
            {snap.intro && (
                <motion.section className="home" {...slideAnimation("left")}>
                    <motion.header {...slideAnimation("down")}>
                        <img src="" alt="logo" />
                    </motion.header>
                    <motion.div
                        className="home-content"
                        {...headContainerAnimation}
                    >
                        <motion.div {...headTextAnimation}>
                            <h1 className="head-text">
                                LET'S <br /> CREATE <br /> YOUR <br /> OWN{" "}
                                <br /> Wall Art
                            </h1>
                        </motion.div>
                        <motion.div className="" {...headContentAnimation}>
                            <p>
                                Create your own wall art with our customizer!
                                You can also generate AI art!
                            </p>
                            <ButtonComponent id="view" />
                        </motion.div>
                    </motion.div>
                </motion.section>
            )}
        </AnimatePresence>
    );
};

export default Home;
