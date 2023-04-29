import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import store from "../store";
import { useRef } from "react";

const CameraRig = (props: any) => {
    const snap = useSnapshot(store);
    const group = useRef<any>();

    useFrame((state, delta) => {
        const isBreakpoint = window.innerWidth <= 1260;
        const isMobile = window.innerWidth <= 768;
        //? Setting initial postion
        let targetPosition: any = [0, 0, 0];
        if (snap.intro) {
            if (isBreakpoint) {
                targetPosition = [0, 0, 0];
            } else if (isMobile) {
                targetPosition = [0, 0.2, 2.5];
            }
        }
        easing.damp3(state.camera.position, targetPosition, 0.25, delta);
        easing.dampE(
            group.current.rotation,
            [state.pointer.y / 10, -state.pointer.x / 5, 0],
            0.1
        );
    });

    return <group ref={group}>{props.children}</group>;
};

export default CameraRig;
