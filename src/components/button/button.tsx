import {ButtonHTMLAttributes, PropsWithChildren} from "react";
import "./button.scss";

type ButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>;

export const Button = ({children, ...props}: ButtonProps) => {

    return (
        <button {...props}>{children}</button>
    )
}