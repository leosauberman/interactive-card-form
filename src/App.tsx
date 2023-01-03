import React, {useState} from 'react';
import {Main} from "./components/main/main";
import {CardsSection} from "./components/cards-section/cards-section";
import "./App.scss"
import {useFormik} from "formik";
import { CompletedState } from './components/completed-state/completed-state';

export interface FormValues {
    cardholder: string,
    cardNumber: string,
    expirationDate: string,
    cvc: string,
}

function App() {
    const [isCompleted, setIsCompleted] = useState<boolean>(false);
    const blankError = "Can't be blank";
    const formik = useFormik({
        initialValues: {
            cardholder: '',
            cardNumber: '',
            expirationDate: '',
            cvc: '',
        },
        onSubmit: (values, {setSubmitting}) => {
            setIsCompleted(true);
            setSubmitting(false);
        },
        validate: ({cardNumber, cardholder, cvc, expirationDate}) => {
            const errors: any = {}

            if(cardholder.length === 0) errors.cardholder = blankError;
            if(cardNumber.length === 0) errors.cardNumber = blankError;
            if(cvc.length === 0) errors.cvc = blankError;
            if(expirationDate.length === 0) errors.expirationDate = blankError;

            return errors;
        },
        validateOnMount: false,
    })

    return (
        <div className="container">
            <CardsSection
                cardNumber={formik.values.cardNumber}
                cardholder={formik.values.cardholder}
                cvc={formik.values.cvc}
                expirationDate={formik.values.expirationDate}
                className="cards"
            />
            {
                isCompleted
                    ? <CompletedState />
                    : (<Main
                            form={formik}
                            className="forms"
                        />)
            }

        </div>
    );
}

export default App;
