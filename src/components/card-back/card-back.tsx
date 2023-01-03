import "./card-back.scss";
import {CardContainer} from "../card-container/card-container";


export const CardBack = ({cvc}: { cvc: string }) => {
    const cvcNum = cvc.length > 0 ? cvc : "000";

    return (
        <CardContainer className="back">
            <div className="row">
                <span>{cvcNum}</span>
            </div>
        </CardContainer>
    )
}