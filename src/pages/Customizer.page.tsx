import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio/react";
import config from "../config/config";
import store from "../store";
import { downloadCanvasToImage, reader } from "../config/helpers";
import { EditorTabs, FilterTabs, DecalTypes } from "../config/constants";
import { fadeAnimation, slideAnimation } from "../config/motion";
import ButtonComponent from "../components/Button.component";

const CustomTab = ({ tab, handleClick }: any) => {
    return <div className="editorTab">tab</div>;
};

const Customizer = () => {
    const snap = useSnapshot(store);
    return (
        <AnimatePresence>
            {!snap.intro && (
                <>
                    <motion.div
                        key="custom"
                        className="customizer position-absolute top-0 start-0"
                        style={{ zIndex: 5 }}
                        {...slideAnimation("left")}
                    >
                        <div className="d-flex align-items-center vh-100">
                            <div className="editorTabsContainer">
                                {EditorTabs.map((tab, index) => (
                                    <CustomTab
                                        key={index}
                                        tab={tab}
                                        handleClick={() => null}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        className="position-absolute top-0 right-0 end-0"
                        style={{ zIndex: 5 }}
                        {...slideAnimation("down")}
                    >
                        <ButtonComponent
                            id="backBtn"
                            onClick={() => {
                                store.intro = true;
                            }}
                        >
                            Back
                        </ButtonComponent>
                    </motion.div>
                    <motion.div
                        className="filterTabsContainer position-absolute bottom-0 start-50 translate-middle-x"
                        style={{ zIndex: 5 }}
                        {...slideAnimation("up")}
                    >
                        {FilterTabs.map((tab, index) => (
                            <CustomTab tab={tab} key={index} />
                        ))}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default Customizer;
