import {InputField, Size} from "../input-field/input-field";
import "./main.scss";
import {Button} from "../button/button";

export const Main = ({
    cardholder, setCardholder,
    cardNumber, setCardNumber,
    expirationDate, setExpirationDate,
    cvc, setCvc,
}: any) => {

    const onlyNumbersValidator = (value?: string): boolean => {
        if(value) return !/^[0-9]*$/.test(value);
        return false;
    }

    const expDateValidator = (value?: string) => {
        if(value) {
            const [month, year] = value.split("/");
            let monthInt = parseInt(month);
            let yearInt = parseInt(year);
            return (monthInt <= 0 && monthInt > 12) && yearInt <= 22;
        }
        return false;
    }

    return (
      <div className="main">
          <InputField
              errorText={"Can't be blank"}
              isInvalid={cardholder?.length == 0}
              label={"Cardholder Name"}
              placeholder={"e.g. Jane Appleseed"}
              setValue={(v) => setCardholder(v)}
              inputSize={Size.Large}
              value={cardholder}
              type="text"
          />
          <InputField
              errorText={"Wrong format, numbers only"}
              isInvalid={onlyNumbersValidator(cardNumber)}
              label={"Card Number"}
              placeholder={"e.g. 1234 5678 9123 0000"}
              setValue={(v) => setCardNumber(v)}
              inputSize={Size.Large}
              value={cardNumber}
              maxLength={19}
          />
          <div className="main__detail">
              <InputField
                  errorText={"Can't be blank"}
                  isInvalid={expDateValidator(expirationDate)}
                  label={"Exp. Date (MM/YY)"}
                  placeholder={"MM/YY"}
                  setValue={(v) => setExpirationDate(v)}
                  inputSize={Size.Small}
                  value={expirationDate}
              />
              <InputField
                  errorText={"Can't be blank"}
                  isInvalid={cvc?.length == 0}
                  label={"CVC"}
                  placeholder={"e.g. 123"}
                  setValue={(v) => setCvc(v)}
                  inputSize={Size.Small}
                  value={cvc}
                  type="number"
              />
          </div>
          <Button type="button">Confirm</Button>
      </div>
    );
}