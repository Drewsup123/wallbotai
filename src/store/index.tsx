import { proxy } from "valtio";

const store = proxy({
    intro: true,
    color: "#EFBD48",
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: "",
    fullDecal: "",
});

export default store;
