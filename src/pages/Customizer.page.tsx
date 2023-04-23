import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio/react";
import config from "../config/config";
import store from "../store";
import { downloadCanvasToImage, reader } from "../config/helpers";
import { EditorTabs, FilterTabs, DecalTypes } from "../config/constants";
import { fadeAnimation, slideAnimation } from "../config/motion";

const Customizer = () => {
    const snap = useSnapshot(store);
    return (
        <AnimatePresence>
            {!snap.intro && (
                <motion.section
                    className="customizer"
                    {...fadeAnimation}
                ></motion.section>
            )}
        </AnimatePresence>
    );
};

export default Customizer;
