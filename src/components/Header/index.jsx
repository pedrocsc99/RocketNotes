import  {RiShutDownLine} from 'react-icons/ri'
import { Container, Profile,Logout } from "./styles";

export function Header(){
    return(
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/pedrocsc99.png" alt="Foto do usuario"/>
                <div>
                    <span>Bem-Vindo,</span>
                    <strong>Pedro Carvalho</strong>
                </div>
            </Profile>
            <Logout>
                <RiShutDownLine/>
            </Logout>
        </Container>
    )
}