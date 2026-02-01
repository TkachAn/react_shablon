import { Section } from "../../components/structure/main/sections/sections";
import { Header } from "../../components/structure/header/header";
import { Footer } from "../../components/structure/footer/footer";
import { Main } from "../../components/structure/main/main";
import { AsideLeft } from "../../components/structure/main/sections/sections";
import { AsideRight } from "../../components/structure/main/sections/sections";
import { SidebarNav } from "../../components/structure/header/navDetails/navigations";
import { menuData } from "../../components/structure/header/navDetails/data/menu";
/*import s from "../sP.module.css";*/

export function ContactsPage() {
  return (
    <>
      <Header />
      <Main>
        
        <AsideLeft title={"Aside Left Section"}>
          <SidebarNav menuData={menuData} />

        </AsideLeft>
        <Section title={"Contact Information"}>
          <p>Email: contact@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </Section>
        <AsideRight title={"Aside Right Section"}>
          <p>
            This is some aside content. This is some aside content. This is some
            aside content. This is some aside content. This is some aside
            content. This is some aside content.
          </p>
        </AsideRight>
      </Main>
      <Footer />
    </>
  );
}
