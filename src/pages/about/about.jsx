import { Header } from "../../components/structure/header/header";
import { Footer } from "../../components/structure/footer/footer";
import { Main } from "../../components/structure/main/main";
import { Flex, Section } from "../../components/structure/main/sections/sections";

import { Article1Content } from "./content/1articleContent";
import { AsideLeft } from "../../components/structure/main/sections/sections";
import { AsideRight } from "../../components/structure/main/sections/sections";
import { SidebarNav } from "../../components/structure/header/navDetails/navigations";
import { menuData } from "../../components/structure/header/navDetails/data/menu";

export function AboutPage() {
  return (
    <>
      <Header />
      <Main title="About Page">
        <Flex>
        <AsideLeft title={"Aside Left Section"}>
          <SidebarNav menuData={menuData} />
          <p>
            This is some aside content. This is some aside content. This is some
            aside content. This is some aside content. This is some aside
            content. This is some aside content.
          </p>
        </AsideLeft>

        <Section title={"About Section"}>
          
            <Article1Content />
          
        </Section>

        <AsideRight title={"Aside Right Section"}>
          <p>
            This is some aside content. This is some aside content. This is some
            aside content. This is some aside content. This is some aside
            content. This is some aside content.
          </p>
        </AsideRight>

        </Flex>
      </Main>
      <Footer />
    </>
  );
}
