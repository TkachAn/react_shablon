import s from "./hero.module.css";
import { Container } from "../../../../components/structure/container/container";
/*
export function HeroContent() {
  return (
    <div className={s.hero}>
      <Container>
        <h1 className={s.hero__title}>
          Эффективные решения <br />
          для вашего бизнеса
        </h1>
        <button className={s.hero__btn} type="button" data-modal-open>
          Заказать услугу
        </button>
      </Container>
    </div>
  );
}*/
// HeroContent.jsx

export function HeroContent() {
  return (
    <div className={s.hero}>
      
      {/* 1. Добавляем компонент <picture> для адаптивного фона */}
      <picture className={s.hero__background}>
        {/*
          Этот <source> будет выбран для больших экранов (>= 769px) и браузеров, 
          поддерживающих WebP, с учетом плотности пикселей (1x и 2x).
        */}
        <source 
          media="(min-width: 769px)"
          type="image/webp"
          // Адаптивные дескрипторы плотности
          srcset="/images/hero/Img_hero_1600x600.webp 1x, 
                  /images/hero/Img_hero_3200x1200.webp 2x" 
        />
        
        {/*
          Этот <source> будет выбран для мобильных/планшетов (<= 768px). 
          Используем дескрипторы ширины (w).
        */}
        <source 
          type="image/webp"
          // Адаптивные дескрипторы ширины
          srcset="/images/hero/Img_hero_480x400.webp 480w, 
                  /images/hero/Img_hero_768x400.webp 768w,
                  /images/hero/Img_hero_960x800.webp 960w,
                  /images/hero/Img_hero_1536x800.webp 1536w"
          // Сообщаем браузеру, что изображение занимает всю ширину вьюпорта
          sizes="100vw"
        />

        {/* Обязательный <img> как запасной вариант для всех случаев (Fallback) */}
        <img 
          src="/images/hero/Img_hero_1600x600_1x.jpg" 
          alt="Команда инженеров, работающих над 3D-моделью"
          className={s.hero__image}
        />
      </picture>

      {/* 2. Контент оборачиваем в отдельный div, чтобы он был поверх фона */}
      <div className={s.hero__content}>
        <Container>
          <h1 className={s.hero__title}>
            Эффективные решения <br />
            для вашего бизнеса
          </h1>
          <button className={s.hero__btn} type="button" data-modal-open>
            Заказать услугу
          </button>
        </Container>
      </div>
    </div>
  );
}