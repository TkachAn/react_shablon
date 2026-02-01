import s from "./sh.module.css";

export function HeroContent() {
  return (
    <div className={s.hero_content}>
      <h1 className={s.hero_title}>
        Чистый <span>React</span> Конструктор
      </h1>
      <p className={s.hero_subtitle}>
        Интерактивная документация шаблона. Узнайте, как работают компоненты,
        используйте их для быстрой сборки семантических сайтов.
      </p>
      <div className={s.hero_actions}>
        <button className={s.btn_primary}>Изучить компоненты</button>
        <button className={s.btn_secondary}>🎧 Слушать AI-обзор</button>
      </div>
    </div>
  );
}
