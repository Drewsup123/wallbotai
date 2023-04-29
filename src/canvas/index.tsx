import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";

import ArtCanvas from "./ArtCanvas";
import Backdrop from "./Backdrop";
import CameraRig from "./CameraRig";

const CanvasModel = () => {
    return (
        <Canvas style={{ height: "100vh", width: "100vw" }}>
            <ambientLight intensity={0.5} />
            <Environment preset="city" />
            <CameraRig>
                {/* <Backdrop /> */}
                <Center>
                    <ArtCanvas />
                </Center>
            </CameraRig>
        </Canvas>
    );
};

export default CanvasModel;
