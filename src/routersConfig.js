import { HomePage } from "./pages/home/HomePage.jsx";
import { ContactsPage } from "./pages/contacts/contactsPage.jsx";
import { AboutPage } from "./pages/about/about.jsx";
import { Hp } from "./pages/hp/hp.jsx";
import { NotFound } from "./pages/notfound/notFound.jsx";

export const routes = [
  {
    path: "/",
    element: <HomePage />,
    title: "Главная",
    showInMenu: true,
  },
  {
    path: "/hp",
    element: <Hp />,
    title: "Личный кабинет",
    showInMenu: true,
  },
  {
    path: "/contacts",
    element: <ContactsPage />,
    title: "Контакты",
    showInMenu: true,
  },
  {
    path: "/about",
    element: <AboutPage />,
    title: "О нас",
    showInMenu: true,
  },
  {
    path: "*",
    element: <NotFound />,
    title: "404",
    showInMenu: false,
  },
];
