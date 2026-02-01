import s from "./s.module.css";

export function Advantages() {
  return (
    <>
    <h2 className={s.invisible}>Особенности</h2>
      <ul className={s.advantages__list}>
        <li className={s.advantages__feature}>
          <div className={s.advantages__group}>
            <svg className={s.advantages__icon}>
              <use href="./defs.svg#g-antenna"></use>
            </svg>
          </div>

          <div className={s.advantages__pos}>
            <h3 className={s.advantages__titlegrup}>Внимание к деталям</h3>
            <p className={s.advantages__text}>
              Идейные соображения, а также начало повседневной работы по
              формированию позиции.
            </p>
          </div>
        </li>

        <li className={s.advantages__feature}>
          <div className={s.advantages__group}>
            <svg className={s.advantages__icon}>
              <use href="./defs.svg#g-clock"></use>
            </svg>
          </div>
          <div className={s.advantages__pos}>
            <h3 className={s.advantages__titlegrup}>Пунктуальность</h3>
            <p className={s.advantages__text}>
              Задача организации, в особенности же рамки и место обучения кадров
              влечет за собой.
            </p>
          </div>
        </li>

        <li className={s.advantages__feature}>
          <div className={s.advantages__group}>
            <svg className={s.advantages__icon}>
              <use href="./defs.svg#g-diagram"></use>
            </svg>
          </div>
          <div className={s.advantages__pos}>
            <h3 className={s.advantages__titlegrup}>Планирование</h3>
            <p className={s.advantages__text}>
              Равным образом консультация с широким активом в значительной
              степени обуславливает.
            </p>
          </div>
        </li>

        <li className={s.advantages__feature}>
          <div className={s.advantages__group}>
            <svg className={s.advantages__icon}>
              <use href="./defs.svg#g-astronaut"></use>
            </svg>
          </div>
          <div className={s.advantages__pos}>
            <h3 className={s.advantages__titlegrup}>Современные технологии</h3>
            <p className={s.advantages__text}>
              Значимость этих проблем настолько очевидна, что реализация
              плановых заданий.
            </p>
          </div>
        </li>
      </ul>
    </>
  
  );
}
