import { useState } from "react";

const Input = ({inputLabel, inputNumber, inputInfo, inputValue, setInputValue, readOnly}) => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  
  const handleInputNumber = value => {
    if (!inputNumber) {
      setInputValue(value)
      return;
    }

    if (inputNumber === "phone-number" && isInputFocused) {
      handlePhoneNumber(value);       
    }

  }
  
  const handlePhoneNumber = value => {
    if (value.length === 11) {
      const formattedPhoneNumber = formatNumber(value);
      setInputValue(formattedPhoneNumber);

    } else if (value.length === 14) {
      const onlyNumbers = value.replace(/\D/g, "");
      setInputValue(onlyNumbers);

    } else if (value.length >= 15) {
      const maxNumber = value.slice(0, 15);
      setInputValue(maxNumber);

    } else {
      setInputValue(value);
    }
  }

  const formatNumber = phoneNumber => {
    const indexes = [0, 3, 4, 10];
    const formattedNumber = [];

    phoneNumber.split("").forEach((number, i) => {
      if (i === 0 || i === 2) {
        formattedNumber.includes("(") ? formattedNumber.push(")", " ") : formattedNumber.push("(");
      } else if (i === 7) {
        formattedNumber.push("-");
      }

      formattedNumber.push(number);

    });
    return formattedNumber.join("");
  }


  return (
    <div className="input">
      <label htmlFor={inputInfo}>{inputLabel}</label>
      <input
        className="input-field"
        type="text"
        name={inputInfo}
        id={inputInfo}
        value={inputValue}
        onChange={e => handleInputNumber(e.target.value)}
        onFocus={() => setIsInputFocused(true)}
        onBlur={() => setIsInputFocused(false)}
        onKeyPress={(e) => !/[0-9]/.test(e.key) && inputNumber && e.preventDefault()}
        readOnly={readOnly}
      />
    </div>
  );
};

export default Input;
