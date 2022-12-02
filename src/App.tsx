import React, {useState} from 'react';
import {Main} from "./components/main/main";
import {CardFront} from "./components/card-front/card-front";
import {CardBack} from "./components/card-back/card-back";

function App() {
    const [cardholder, setCardholder] = useState<string | undefined>(undefined);
    const [cardNumber, setCardNumber] = useState<string | undefined>(undefined);
    const [expirationDate, setExpirationDate] = useState<string | undefined>(undefined);
    const [cvc, setCvc] = useState<string | undefined>(undefined);

    return (
        <div>
            <CardFront
                cardholder={cardholder}
                cardNumber={cardNumber}
                expirationDate={expirationDate}
            />
            <CardBack cvc={cvc} />
            <Main
                cardholder={cardholder} setCardholder={setCardholder}
                cardNumber={cardNumber} setCardNumber={setCardNumber}
                expirationDate={expirationDate} setExpirationDate={setExpirationDate}
                cvc={cvc} setCvc={setCvc}
            />
        </div>
    );
}

export default App;
