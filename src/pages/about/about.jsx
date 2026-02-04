import { Auth, LogoType, Navigation } from "../../components/bloks/bloks";
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
export function AboutPage() {
  return (
    <>
      <Header>
        <LogoType>Логотип</LogoType>
        <DinNav />
        <Auth>Авторизация</Auth>
      </Header>
      <Container>
        <Grid>
          <AsideLeft title={"Aside Left Section"}>
            
            <p>
              This is some aside content. This is some aside content. This is
              some aside content. This is some aside content. This is some aside
              content. This is some aside content.
            </p>
          </AsideLeft>

          <Section title={"About Section"}>
            Article1Content
          </Section>

          <AsideRight title={"Aside Right Section"}>
            <p>
              This is some aside content. This is some aside content. This is
              some aside content. This is some aside content. This is some aside
              content. This is some aside content.
            </p>
          </AsideRight>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
