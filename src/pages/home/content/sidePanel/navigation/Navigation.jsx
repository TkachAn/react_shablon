
import { useEffect, useState } from "react";
import s from "./nav.module.css";

export function AutoNav() {
  const [navTree, setNavTree] = useState([]);

  useEffect(() => {
    // Функция для поиска секций внутри элемента
    const getSections = (container) => {
      // Ищем только прямых потомков-секций, чтобы не дублировать
      const elements = Array.from(
        container.querySelectorAll(
          ":scope > section[id], :scope > * > section[id]",
        ),
      );

      return elements.map((sec) => ({
        id: sec.id,
        title: sec.getAttribute("title") || sec.id,
        // Рекурсивно ищем секции внутри этой секции
        children: getSections(sec),
      }));
    };

    // Начинаем поиск с основного контента (Main)
    const mainElement = document.querySelector("main");
    if (mainElement) {
      setNavTree(getSections(mainElement));
    }
  }, []);

  // Рекурсивный рендер списка
  const renderList = (items, level = 0) => (
    <ul
      className={s.nav_list}
      style={{ paddingLeft: level > 0 ? "15px" : "0" }}
    >
      {items.map((item) => (
        <li key={item.id} className={s.nav_item}>
          <a
            href={`#${item.id}`}
            className={`${s.nav_link} ${level > 0 ? s.sub_link : ""}`}
          >
            {item.title}
          </a>
          {item.children.length > 0 && renderList(item.children, level + 1)}
        </li>
      ))}
    </ul>
  );

  return (
    <nav className={s.autonav}>
      <h4 className={s.nav_title}>Структура сайта</h4>
      {navTree.length > 0 ? (
        renderList(navTree)
      ) : (
        <p className={s.empty}>Секции не найдены</p>
      )}
    </nav>
  );
}
