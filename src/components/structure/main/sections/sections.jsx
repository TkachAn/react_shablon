// src/components/structure/Section/Section.jsx
import { Container } from "../../container/container";
import s from "./s.module.css";

export function Header({ children }) {
  return (
    <header className={s.header}>
      <Container>{children}</Container>
    </header>
  );
}

export function Main({ children }) {
  return <main className={s.main}>{children}</main>;
}

export function Hero({ children }) {
  return <section className={s.hero}>{children}</section>;
}

export function Section({ children, title, id, className }) {
  return (
    <section id={id} className={`${s.section} ${className || ""}`}>
      <h2 className={s.section_title}>{title}</h2>
      {children}
    </section>
  );
}
export function Grid({ children, id, className }) {
  return (
    <div id={id} className={`${s.grid} ${className || ""}`}>
      {children}
    </div>
  );
}
export function Flex({ children, id, className }) {
  return (
    <div id={id} className={`${s.flex} ${className || ""}`}>
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
export function AsideLeft({ children, title, id, className }) {
  return (
    <aside id={id} className={`${s.asideLeft} ${className || ""}`}>
      <h3 className={s.aside_title}>{title}</h3>
      {children}
    </aside>
  );
}

export function AsideRight({ children, title, id, className }) {
  return (
    <aside id={id} className={`${s.asideRight} ${className || ""}`}>
      <h3 className={s.aside_title}>{title}</h3>
      {children}
    </aside>
  );
}
export function Footer({ children }) {
  return (
    <footer className={s.footer}>
      <Container>{children}</Container>
    </footer>
  );
}
