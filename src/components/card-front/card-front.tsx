import "./card-front.scss";
import {CardContainer} from "../card-container/card-container";
// @ts-ignore
import Logo from "../../assets/card-logo.svg";

interface CardFrontProps {
    cardNumber?: string;
    cardholder?: string;
    expirationDate?: string;
}

export const CardFront = (props: CardFrontProps) => {
    const cardNumber = props.cardNumber ?? "0000 0000 0000 0000";
    const cardholder = props.cardholder ?? "Jane Appleseed";
    const expirationDate = props.expirationDate ?? "00/00";


    return (
        <CardContainer className="front">
            <img className="logo" src={Logo} alt="Card logo" />
            <div className="row">
                <div className="row__number">
                    <span>{cardNumber}</span>
                </div>
                <div className="row__info">
                    <span>{cardholder}</span>
                    <span>{expirationDate}</span>
                </div>
            </div>
        </CardContainer>
    )
}