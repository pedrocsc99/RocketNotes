import  {RiShutDownLine} from 'react-icons/ri'
import { api } from "../../service/api";
import { Container, Profile,Logout } from "./styles";
import { useAuth } from "../../hooks/auth";
import avatarPlaceHolder from "../../assets/avatar_placeholder.svg"
import { useNavigate } from 'react-router-dom';

export function Header(){
    const {singOut, user} = useAuth()
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder;
    const navigation = useNavigate()
    function handleSingOut() {
        navigation("/");
        singOut();
    }
    return(
        <Container>
            <Profile to="/profile">
                <img src={avatarUrl} alt={user.name}/>
                <div>
                    <span>Bem-Vindo,</span>
                    <strong>{user.name}</strong>
                </div>
            </Profile>
            <Logout onClick={handleSingOut}>
                <RiShutDownLine/>
            </Logout>
        </Container>
    )
}