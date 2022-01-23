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
      const formattedNumber = [];

      if (value >= 11) {
        setInputValue(value.slice(0, 11));
        formatNumber(value);
      }
    }

  }

  const handlePhoneNumber = value => {
    console.log(value);
    setInputValue(value);
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
