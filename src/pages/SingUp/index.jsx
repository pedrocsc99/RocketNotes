import { useState } from "react";
import { Container, Form, Background } from "./styles";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { Link, useNavigate} from "react-router-dom";
import { api } from "../../service/api";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SingUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const navigate = useNavigate()
  function handleSingUp() {
    if(!name || !email || !password){
       return alert("Preencha todos os campos!")
    }

    api.post("/users", {name,email,password}).then(()=>{
        alert("Usuario cadastrado com sucesso")
        navigate("/")
    }).catch(error =>{
        if (error.response) {
           alert(error.response.data.message)
        }else{
            alert("Não foi possível cadastrar")
        }
    })
  }
  
  return (
    <Container>
      <Background />
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Crie sua Conta</h2>
        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          onChange={e => setName(e.target.value)}
        ></Input>
        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={e=> setEmail(e.target.value)}
        ></Input>
        <Input
          placeholder="senha"
          type="password"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        ></Input>

        <Button title="Cadastrar" onClick={handleSingUp} />
        <Link to="/">Voltar para o Login</Link>
      </Form>
    </Container>
  );
}
