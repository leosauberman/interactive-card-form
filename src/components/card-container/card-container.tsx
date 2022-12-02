import {PropsWithChildren} from "react";
import "./card-container.scss";

interface CardContainerProps {
    className?: string;
}
export const CardContainer = ({children, className}: PropsWithChildren<CardContainerProps>) => {
    return <div className={`card ${className}`}>{children}</div>
}