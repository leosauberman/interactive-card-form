import {Button} from "../button/button";
import "./completed-state.scss";

const IconCompleteSVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="none">
        <circle cx="40" cy="40" r="40" fill="url(#a)"/>
        <path stroke="#fff" strokeWidth="3" d="M28 39.92 36.08 48l16-16"/>
        <defs>
            <linearGradient id="a" x1="-23.014" x2="0" y1="11.507" y2="91.507" gradientUnits="userSpaceOnUse">
                <stop stopColor="#6348FE"/>
                <stop offset="1" stopColor="#610595"/>
            </linearGradient>
        </defs>
    </svg>
)

export const CompletedState = () => {

    return (
        <div className="completed">
            <IconCompleteSVG />
            <div className="column">
                <h2 className="completed__title">Thank You!</h2>
                <p className="completed__desc">We've added your card details</p>
            </div>
            <Button>Continue</Button>
        </div>
    )
}