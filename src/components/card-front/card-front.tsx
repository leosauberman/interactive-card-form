import "./card-front.scss";
import {CardContainer} from "../card-container/card-container";
// @ts-ignore
import Logo from "../../assets/card-logo.svg";

interface CardFrontProps {
    cardNumber: string;
    cardholder: string;
    expirationDate: string;
}

export const CardFront = ({cardNumber, cardholder, expirationDate}: CardFrontProps) => {
    const cardNumberValue = cardNumber?.length > 0 ? cardNumber : "0000 0000 0000 0000";
    const cardholderValue = cardholder?.length > 0 ? cardholder : "Jane Appleseed";
    const expirationDateValue = expirationDate?.length > 0 ? expirationDate : "00/00";


    return (
        <CardContainer className="front">
            <img className="logo" src={Logo} alt="Card logo"/>
            <div className="row">
                <div className="row__number">
                    <span>{cardNumberValue}</span>
                </div>
                <div className="row__info">
                    <span>{cardholderValue}</span>
                    <span>{expirationDateValue}</span>
                </div>
            </div>
        </CardContainer>
    )
}