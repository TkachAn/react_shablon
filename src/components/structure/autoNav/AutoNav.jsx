//"use client";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import s from "./s.module.css";

export const AutoNav = () => {
  const [navItems, setNavItems] = useState([]);

  useEffect(() => {
    // 1. Ищем все элементы, у которых есть и 'id', и 'title'
    // В твоем коде это компоненты Section
    const elements = document.querySelectorAll("[id][title]");

    // 2. Преобразуем NodeList в удобный массив объектов
    const items = Array.from(elements).map((el) => ({
      id: el.getAttribute("id"),
      title: el.getAttribute("title"),
    }));

    setNavItems(items);
  }, []); // Пустой массив зависимостей: ищем элементы один раз при монтировании

  // Если секции с заголовками не найдены, ничего не рендерим
  if (navItems.length === 0) return null;

  return (
    <nav className="auto-navigation">
      <ul style={{ listStyle: "none", display: "flex", gap: "15px" }}>
        {navItems.map((item) => (
          <li key={item.id}>
            {/* Используем Link, как ты и просил */}
            <Link
              to={item.id}
              style={{ cursor: "pointer", textDecoration: "underline" }}
              // Если используешь react-scroll, можно добавить:
              // smooth={true}
              // duration={500}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
