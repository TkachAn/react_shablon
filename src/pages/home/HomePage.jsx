import { Header } from "../../components/structure/header/header";
import { Footer } from "../../components/structure/footer/footer";
import { Main } from "../../components/structure/main/main";
import { Hero } from "../../components/structure/main/hero/hero";
import {
  AsideLeft,
  Section,
} from "../../components/structure/main/sections/sections";

import { HeroContent } from "./content/hero/HeroContent";
import Clients from "./content/clients/clients";
import { Craft } from "./content/craft/craft";
import Developers from "./content/developers/developers";
import { Container } from "../../components/structure/container/container";
import { Flex } from "../../components/structure/main/sections/sections";
//import { SidePanel } from "../../components/structure/header/header_v";
import { AnatomyOfaPage } from "./content/anatomy/AnatomyOfaPage";
//import { AutoNav } from "../../components/structure/autoNav/AutoNav";
import { SidePanel } from "./content/sidePanel/SidePanel";

export function HomePage() {
  return (
    <>
      <Header id="header" />

      <Container>
        <Flex id="main-layout">
          <SidePanel />
          <Main>
            <Hero id="hero">
              <HeroContent />
            </Hero>

            <Section id="AnatomyOfaPage">
              <AnatomyOfaPage />
            </Section>
            <Section title="Наши услуги" id="services">
              <Craft />
            </Section>
            <Section title="Наши клиенты" id="clients">
              <Clients />
            </Section>
            <Section title="Наша команда разработчиков" id="team">
              <Developers />
            </Section>
          </Main>
        </Flex>
      </Container>
      <Footer />
    </>
  );
}
