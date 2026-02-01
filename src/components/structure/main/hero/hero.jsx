import s from "../../s.module.css";

export function Hero({ children }) {
  return (
    <section className={s.hero}>
      {children}
    </section>
  );
}
