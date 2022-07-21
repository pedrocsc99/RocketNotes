import { Container, Form,Background } from "./styles";
import {FiMail,FiLock} from "react-icons/fi"
import  {Input} from '../../components/Input'
import  {Button} from '../../components/Button'

export function SingIn(){
    return(
        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Faça seu login</h2>
                <Input placeholder="E-mail" type="text" icon={FiMail}></Input>
                <Input placeholder="senha" type="password" icon={FiLock}></Input>

                <Button title='Entrar'/>
                <a href="#"></a>
            </Form>
            <Background/>
        </Container>
    )
}