import {InputHTMLAttributes} from "react";
import Cleave from "cleave.js/react";
import "./input-field.scss";
import {CleaveOptions} from "cleave.js/options";

export enum Size {
    Small = "small",
    Large = "large"
}

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    errorText?: string,
    label: string,
    placeholder: string,
    inputSize: Size,
    maskOptions?: CleaveOptions
}


export const InputField = ({
   errorText,
   label,
   placeholder,
   inputSize,
   value,
   maskOptions,
   ...props
}: InputFieldProps) => {
    const isInvalid = errorText && errorText.length > 0;
    const errorClass = isInvalid ? "error" : "";

    return (
        <div className={`field ${inputSize} ${errorClass}`}>
            <label className="field__label">{label}</label>
            {
                maskOptions ?
                    (<Cleave
                        options={maskOptions}
                        className={`field__input ${errorClass}`}
                        placeholder={placeholder}
                        value={value ?? ""}
                        onChange={props.onChange}
                        {...props}
                    />)
                    : (<input
                        className={`field__input ${errorClass}`}
                        placeholder={placeholder}
                        value={value ?? ""}
                        onChange={props.onChange}
                        {...props}
                    />)
            }
            <span className="field__error" style={{visibility: isInvalid ? "visible" : "hidden"}}>{errorText}</span>
        </div>
    )
}