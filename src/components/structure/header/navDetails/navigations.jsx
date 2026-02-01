import React, { useState } from "react";
import { Container } from "../../container/container.jsx";
import s from "./sn.module.css";

// Универсальный компонент для отрисовки структуры данных
const MenuContent = ({ menuData, onLinkClick, openIndex, setOpenIndex }) => {
  const handleSummaryClick = (e, idx) => {
    // Если передано состояние setOpenIndex, значит мы в режиме "одна открытая вкладка" (десктоп)
    if (setOpenIndex) {
      e.preventDefault();
      e.stopPropagation();
      setOpenIndex(openIndex === idx ? null : idx);
    }
  };

  return (
    <>
      {menuData.map((category, idx) => (
        <details key={idx} open={setOpenIndex ? openIndex === idx : undefined}>
          <summary onClick={(e) => handleSummaryClick(e, idx)}>
            {category.title}
          </summary>
          <ul>
            {category.items?.map((sub, sIdx) => (
              <li key={sIdx}>
                <details>
                  <summary>{sub.title}</summary>
                  <ul>
                    {sub.links.map((link, lIdx) => (
                      <li key={lIdx}>
                        <a href={link.href} onClick={onLinkClick}>
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            ))}
            {category.links?.map((link, lIdx) => (
              <li key={lIdx}>
                <a href={link.href} onClick={onLinkClick}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </details>
      ))}
    </>
  );
};

// 1. Горизонтальное меню (Десктоп)
export const HorizontalNav = ({ menuData }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const [menuKey, setMenuKey] = useState(0);

  const handleLinkClick = () => {
    setOpenIndex(null);
    setMenuKey((prev) => prev + 1);
  };

  return (
    <nav className={`${s.tabletNav} ${s.navContainer}`} key={menuKey}>
      <MenuContent
        menuData={menuData}
        onLinkClick={handleLinkClick}
        openIndex={openIndex}
        setOpenIndex={setOpenIndex}
      />
    </nav>
  );
};

// 2. Мобильное меню (Бургер)
export const MobileMenu = ({ menuData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuKey, setMenuKey] = useState(0);

  const handleLinkClick = () => {
    setIsOpen(false);
    setMenuKey((prev) => prev + 1);
  };

  return (
    <nav className={s.mobileMenu}>
      <details open={isOpen} onToggle={(e) => setIsOpen(e.target.open)}>
        <summary className={s.burgerIcon}>
          <span></span>
          <span></span>
          <span></span>
        </summary>
        <div className={`${s.mobileContent} ${s.navContainer}`} key={menuKey}>
          <Container>
            <MenuContent menuData={menuData} onLinkClick={handleLinkClick} />
          </Container>
        </div>
      </details>
    </nav>
  );
};

// 3. Вертикальное меню (Sidebar)
export const SidebarNav = ({ menuData }) => {
  const [menuKey, setMenuKey] = useState(0);
  const handleLinkClick = () => setMenuKey((prev) => prev + 1);

  return (
    <aside className={`${s.sidebarNav} ${s.navContainer}`} key={menuKey}>
      <MenuContent menuData={menuData} onLinkClick={handleLinkClick} />
    </aside>
  );
};
