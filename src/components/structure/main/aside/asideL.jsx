import s from "../../s.module.css";

export function AsideLeft({ children, title, id, className }) {
  return (
    <aside id={id} className={`${s.asideLeft} ${className || ""}`}>
      {title && <h2 className={s.aside_title}>{title}</h2>}
      {children}
    </aside>
  );
}