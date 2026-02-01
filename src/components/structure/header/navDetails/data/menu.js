export const menuData = [
  {
    title: "Главная",
    // Выпадающий список якорей для HomePage
    items: [
      {
        title: "О проекте",
        links: [
          { label: "В начало", href: "/" },
          { label: "Преимущества", href: "/#advantages" },
          { label: "Наши услуги", href: "/#services" },
          { label: "Наши клиенты", href: "/#clients" },
          { label: "Наша команда", href: "/#team" },
        ],
      },
      {
        title: "Деятельность",
        links: [
          { label: "Услуги", href: "#services" },
          { label: "Команда", href: "#team" },
        ],
      },
    ],
  },
  {
    title: "О нас",
    // Сразу ссылки, если на странице About не нужно сложное меню
    links: [
      { label: "Наша миссия", href: "/about#mission" },
      { label: "История", href: "/about#history" },
    ],
  },
  {
    title: "Контакты",
    links: [
      { label: "Написать нам", href: "/contacts#feedback" },
      { label: "Офисы", href: "/contacts#map" },
    ],
  },
];
// menu.js
export const homeMenu = [
  {
    id: 1,
    title: "О компании",
    submenu: [
      {
        id: "sub_about",
        title: "Инфо",
        items: [
          { title: "Преимущества", link: "#advantages" },
          { title: "О нас", link: "/about" },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Услуги", // Секция Craft
    submenu: [
      {
        id: "sub_craft",
        title: "Разработка",
        items: [
          { title: "Десктопные приложения", link: "#services" },
          { title: "Мобильные приложения", link: "#services" },
          { title: "Дизайнерские решения", link: "#services" },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Команда", // Секция Developers
    submenu: [
      {
        id: "sub_devs",
        title: "Наши специалисты",
        items: [
          { title: "Developers", link: "#team" },
          { title: "Контакты", link: "/contacts" },
        ],
      },
    ],
  },
];
