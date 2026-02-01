// src/components/structure/header/header.jsx
import { Logo } from "./logo/logo.jsx";
import {
  MobileMenu,
  HorizontalNav,
  SidebarNav,
} from "./navDetails/navigations.jsx";
import { menuData } from "./navDetails/data/menu.js";
import { SignIn, SignUp } from "./auth/signin.jsx";
import s from "./s.module.css";
import { Container } from "../container/container.jsx";
import { AsideLeft } from "../main/aside/asideL.jsx"; // Импортируем твой компонент

export function Header() {
  return (
    <>
      {/* 1. СТАНДАРТНЫЙ ГОРИЗОНТАЛЬНЫЙ ХЕДЕР */}
      <header className={s.header}>
        <Container>
          <div className={s.flexbox_header}>
            <Logo />
            <HorizontalNav menuData={menuData} />
            <div className={s.auth_group}>
              <SignIn />
            </div>
            <MobileMenu menuData={menuData} />
          </div>
        </Container>
      </header>

     
    </>
  );
}
/**         
          <div className={s.flexbox_header_end}>
          
            <div className={s.header_mobile_button}>
              {isMenuOpen ? (
                <CloseIconButton onClick={toggleMenu} />
              ) : (
                <MenuIconButton onClick={toggleMenu} />
              )}
            </div>
          </div> 
              <Navbar isMobile={true} isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
          */
