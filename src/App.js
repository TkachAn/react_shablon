/*// src/App.jsx
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home/HomePage.jsx";
import { ContactsPage } from "./pages/contacts/contactsPage.jsx";
import { AboutPage } from "./pages/about/about.jsx";
import { NotFound } from "./pages/notfound/notFound.jsx";
import { Hp } from "./pages/hp/hp.jsx";


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/hp" element={<Hp />} />
      <Route path="/contacts" element={<ContactsPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default App;
*/
import { Route, Routes } from "react-router-dom";
import { routes } from "./routersConfig";

function App() {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}
export default App;