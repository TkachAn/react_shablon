// src/components/structure/Section/Section.jsx
import s from "./s.module.css";

export function Hero({ children }) {
  return <section className={s.hero}>{children}</section>;
}

export function Section({ children, title, id }) {
  return (
    <section id={id} className={s.section}>
      <h2 className={s.section_title}>{title}</h2>
      {children}
    </section>
  );
}
export function Flex({ children, id }) {
  return (
    <section id={id} className={s.section_flex}>
      {children}
    </section>
  );
}
export function Article({ children, title, id }) {
  return (
    <article id={id} className={s.article}>
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
    <aside id={id} className={`${s.AsideRight} ${className || ""}`}>
      <h3 className={s.aside_title}>{title}</h3>
      {children}
    </aside>
  );
}
