// src/App.jsx
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home/HomePage.jsx";
import { ContactsPage } from "./pages/contacts/contactsPage.jsx";
import { AboutPage } from "./pages/about/about.jsx";
import { NotFound } from "./pages/notfound/notFound.jsx";


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contacts" element={<ContactsPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default App;
