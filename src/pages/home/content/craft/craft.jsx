import s from "./s.module.css";

export const Craft = () => {
  return (
    <ul className={s.gallery}>
      <li className={s.item}>
        <img
          src="./images/img1.jpg"
          alt="рабочее место разработчика ПО 1"
          width="370"
        />
        <div className={s.bgTitle}>
          <p className={s.imgTitle}>Десктопные приложения</p>
        </div>
      </li>
      <li className={s.item}>
        <img
          src="./images/img2.jpg"
          alt="рабочее место разработчика ПО 2"
          width="370"
        />
        <div className={s.bgTitle}>
          <p className={s.imgTitle}>Мобильные приложения</p>
        </div>
      </li>
      <li className={s.item}>
        <img
          src="./images/img3.jpg"
          alt="рабочее место разработчика ПО 3"
          width="370"
        />
        <div className={s.bgTitle}>
          <p className={s.imgTitle}>Дизайнерские решения</p>
        </div>
      </li>
    </ul>
  );
};
