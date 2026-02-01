import s from "../../structure/s.module.css";

export function Main({ children }) {
  return <main className={s.main}>{children};</main>;
}
