import React from "react";
// Предполагаем, что s содержит стили social__icon, social и т.д.
import s from "./TeamCard.module.css";
import { socialLinks } from "./data"; // Импортируем данные соцсетей

const SocialLinks = () => {
  // Ваш HTML использует классы social, social__icon и т.д.
  return (
    <div className={s.teamCard__socPos}>
      <ul className={s.teamCard__social + " " + s.social}>
        {socialLinks.map((link) => (
          <li key={link.id}>
            <a
              href={link.href}
              className={s.social__link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className={`${s.social__icon} ${s[link.icon]}`}>
                <use href={`./defs.svg#${link.icon}`}></use>
              </svg>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
