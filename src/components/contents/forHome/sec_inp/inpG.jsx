import React from "react";
import {
  Section,
  Article,
  Flex,
  AsideLeft,
} from "../../../structGrid/sections/sections"; // Путь к вашим компонентам
import {
  TextInput,
  TextAreaInput,
  EmailInput,
  PasswordInput,
  PriceInput,
  FloatInput,
} from "../../../base/inputs/inputsGPT"; // Путь к вашей библиотеке инпутов
import s from "./si.module.css";

export const InpG = () => {
  return (
    <Section title="Документация системы ввода" id="inputs-docs">
      <Flex>
        {/* Левая панель: Навигация */}
        <AsideLeft title="Навигация">
          <nav>
            <a href="#text-fields" className={s.navLink}>
              Текстовые поля
            </a>
            <a href="#auth-fields" className={s.navLink}>
              Авторизация
            </a>
            <a href="#numeric-fields" className={s.navLink}>
              Числа и цены
            </a>
          </nav>
        </AsideLeft>

        {/* Основной контент */}
        <div style={{ flex: 1 }}>
          <p style={{ marginBottom: "30px", color: "#666" }}>
            Библиотека <b>InputsGPT</b> предоставляет компоненты с
            автоматическим форматированием и валидацией данных "на лету".
          </p>

          <Article
            title="Текстовые поля и режимы трансформации"
            id="text-fields"
          >
            <p>
              Компонент <b>TextInput</b> поддерживает уникальный пропс -
              <b>mode</b>(Default, CamelCase, Snake_case), который меняет
              поведение поля:
            </p>

            <div className={s.demoBox}>
              <p>
                <b>Default:</b> Удаляет все пробелы.
                <br></br>
                Идеально <b>для артикулов и системных ID</b>.
              </p>
              <TextInput label="Clasic Case" placeholder="enter text here" />
              <pre className={s.codeBlock}>
                {`<TextInput label="Clasic Case" placeholder="enter text here" />`}
              </pre>
            </div>
            <div className={s.demoBox}>
              <p>
                <strong>camelCase:</strong> Превращает вводимую строку в формат
                верблюжьего регистра (например, "user name" превращается в
                userName). При нажатии на пробел следующий символ автоматически
                становится заглавным.
                <br></br>
                Незаменимо <b>для генераторов кода или ключей</b>.
              </p>
              <TextInput
                label="Camel Case"
                mode="camelCase"
                placeholder="enter code generators or keys here"
              />
              <pre className={s.codeBlock}>
                {`<TextInput label="Camel Case" mode="camelCase" placeholder="enter code generators or keys here" />`}
              </pre>
            </div>
            <div className={s.demoBox}>
              <p>
                <strong>Snake_case:</strong> Автоматически заменяет все пробелы
                на нижнее подчеркивание <br></br>(например, "my file"
                превращается в my_file).
              </p>
              <TextInput
                label="Snake Case"
                mode="snake_case"
                placeholder="enter settings or environment variables here"
              />
              <pre className={s.codeBlock}>
                {`<TextInput label="Snake Case" mode="snake_case" placeholder="enter settings or environment variables here" />`}
              </pre>
              <p>
                <strong>Когда использовать:</strong>
              </p>
              <ul>
                <li>
                  Для ввода технических имен, идентификаторов, системных ключей
                  или тегов.
                </li>
                <li>
                  В формах, где нужно гарантировать отсутствие лишних пробелов
                  без ручной очистки данных.
                </li>
              </ul>
            </div>
            <div className={s.demoBox}>
              <ul>
                <li>
                  Для больших текстов используется <b>TextAreaInput</b>.
                </li>
                <li>
                  Его главная <strong>Особенность "Super Clean":</strong>. При
                  потере фокуса (onBlur)
                </li>

                <li>Удаляются пробелы по краям строки.</li>
                <li>
                  Любые последовательности из нескольких пробелов или переносов
                  строк внутри текста заменяются на один пробел.
                </li>
                <li>гарантируя компактность данных.</li>
              </ul>
              {/**он схлопывает лишние пробелы и переносы строк в
                один, */}
              <TextAreaInput
                label="Super Clean Area"
                placeholder="Лишние пробелы исчезнут при Blur"
                rows={2}
              />
              <pre className={s.codeBlock}>
                {`<TextAreaInput label="Super Clean Area" placeholder="Лишние пробелы исчезнут при Blur" rows={2} />`}
              </pre>
              <p>
                <strong>Когда использовать:</strong>
              </p>
              <ul>
                <li>
                  Для ввода комментариев, описаний или отзывов, которые позже
                  будут отображаться в компактном виде.
                </li>
                <li>
                  Чтобы предотвратить "раздувание" базы данных из-за случайных
                  многократных нажатий Enter или пробела пользователем.
                </li>
              </ul>
            </div>
          </Article>

          {/* --- БЛОК БЕЗОПАСНОСТИ В ТАКОМ ЖЕ СТИЛЕ --- */}
          <Article title="Email и Безопасность" id="auth-fields">
            <p>
              Формы регистрации часто страдают от опечаток. Чтобы решить это, в
              EmailInput и PasswordInput встроен блок ConfirmBlock. Двойная
              проверка:
            </p>
            <p>
              При включении параметра <b>confirm</b>, под основным полем
              появляется второе. Компонент не пропустит форму, пока значения не
              совпадут.
            </p>

            <p>Компоненты со встроенной валидацией и защитой от опечаток.</p>

            <div className={s.demoBox}>
              <p>
                <b>EmailInput:</b> Авто-удаление пробелов и проверка формата @.
              </p>
              <EmailInput label="Ваш Email" placeholder="example@mail.com" />
              <pre className={s.codeBlock}>
                {`<EmailInput label="Email" placeholder="example@mail.com" />`}
              </pre>
              <p>
                <b>EmailInput + Confirm Mode:</b> Добавляет поле проверки для
                исключения ошибок.
              </p>
              <EmailInput
                label="Ваш Email"
                placeholder="example@mail.com"
                confirm={true}
              />
              <pre className={s.codeBlock}>
                {`<EmailInput label="Email" placeholder="example@mail.com" confirm={true} />`}
              </pre>
            </div>

            <div className={s.demoBox}>
              <p>
                <b>PasswordInput:</b>Контроль видимости: Пароль оснащен
                переключателем (👁️), что повышает удобство (UX).
              </p>
              <p>
                Встроенная валидация: Поля уже "знают", как выглядит правильный
                email и какой должен быть пароль (минимум 8 символов, минимум
                одна заглавная, минимум одна строчная и минимум одна цифра.).
              </p>
              <PasswordInput label="Введите пароль" />
              <pre className={s.codeBlock}>
                {`<PasswordInput label="Пароль" confirm={true} />`}
              </pre>
              <p>
                <b>Confirm Mode:</b> Добавляет поле проверки для исключения
                ошибок.
              </p>
              <PasswordInput label="Новый пароль" confirm={true} />
              <pre className={s.codeBlock}>
                {`<PasswordInput label="Пароль" confirm={true} />`}
              </pre>
            </div>
          </Article>

          {/* --- БЛОК ЧИСЕЛ В ТАКОМ ЖЕ СТИЛЕ --- */}
          <Article title="Финансовые и числовые данные" id="numeric-fields">
            <div className={s.demoBox}>
              <p>
                <b>PriceInput:</b> Форматирует ввод в денежный вид (1 000.00).
              </p>
              <PriceInput label="Стоимость услуги" />
              <pre className={s.codeBlock}>{`<PriceInput label="Цена" />`}</pre>
            </div>

            <div className={s.demoBox}>
              <p>
                <b>FloatInput:</b> Строгий ввод чисел с плавающей точкой.
              </p>
              <FloatInput label="Коэффициент" placeholder="0.00" />
              <pre className={s.codeBlock}>
                {`<FloatInput label="Вес" placeholder="0.00" />`}
              </pre>
            </div>
          </Article>
        </div>
      </Flex>
    </Section>
  );
};
