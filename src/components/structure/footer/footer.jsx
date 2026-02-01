import { Container } from "../container/container";
import { Address } from "./address/address";
import { Contact } from "./contacts/contact";
import s from "./s.module.css";

export function Footer() {
  return (
    <footer className={s.footer}>
      <Container>
        <div className={s.flexbox}>
          <Address />
          <Contact />
        </div>
        <p className={s.copyright}>© 2025 LogoTYPE. All rights reserved.</p>
      </Container>
    </footer>
  );
}
