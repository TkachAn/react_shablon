import React, { useState } from "react";
import { Link } from "react-router-dom";
import { routes } from "../../../routersConfig"; 
import { MenuIconButton, CloseIconButton } from "../../base/buttons/IconButtons"; //
import s from "./sdn.module.css"; //

export function DinNav() {
  const [isOpen, setIsOpen] = useState(false);

  // Берем только те страницы, которые должны быть в меню
  const menuItems = routes.filter((route) => route.showInMenu);

  return (
    <nav className={s.nav}>
      {/* Кнопки переключения из IconButtons.jsx */}
      <div className={s.burgerWrapper}>
        {isOpen ? (
          <CloseIconButton onClick={() => setIsOpen(false)} />
        ) : (
          <MenuIconButton onClick={() => setIsOpen(true)} />
        )}
      </div>

      {/* Меню, которое теперь реально перекрывает экран */}
      <ul className={`${s.menuList} ${isOpen ? s.menuOpen : ""}`}>
        {menuItems.map((item) => (
          <li key={item.path} className={s.menuItem}>
            <Link
              to={item.path}
              className={s.link}
              onClick={() => setIsOpen(false)} // Закрываем при клике на ссылку
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
