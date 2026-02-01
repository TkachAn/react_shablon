import s from "./sh.module.css";
//import { Headphones } from "lucide-react";
import { NormButton } from "../../../../components/base/buttons/buttons";

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
        {/* Используем твою акцентную кнопку */}
        <NormButton status="accent">Изучить компоненты</NormButton>

        {/* Твоя обычная кнопка с добавлением иконки */}
        <NormButton
          status="normal"
          style={{ display: "flex", alignItems: "center", gap: "8px" }}
    >
         
          Слушать AI-обзор
        </NormButton>
      </div>
    </div>
  );
}
/*  <Headphones size={20} /> */