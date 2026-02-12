// src/components/strucGrig/Section/Section.jsx
import { Container } from "../../structGrid/container/container";
import s from "./s.module.css";

export function Header({ children, id }) {
  return (
    <header id={id}>
      <Container className={s.headerSet}>
        <div className={s.header}>{children}</div>
      </Container>
    </header>
  );
}
/*
export function Main({ children }) {
  return <main className={s.main}>{children}</main>;
}

export function Hero({ children }) {
  return <section className={s.hero}>{children}</section>;
}
*/

export function Main({ children, title = "MAIN" }) {
  return (
    <main className={s.main} title={title}>
      {children}
    </main>
  );
}

export function Hero({ children, title = "HERO" }) {
  return (
    <section className={s.hero} title={title}>
      {children}
    </section>
  );
}

export function Section({ children, title, id, className }) {
  return (
    <section id={id} className={`${s.section} ${className || ""}`}>
      <h2 className={s.section_title}>{title}</h2>
      {children}
    </section>
  );
}
export function Grid({ children, id, className, title = "GRID" }) {
  return (
    <div id={id} title={title} className={`${s.grid} ${className || ""}`}>
      {children}
    </div>
  );
}
/*
export function Flex({ children, id, className }) {
  return (
    <div id={id} className={`${s.flex} ${className || ""}`}>
      {children}
    </div>
  );
}
*/

export function Flex({ children, id, className, title = "FLEX" }) {
  return (
    <div id={id} title={title} className={`${s.flex} ${className || ""}`}>
      {children}
    </div>
  );
}

export function Article({ children, title, id, className }) {
  return (
    <article id={id} className={`${s.article} ${className || ""}`}>
      <h3 className={s.article_title}>{title}</h3>
      {children}
    </article>
  );
}
/*
export function AsideLeft({ children, title, id, className }) {
  return (
    <aside id={id} className={`${s.asideLeft} ${className || ""}`}>
      <h3 className={s.aside_title}>{title}</h3>
      {children}
    </aside>
  );
}
  */

export function AsideLeft({ children, title, id, className }) {
  return (
    <aside
      id={id}
      title={title}
      className={`${s.asideLeft} ${className || ""}`}
    >
      <h3 className={s.aside_title}>{title}</h3>
      {children}
    </aside>
  );
}

/*
export function AsideRight({ children, title, id, className }) {
  return (
    <aside id={id} className={`${s.asideRight} ${className || ""}`}>
      <h3 className={s.aside_title}>{title}</h3>
      {children}
    </aside>
  );
}
*/

export function AsideRight({ children, title, id, className }) {
  return (
    <aside
      id={id}
      title={title}
      className={`${s.asideRight} ${className || ""}`}
    >
      <h3 className={s.aside_title}>{title}</h3>
      {children}
    </aside>
  );
}

/*
export function Footer({ children }) {
  return (
    <footer className={s.footer}>
      <Container>{children}</Container>
    </footer>
  );
}*/
export function Footer({ children, title = "FOOTER" }) {
  return (
    <footer className={s.footer} title={title}>
      <Container>{children}</Container>
    </footer>
  );
}