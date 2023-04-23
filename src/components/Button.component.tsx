import React from "react";

interface IProps {
    children?: any;
    id: string;
    onClick?: () => any;
    className?: string;
    style?: any;
}

const ButtonComponent = (props: IProps) => {
    const { children, id, onClick, className, style } = props;
    return (
        <button id={id} onClick={onClick} className={className} style={style}>
            {children || "Button"}
        </button>
    );
};

export default ButtonComponent;
