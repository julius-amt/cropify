import React, { FC } from "react";

interface ButtonProps {
    content: React.ReactNode;
    className?: string;
}

const Button: FC<ButtonProps> = ({ content, className }) => {
    return <div className={`${className}`}>{content}</div>;
};

export default Button;
