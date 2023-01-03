import {InputField, Size} from "../input-field/input-field";
import "./main.scss";
import {Button} from "../button/button";
import {ChangeEvent} from "cleave.js/react/props";
import React, {FormEvent} from "react";
import {FormikProps} from "formik";
import {FormValues} from "../../App";

export const Main = ({form}: { form: FormikProps<FormValues>, className?: string }) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        form.handleChange(event);
    }

    return (
        <form className="main" onSubmit={form.handleSubmit}>
            <InputField
                errorText={form.touched.cardholder ? form.errors.cardholder : ""}
                label={"Cardholder Name"}
                placeholder={"e.g. Jane Appleseed"}
                inputSize={Size.Large}
                name="cardholder"
                type="text"
                value={form.values.cardholder}
                maxLength={28}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
                onBlur={form.handleBlur}
            />
            <InputField
                errorText={form.touched.cardNumber ? form.errors.cardNumber : ""}
                label={"Card Number"}
                placeholder={"e.g. 1234 5678 9123 0000"}
                inputSize={Size.Large}
                name="cardNumber"
                maxLength={19}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
                onBlur={form.handleBlur}
                maskOptions={{
                    creditCard: true,
                }}
            />
            <div className="main__detail">
                <InputField
                    errorText={form.touched.expirationDate ? form.errors.expirationDate : ""}
                    label={"Exp. Date (MM/YY)"}
                    placeholder={"MM/YY"}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
                    onBlur={form.handleBlur}
                    inputSize={Size.Small}
                    name="expirationDate"
                    maskOptions={{
                        date: true,
                        datePattern: ['m', 'y']
                    }}
                />
                <InputField
                    errorText={form.touched.cvc ? form.errors.cvc : ""}
                    label={"CVC"}
                    placeholder={"e.g. 123"}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
                    onBlur={form.handleBlur}
                    inputSize={Size.Small}
                    name="cvc"
                    maskOptions={{
                        blocks: [3],
                        numericOnly: true
                    }}
                />
            </div>
            <Button type="submit" disabled={form.isSubmitting}>Confirm</Button>
        </form>
    );
}