import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio/react";
import config from "../config/config";
import store from "../store";
import { downloadCanvasToImage, reader } from "../config/helpers";
import { EditorTabs, FilterTabs, DecalTypes } from "../config/constants";
import { fadeAnimation, slideAnimation } from "../config/motion";
const Customizer = () => {
    return (
        <div>
            <h1>Customizer</h1>
        </div>
    );
};

export default Customizer;
