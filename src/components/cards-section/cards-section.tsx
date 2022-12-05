import {CardFront} from "../card-front/card-front";
import {CardBack} from "../card-back/card-back";
import React from "react";
import "./cards-section.scss";

export const CardsSection = ({cardNumber, cardholder, cvc, expirationDate}: any) => {

    return (
        <div className="cards-container">
            <div className="flex flex__first">
                <CardFront
                    cardholder={cardholder}
                    cardNumber={cardNumber}
                    expirationDate={expirationDate}
                />
            </div>
            <div className="flex flex__second">
                <CardBack cvc={cvc} />
            </div>
        </div>
    )
}