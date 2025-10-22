import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

interface User {
  nome: string;
  idade: number;
  CPF: string;
}

function App() {

  
const [user, setUser] = useState<User>({ nome: "", idade: 0, CPF: "" });
const [novoNome, setNovoNome] = useState("");
const [novaIdade, setNovaIdade] = useState(0);
const [novoCPF, setNovoCPF] = useState("");

function alterarNome() {
  if (novoNome.trim() === "") 
	    return;
    setUser({ ...user, nome: novoNome });
    setNovoNome("");
  }

function alterarIdade() {
  if (novaIdade === 0) 
	    return;
    setUser({ ...user, idade: novaIdade });
    setNovoCPF("");
  }

function alterarCPF() {
  if (novoCPF.trim() === "") 
	    return;
    setUser({ ...user, CPF: novoCPF });
    setNovoCPF("");
  }


  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1>React State | Usuário</h1>
      </div>

      <div>
      <h2>Dados do Usuário:</h2>
      <p>Nome: {user.nome}</p>
        <div>
        <button onClick={alterarNome}>Alterar Nome</button>
        <input value={novoNome}
        onChange={(e) => setNovoNome(e.target.value)}
        placeholder="Novo Nome" />
        </div>
      <p>Idade: {user.idade}</p>
        <div>
        <button onClick={alterarIdade}>Alterar Idade</button>
        <input value={novaIdade}
        onChange={(e) => setNovaIdade(Number(e.target.value))}
        placeholder="Nova Idade" />
        </div>
      <p>CPF: {user.CPF}</p>
        <div>
        <button onClick={alterarCPF}>Alterar CPF</button>
        <input value={novoCPF}
        onChange={(e) => setNovoCPF(e.target.value)}
        placeholder="Novo CPF" />
        </div>
      </div>
    </>
  )
}

export default App
