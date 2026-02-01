import s from "../../s.module.css";
/*
export function Article({children, title}) {
    return (
        <article className={s.article}>
            <h3>{title}</h3>
            {children}
        </article>
    );
}
*/
import React from 'react'; // <-- ДОБАВЬТЕ ЭТУ СТРОКУ!
//import s from "./s.module.css";
// 1. Импорт контекста
import { HeadingLevelContext } from "../../../../context/HeadingLevelContext"; 

export function Article({ children, title }) {
  // 2. Чтение текущего уровня заголовка
  const parentLevel = React.useContext(HeadingLevelContext);

  // 3. Вычисление уровня для ТЕКУЩЕГО заголовка Section
  // (Нельзя использовать H7 и т.д., ограничиваемся H6)
  const currentHeadingLevel = Math.min(parentLevel, 6);

  // 4. Вычисление уровня для ДОЧЕРНИХ элементов (на 1 больше)
  const nextLevel = Math.min(parentLevel + 1, 6);

  // 5. Динамическое определение тега (H2, H3, H4 и т.д.)
  const HeadingTag = `h${currentHeadingLevel}`;

  return (
    <section className={s.section}>
      {/* Рендерим заголовок на основе currentHeadingLevel */}
      <HeadingTag className={s.section_title}>{title}</HeadingTag>

      {/* 6. Оборачиваем children в новый Провайдер, передавая УВЕЛИЧЕННЫЙ уровень */}
      <HeadingLevelContext.Provider value={nextLevel}>
        {children}
      </HeadingLevelContext.Provider>
    </section>
  );
}