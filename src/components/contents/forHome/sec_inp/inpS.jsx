/*
 import {
  TextInput,
  TextAreaInput,
  SelectInput,
  EmailInput,
  PasswordInput,
  PriceInput,
  DigitsInput
} from "../../../base/inputs/inputsGPT";


export const InpS = () => {
  return (
    <div>
      <DigitsInput label="Только цифры" placeholder="Введите цифры" />
      <DigitsInput
        label="Дробное число"
        placeholder="Введите дробное число"
        decimal={true}
      />
      <TextInput label="Имя" placeholder="Введите имя" />
      <TextInput label="Логин" placeholder="Введите логин" mode="camelCase" />
      <TextInput label="Имя_пользователя" placeholder="Введите имя пользователя" mode="snake_case" />
      <TextAreaInput label="Описание" placeholder="Введите описание" />
      <SelectInput
        label="Выберите опцию"
        options={["Опция 1", "Опция 2", "Опция 3"]}
      />
      <EmailInput label="Email" placeholder="Введите email" />
      <PasswordInput label="Пароль" placeholder="Введите пароль" />
      <PriceInput label="Цена" placeholder="Введите цену" />
      <EmailInput label="Email" placeholder="Введите email" confirm={true} />
      <PasswordInput
        label="Подтверждение пароля"
        placeholder="Подтвердите пароль"
        confirm={true}
      />
    </div>
  );
}*/
/*
import React from "react";
import s from "./ingpt.module.css";
import {
  TextInput,
  TextAreaInput,
  SelectInput,
  EmailInput,
  PasswordInput,
  PriceInput,
  DigitsInput
} from "../../../base/inputs/inputsGPT";

/* Универсальный компонент секции для документации *//*
const DocBlock = ({ title, subTitle, description, features, codeExample, children }) => (
  <div style={{ 
    marginBottom: '60px', 
    padding: '30px', 
    border: '1px solid #eef2f6', 
    borderRadius: '16px',
    background: '#fff',
    boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
  }}>
    <h2 style={{ color: '#1a73e8', marginTop: 0, fontSize: '24px' }}>{title}</h2>
    <h4 style={{ color: '#5f6368', marginBottom: '15px' }}>{subTitle}</h4>
    
    <p style={{ color: '#3c4043', fontSize: '16px', lineHeight: '1.6' }}>{description}</p>
    
    <div style={{ margin: '20px 0' }}>
      <h5 style={{ marginBottom: '10px', color: '#202124' }}>Ключевые возможности:</h5>
      <ul style={{ paddingLeft: '20px', color: '#5f6368', fontSize: '14px', lineHeight: '1.8' }}>
        {features.map((f, i) => <li key={i}>{f}</li>)}
      </ul>
    </div>

    <div style={{ 
      padding: '25px', 
      background: '#f8f9fa', 
      borderRadius: '12px', 
      border: '1px solid #dadce0',
      margin: '25px 0' 
    }}>
      <h5 style={{ marginTop: 0, color: '#1a73e8', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
        Живой пример (Интерактив):
      </h5>
      <div style={{ marginTop: '15px' }}>{children}</div>
    </div>

    <div style={{ background: '#202124', padding: '20px', borderRadius: '12px', overflowX: 'auto' }}>
      <h5 style={{ marginTop: 0, color: '#9aa0a6', fontSize: '11px', textTransform: 'uppercase' }}>
        Синтаксис и параметры:
      </h5>
      <pre style={{ margin: 0, color: '#a1efe4', fontSize: '13px', fontFamily: 'Fira Code, monospace' }}>
        <code>{codeExample}</code>
      </pre>
    </div>
  </div>
);

export const InpS = () => {
  return (
    <div style={{ maxWidth: '1000px', margin: '50px auto', padding: '0 20px', fontFamily: '"Segoe UI", Roboto, Helvetica, sans-serif' }}>
      <header style={{ textAlign: 'center', marginBottom: '80px' }}>
        <h1 style={{ fontSize: '42px', color: '#202124', fontWeight: '800' }}>Интеллектуальная система ввода</h1>
        <p style={{ color: '#5f6368', fontSize: '18px', maxWidth: '700px', margin: '20px auto' }}>
          Полное руководство по использованию библиотеки компонентов <strong>inputsGPT</strong>. 
          Все поля оснащены автоматической нормализацией данных и защитой от ошибок ввода.
        </p>
      </header>

      {/* 1. TEXT INPUT *//*}
      <DocBlock 
        title="TextInput — Текстовый процессор"
        subTitle="Контроль каждого символа"
        description="Универсальное поле для ввода строк, которое автоматически блокирует 'мусорные' пробелы. Идеально подходит для создания чистых логинов, системных имен и заголовков."
        features={[
          "Блокировка пробелов: В стандартном режиме ввод пробела физически невозможен.",
          "Режим camelCase: Автоматически делает заглавной букву после нажатого пробела (удобно для кода и ID).",
          "Режим snake_case: Превращает все пробелы в нижнее подчеркивание в реальном времени.",
          "Авто-очистка: Удаляет случайные лишние символы при вставке из буфера обмена."
        ]}
        codeExample={`// Режимы ввода:\n<TextInput label="Логин" mode="camelCase" /> // camelCaseMode\n<TextInput label="Код" mode="snake_case" /> // snake_case_mode\n<TextInput label="Имя" /> // Обычный (без пробелов)`}
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <TextInput label="Имя пользователя" placeholder="Попробуйте пробел..." />
          <TextInput label="Camel Case" mode="camelCase" placeholder="my variable name" />
          <TextInput label="Snake Case" mode="snake_case" placeholder="system record id" />
        </div>
      </DocBlock>

      {/* 2. TEXTAREA *//*}
      <DocBlock 
        title="TextAreaInput — Интеллектуальный редактор"
        subTitle="Чистота больших текстов"
        description="Компонент для многострочного ввода, который сам заботится о типографике. Он не позволяет пользователю оставить некрасивые пустоты или беспорядочные переносы строк."
        features={[
          "Алгоритм Super Clean: При выходе из поля (onBlur) запускается глубокая чистка.",
          "Сжатие пробелов: Любое количество идущих подряд пробелов превращается в один.",
          "Чистка переносов: Заменяет тройные и более переносы строк на аккуратный разделитель.",
          "Trim: Полное удаление пустых мест в самом начале и в самом конце сообщения."
        ]}
        codeExample={`<TextAreaInput \n  label="Биография" \n  rows={5} \n  placeholder="Текст будет очищен при Blur" \n/>`}
      >
        <TextAreaInput label="Ваше сообщение" placeholder="Введите текст с кучей пробелов и кликните мимо..." />
      </DocBlock>

      {/* 3. DIGITS & FLOAT *//*}
      <DocBlock 
        title="Digits & Float — Математическая точность"
        subTitle="Никаких букв в числах"
        description="Специализированные поля для работы с данными. В отличие от стандартных 'number', эти поля гарантируют чистоту формата на уровне символов."
        features={[
          "Digits: Строго целые числа. Блокирует любые знаки кроме цифр.",
          "Float: Полноценная поддержка дробей. Принимает запятую, но сам конвертирует её в точку.",
          "Zero Protection: Не позволяет вводить некорректные значения типа '0005' — автоматически исправляет на '5'.",
          "InputMode: Оптимизировано для мобильных устройств (вызывает цифровую клавиатуру)."
        ]}
        codeExample={`<DigitsInput label="Целое" /> \n<DigitsInput label="Дробное" decimal={true} />`}
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <DigitsInput label="Количество (целое)" placeholder="Только 0-9" />
          <DigitsInput label="Вес (дробное)" decimal={true} placeholder="Можно 0,5 или 0.5" />
        </div>
      </DocBlock>

      {/* 4. SECURITY *//*}
      <DocBlock 
        title="Email & Password — Тройная защита"
        subTitle="Конфиденциальность и валидация"
        description="Комплексные решения для аутентификации. Содержат встроенные регулярные выражения для проверки данных и механизмы визуального контроля."
        features={[
          "Eye Toggle: Переключение видимости пароля с понятными иконками (👁️/🙈).",
          "Confirm Mode: Если включен проп confirm, создается скрытое поле проверки. Основное поле не будет валидным, пока значения не станут идентичны.",
          "Email Validation: Проверка структуры адреса (наличие @ и домена).",
          "Password Security: Встроенная проверка минимальной длины (8 символов)."
        ]}
        codeExample={`<EmailInput confirm={true} /> \n<PasswordInput confirm={true} />`}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <EmailInput label="Электронная почта" placeholder="mail@example.com" confirm={true} />
          <PasswordInput label="Ваш пароль" placeholder="••••••••" confirm={true} />
        </div>
      </DocBlock>

      {/* 5. PRICE *//*}
      <DocBlock 
        title="PriceInput — Финансовая маска"
        subTitle="Форматирование валюты в реальном времени"
        description="Поле, которое превращает набор цифр в читаемую цену. Оно автоматически расставляет пробелы между тысячами и фиксирует копейки."
        features={[
          "Smart Formatting: При вводе '1500000' отобразит '1 500 000.00'.",
          "Data Return: Родителю всегда возвращается чистый Number (например, 1500.5), а не строка с пробелами.",
          "Precision: Работает по принципу банковской системы (хранит данные в копейках для точности)."
        ]}
        codeExample={`<PriceInput \n  label="Цена за единицу" \n  defaultValue={1000} \n  onChange={(val) => console.log(val)} \n/>`}
      >
        <PriceInput label="Сумма транзакции" />
      </DocBlock>

      <footer style={{ 
        textAlign: 'center', 
        color: '#9aa0a6', 
        fontSize: '14px', 
        marginTop: '100px', 
        paddingBottom: '40px',
        borderTop: '1px solid #f1f3f4',
        paddingTop: '30px'
      }}>
        Раздел технической документации API v2.0 • {new Date().getFullYear()}
      </footer>
    </div>
  );
}
*/
import React from "react";
import s from "./ingpt.module.css";
import {
  TextInput,
  TextAreaInput,
  SelectInput,
  EmailInput,
  PasswordInput,
  PriceInput,
  DigitsInput,
  FloatInput
} from "../../../base/inputs/inputsGPT";

/* Компонент для строки в таблице трансформации */
const TransformRow = ({ from, to, note }) => (
  <div className={s.badgeRow}>
    <span className={s.inputBadge}>{from}</span>
    <span>→</span>
    <span className={s.outputBadge}>{to}</span>
    <span className={s.docDesc}>— {note}</span>
  </div>
);

export const InpS = () => {
  return (
    <div className={s.docContainer}>
      
      {/* 1. TEXT INPUT */}
      <section className={s.docBlock}>
        <h2 className={s.docTitle}>TextInput — Текстовый процессор</h2>
        <h4 className={s.docSubTitle}>Контроль каждого символа</h4>
        <p className={s.docDescription}>
          Универсальное поле для ввода строк, которое автоматически блокирует «мусорные» пробелы. 
          Идеально подходит для создания чистых логинов, системных имен и заголовков.
        </p>
        
        <ul className={s.featureList}>
          <li><strong>Блокировка пробелов:</strong> В стандартном режиме ввод пробела физически невозможен.</li>
          <li><strong>Режим CamelCase:</strong> Автоматическое создание заглавной буквы после пробела.</li>
          <li><strong>Режим Snake_case:</strong> Превращает все пробелы в нижнее подчеркивание.</li>
        </ul>

        <div className={s.transformationTable}>
          <TransformRow from="Имя ␣ Пользователя" to="ИмяПользователя" note="Default" />
          <TransformRow from="my ␣ var" to="myVar" note="camelCase" />
          <TransformRow from="system ␣ id" to="system_id" note="snake_case" />
        </div>

        <div className={s.exampleArea}>
          <div className={s.gridTwo}>
            <TextInput label="Имя_пользователя" placeholder="Пробелы запрещены" />
            <TextInput label="Логин" mode="camelCase" placeholder="ivan ivanov -> ivanIvanov" />
            <TextInput label="Код" mode="snake_case" placeholder="user name -> user_name" />
          </div>
        </div>

        <div className={s.codeBox}>
          <span className={s.codeLabel}>Синтаксис:</span>
          <pre>
{`<TextInput label="Имя_пользователя" />
<TextInput label="Логин" mode="camelCase" />
<TextInput label="Код" mode="snake_case" />`}
          </pre>
        </div>
      </section>

      {/* 2. TEXTAREA */}
      <section className={s.docBlock}>
        <h2 className={s.docTitle}>TextAreaInput — Интеллектуальный редактор</h2>
        <p className={s.docDescription}>
          Компонент с алгоритмом <strong>Super Clean</strong>. Удаляет лишние пробелы и 
          исправляет переносы строк при потере фокуса (onBlur).
        </p>
        
        <div className={s.exampleArea}>
          <TextAreaInput label="Описание" placeholder="Введите текст и кликните мимо..." />
        </div>

        <div className={s.codeBox}>
          <pre>{`<TextAreaInput label="Описание" rows={5} />`}</pre>
        </div>
      </section>

      {/* 3. DIGITS & FLOAT */}
      <section className={s.docBlock}>
        <h2 className={s.docTitle}>Digits & Float — Математическая точность</h2>
        <p className={s.docDescription}>
          Строгая фильтрация. Блокирует буквы и исправляет ошибки формата (например, "005" станет "5").
        </p>

        <div className={s.transformationTable}>
          <TransformRow from="007" to="7" note="Zero Protection" />
          <TransformRow from="10,5" to="10.5" note="Auto-dot" />
        </div>

        <div className={s.exampleArea}>
          <div className={s.gridTwo}>
            <DigitsInput label="Только_цифры" placeholder="123..." />
            <FloatInput label="Дробное_число" placeholder="10.5" />
          </div>
        </div>

        <div className={s.codeBox}>
          <pre>
{`<DigitsInput label="Только_цифры" />
<FloatInput label="Дробное_число" />`}
          </pre>
        </div>
      </section>

      {/* 4. PRICE */}
      <section className={s.docBlock}>
        <h2 className={s.docTitle}>PriceInput — Финансовая маска</h2>
        <p className={s.docDescription}>
          Разделяет тысячи пробелами и фиксирует два знака после запятой. Возвращает чистое число.
        </p>

        <div className={s.exampleArea}>
          <PriceInput label="Цена" />
        </div>

        <div className={s.codeBox}>
          <pre>{`<PriceInput label="Цена" />`}</pre>
        </div>
      </section>

    </div>
  );
};