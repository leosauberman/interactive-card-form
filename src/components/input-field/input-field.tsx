import {ChangeEvent, InputHTMLAttributes} from "react";
import "./input-field.scss";

export enum Size {
    Small = "small",
    Large = "large"
}

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    errorText: string,
    isInvalid: boolean,
    label: string,
    placeholder: string,
    setValue: (value: string) => void,
    inputSize: Size,
}


export const InputField = ({errorText, isInvalid, label, placeholder, setValue, inputSize, value, ...props}: InputFieldProps) => {
    const errorClass = isInvalid ? "error" : "";
    const handleChange = ({target}: ChangeEvent<HTMLInputElement>) => {
        setValue(target.value);
    }

    return (
        <div className={`field ${inputSize} ${errorClass}`}>
            <label className="field__label">{label}</label>
            <input
                className={`field__input ${errorClass}`}
                placeholder={placeholder}
                value={value ?? ""}
                onChange={handleChange}
                {...props}
            />
            <span className="field__error" style={{visibility: isInvalid ? "visible" : "hidden"}}>{errorText}</span>
        </div>
    )
}