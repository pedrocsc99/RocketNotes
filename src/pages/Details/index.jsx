import { Container, Links, Content } from "./styles.js";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header/index.jsx";
import { Section } from "../../components/Section/index.jsx";
import { ButtonText } from "../../components/ButtonText";

import { Tag } from "../../components/Tag/index.jsx";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="excluir nota" />

          <h1>
              Introdução a React
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, ratione numquam, corporis cumque voluptatibus nostrum porro magni debitis dignissimos ad atque ex saepe ea officia neque iusto at maxime repellendus! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum earum aspernatur iusto inventore, perspiciatis odit impedit nobis corporis vero delectus quasi officiis minus molestiae dignissimos consectetur distinctio sapiente reprehenderit nihil. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ratione explicabo animi cupiditate a? Beatae tempora eaque, consectetur quas praesentium minima. Minima quo recusandae eveniet unde dolorem voluptatem, veritatis suscipit!</p>
          <Section title="Links úteis">
            <Links>
              <li>
                <a>https://www.rocketseat.com.br/</a>
              </li>
              <li>
                <a>https://www.rocketseat.com.br/</a>
              </li>
            </Links>
          </Section>
          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="nodejs" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  );
}
