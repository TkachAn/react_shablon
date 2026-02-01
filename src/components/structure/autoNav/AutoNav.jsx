import React, { useState, useEffect } from "react";
import s from "./AutoNav.module.css"; // Импортируем твои модульные стили

export function AutoNav({ containerId }) {
  const [links, setLinks] = useState([]);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const container = document.getElementById(containerId);
    if (!container) return;

    const sections = container.querySelectorAll("section[id]");
    const extractedLinks = Array.from(sections).map((section) => {
      const titleElement = section.querySelector("h2");
      return {
        id: section.id,
        title: titleElement ? titleElement.innerText : section.id,
      };
    });
    setLinks(extractedLinks);

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [containerId]);

  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        {links.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className={`${s.link} ${activeId === link.id ? s.active : ""}`}
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
