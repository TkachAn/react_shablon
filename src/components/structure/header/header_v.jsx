// src/components/structure/header/header.jsx/
/*
import { Logo } from "./logo/logo.jsx";
import { NavbarV } from "./navbar/nav_v.jsx";
import { SignIn } from "./auth/signin.jsx";

import s from "../../structure/s.module.css";


export function HeaderV() {
  return (
    <header className={s.header_v}>
  
        <div className={s.box_header}>
          <Logo />
          <NavbarV />
          <SignIn />
        </div>

    </header>
  );
}*/
import { Logo } from "../header/logo/logo";
import { SidebarNav } from "../header/navDetails/navigations";
import { menuData } from "../header/navDetails/data/menu";
import { SignIn, SignUp } from "../header/auth/signin";
import { AsideLeft } from "../main/sections/sections";
import s from "./sv.module.css";

export function SidePanel() {
  return (
    <AsideLeft id="side-navigation" title="" className={s.asideLeft}>
      <div className={s.sideHeaderContent}>
        <Logo className={s.logoInPanel} />

        <div className={s.sideNavSection}>
          <SidebarNav menuData={menuData} />
        </div>

        <div className={s.sideAuthSection}>
          <SignIn />
          <SignUp />
        </div>
      </div>
    </AsideLeft>
  );
}