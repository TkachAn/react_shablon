import s from "./s.module.css";
// 1. Создаем массив с данными для клиентов
const clientsData = [
  { id: 1, svgId: "Client-1" },
  { id: 2, svgId: "Client-2" },
  { id: 3, svgId: "Client-3" },
  { id: 4, svgId: "Client-4" },
  { id: 5, svgId: "Client-5" },
  { id: 6, svgId: "Client-6" },
];

// Предполагаем, что компонент ClientsSection будет частью вашей страницы
const Clients = () => {
  return (
    <ul className={s.clients__list}>
      {/* 2. Используем метод .map() для рендеринга списка */}
      {clientsData.map((client) => (
        <li key={client.id} className={s.clients__item}>
          <a href="./index.html" className={s.clients__link}>
            <svg className={s.clients__icon}>
              {/* 3. Динамически подставляем SVG-идентификатор */}
              <use href={`./defs.svg#${client.svgId}`}></use>
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Clients;
