import Input from "./Input";
import { useState, useEffect } from "react";

const Form = ({ title }) => {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [ipAddress, setIpAddress] = useState("");
  
  useEffect(() => {
    getLocalStorage();
  }, []);
  
  const getLocalStorage = () => {
    setName(localStorage.name || "");
    setJob(localStorage.job || "");
    setPhoneNumber(localStorage.phoneNumber || "");
    setIpAddress(localStorage.ipAddress || "");
  }
  
  const clearInputs = () => {
    setName("");
    setJob("");
    setPhoneNumber("");
    setIpAddress("");
    localStorage.clear();
    
    alert("Seus dados foram apagados!")
  }
  
  const handleFetch = () => {
    const ipApi = "https://ip-fast.com/api/ip/?format=json";
    fetch(ipApi)
    .then(response => response.json())
    .then(({ ip }) => setIpAddress(ip));
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(phoneNumber.length);
    if (name.length === 0) {
      alert("Insira um nome!")
      return;

    } else if (job.length === 0) {
      alert("Insira uma profissão!")
      return;

    } else if (phoneNumber.length < 15) {
      alert("Insira um número de telefone válido!");
      return;
    }
    
    const statesArray = [name, job, phoneNumber, ipAddress];
    const keys = [
      Object.keys({name})[0],
      Object.keys({job})[0],
      Object.keys({phoneNumber})[0],
      Object.keys({ipAddress})[0]
    ];
    statesArray.forEach((state, i) => localStorage.setItem(keys[i], state));
    alert("Seus dados foram salvos!")
  }


  
  return (
    <form className="ip-form container" onSubmit={(e) => handleSubmit(e)}>
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
