import React, {useState} from 'react';
import {Main} from "./components/main/main";
import {CardsSection} from "./components/cards-section/cards-section";
import "./App.scss"

function App() {
    const [cardholder, setCardholder] = useState<string | undefined>(undefined);
    const [cardNumber, setCardNumber] = useState<string | undefined>(undefined);
    const [expirationDate, setExpirationDate] = useState<string | undefined>(undefined);
    const [cvc, setCvc] = useState<string | undefined>(undefined);

    return (
        <div className="container">
            <CardsSection
                cardNumber={cardNumber}
                cardholder={cardholder}
                cvc={cvc}
                expirationDate={expirationDate}
                className="cards"
            />
            <Main
                cardholder={cardholder} setCardholder={setCardholder}
                cardNumber={cardNumber} setCardNumber={setCardNumber}
                expirationDate={expirationDate} setExpirationDate={setExpirationDate}
                cvc={cvc} setCvc={setCvc}
                className="forms"
            />
        </div>
    );
}

export default App;
