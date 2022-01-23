import Input from "./Input";
import { useState } from "react";

const Form = ({ title }) => {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [ipAddress, setIpAddress] = useState("");

  const clearInputs = () => {
    setName("");
    setJob("");
    setPhoneNumber("");
    setIpAddress("");
  }

  const handleFetch = () => {
    const ipApi = "https://ip-fast.com/api/ip/?format=json";
    fetch(ipApi)
      .then(response => response.json())
      .then(({ ip }) => setIpAddress(ip));
  }

  return (
    <form className="ip-form container" onSubmit={e => e.preventDefault()}>
      <h1 className="form-title">{title}</h1>

      <Input
        inputLabel="Nome"
        inputInfo="name"
        inputValue={name}
        setInputValue={setName}
      />

      <div className="input-row">
        <Input
          inputLabel="Profissão"
          inputInfo="job"
          inputValue={job}
          setInputValue={setJob}
        />
        <Input
          inputLabel="Celular"
          inputInfo="phone-number"
          inputNumber="phone-number"
          inputValue={phoneNumber}
          setInputValue={setPhoneNumber}

        />
      </div>

      <div className="ip-field input-row">
        <Input
          inputLabel="Meu IP"
          inputInfo="ip-address"
          inputNumber="ip-address"
          inputValue={ipAddress}
          readOnly
        />
        <button className="ip-button" type="button" onClick={() => handleFetch()}>Encontrar IP</button>
      </div>

      <div className="input-row buttons">
        <button type="button" onClick={() => clearInputs()}>Limpar</button>
        <button type="submit">Salvar</button>
      </div>
    </form>
  );
};

export default Form;
