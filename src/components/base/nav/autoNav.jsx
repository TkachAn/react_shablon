// src/components/contents/forNav/AutoNav.jsx
import { useEffect, useState } from "react";
import s from "./san.module.css";

export function AutoNav() {
  const [items, setItems] = useState([]);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Ищем все элементы с ID и Title внутри <main>
    const main = document.querySelector("main");
    if (main) {
      const elements = Array.from(main.querySelectorAll("[id][title]"));
      setItems(
        elements.map((el) => ({
          id: el.id,
          title: el.getAttribute("title"),
        })),
      );
    }

    const handleScroll = () => setShowButton(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (items.length === 0) return null;

  return (
    <>
      <nav className={s.autonav_container}>
        <div className={s.nav_title_mobile}>Навигация по странице:</div>
        <ul className={s.nav_list_simple}>
          {items.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className={s.nav_link_simple}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {showButton && (
        <button
          className={s.fixed_up_button}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑
        </button>
      )}
    </>
  );
}
