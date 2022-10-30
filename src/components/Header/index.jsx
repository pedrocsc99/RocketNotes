import  {RiShutDownLine} from 'react-icons/ri'
import { api } from "../../service/api";
import { Container, Profile,Logout } from "./styles";
import { useAuth } from "../../hooks/auth";

export function Header(){
    const {singOut, user} = useAuth()
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder;

    return(
        <Container>
            <Profile to="/profile">
                <img src={avatarUrl} alt={user.name}/>
                <div>
                    <span>Bem-Vindo,</span>
                    <strong>{user.name}</strong>
                </div>
            </Profile>
            <Logout onClick={singOut}>
                <RiShutDownLine/>
            </Logout>
        </Container>
    )
}