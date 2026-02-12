import { Auth, LogoType } from "../../components/bloks/bloks";
import { InpG } from "../../components/contents/forHome/sec_inp/inpG"; // Путь к вашему компоненту InpG
import { DinNav } from "../../components/contents/forNav/DinNav"; 
import { Container } from "../../components/structGrid/container/container";
import {
  Article,
  AsideLeft,
  AsideRight,
  Footer,
  Grid,
  Header,
  Hero,
  Main,
  Section,
} from "../../components/structGrid/sections/sections";
import { AutoNav } from "../../components/structure/autoNav/AutoNav";

export function Hp() {
  return (
    <>
      <Header>
        <LogoType>Логотип</LogoType>
        <DinNav />
        <Auth>Авторизация</Auth>
      </Header>
      <AutoNav />

      <Container>
        <Grid>
          <AsideLeft>Меню сайта</AsideLeft>
          <Main>
            <Hero id="hero">
              <h1>Главный баннер</h1>
            </Hero>
            <Section id={1} title="Поля ввода">
              
              <InpG />
            </Section>
            <Section id={2} title="Выборка контента2">
              <Article title="Статья внутри секции">
                Статья внутри секции
              </Article>
              <Article title="Статья внутри секции">
                Статья внутри секции
              </Article>
            </Section>
          </Main>
          <AsideRight>Дополнительная информация</AsideRight>
        </Grid>
      </Container>
      <Footer>Футер сайта</Footer>
    </>
  );
}
