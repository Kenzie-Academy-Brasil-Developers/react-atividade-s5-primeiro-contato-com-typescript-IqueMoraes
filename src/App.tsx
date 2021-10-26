import { useState } from "react";
import "./App.css";
import { Card } from "./Components/Card";
import { Input } from "./Components/Input";

interface User {
  name: string,
  age: number,
  hobby: string
}

function App() {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [hobby, setHobby] = useState<string>("");
  const [usersList, setUsersList] = useState<User[]>([]);

  const handleSubmit = () => {
    const user = {name, age, hobby};

    setUsersList([...usersList, user]);
    setName("");
    setAge(0);
    setHobby("");
  };


  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Input
            label={"Nome"}
            placeholder={"Seu nome aqui"}
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <Input
            label={"Idade em anos"}
            type="Number"
            placeholder={"Quantos anos você tem?"}
            onChange={(e) => setAge(Number(e.target.value))}
            value={age}
          />
          <Input
            label={"Hobby"}
            placeholder={"Coloque aqui o seu hobby favorito"}
            onChange={(e) => setHobby(e.target.value)}
            value={hobby}
          />
          <button onClick={handleSubmit}>Adicionar</button>
        </div>
        <div>
          <ul>
            {usersList.map((item, index) => (
              <li key={index}>
                <Card name={item.name} age={item.age} hobby={item.hobby} />{" "}
              </li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
