import { easing } from "maath";
import { useSnapshot } from "valtio";
import { useFrame } from "@react-three/fiber";
// @ts-nocheck @ts-ignore
import { Decal, useGLTF, useTexture } from "@react-three/drei";
import store from "../store";

const ArtCanvas = () => {
    const snap = useSnapshot(store);
    // @ts-ignore
    const { nodes, materials } = useGLTF("/canvas_model.glb");
    // const { nodes, materials } = useGLTF("/shirt_baked.glb");

    // const logoTexture = useTexture(snap.logoDecal);
    // const fullTexture = useTexture(snap.fullDecal);
    console.log("Nodes : ", nodes, materials);
    return (
        <group>
            <mesh
                castShadow
                geometry={nodes.model_js.geometry}
                // geometry={nodes.T_Shirt_male.geometry}
                material={materials.b0b0b0}
                // material={materials.lambert1}
                material-roughness={1}
                dispose={null}
            ></mesh>
        </group>
    );
};

export default ArtCanvas;
