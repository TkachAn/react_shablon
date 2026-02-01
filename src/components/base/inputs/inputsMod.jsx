// src/elem/inputs/inputs.jsx
"use client";

import React, { useState, useEffect, useCallback} from "react";
import styles from "./s.module.css";

// 1. Базовый компонент для обертки и стилизации (Uncontrolled/External Control)
// Используется для полей, где управление значением и изменениями полностью внешнее (например, PassInput, NumInput, TextInput, SelectInput)
const BaseInput = ({
  label,
  className = "",
  status = "normal", // normal | accent | blocked | error
  errorMessage, // Отображаемое сообщение об ошибке
  id,
  children,
}) => {
  const isBlocked = status === "blocked";
  const isError = status === "error" || !!errorMessage; // Если есть errorMessage, считаем, что статус "error"

  return (
    <div className={`${styles.inputWrapper} ${className}`}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      {React.cloneElement(children, {
        className: `${children.props.className || ""} ${styles[status]} ${
          isError ? styles.error : ""
        }`, // Добавляем стили status и error
        disabled: isBlocked, // Устанавливаем disabled
        id: id, // Передаем id инпуту
      })}
      {isError && <div className={styles.errorMessage}>{errorMessage}</div>}
    </div>
  );
};

// 2. Компонент с внутренним состоянием и логикой (Internal Control/Validation)
// Используется для полей, которые хранят свое значение и/или имеют внутреннюю валидацию (например, NoteInput, EmailModInput, PhoneInput, PriceInput, TextModInput)
const ControlledInput = ({
  initialValue = "",
  onChange: externalOnChange,
  onBlur: externalOnBlur,
  onValidation, // Функция для передачи булева значения валидности
  validator, // Функция валидации: (value) => boolean
  validationErrorMessage = "Некорректный ввод",
  errorMessage: externalErrorMessage,
  type = "text",
  id,
  ...restProps
}) => {
  const [value, setValue] = useState(initialValue);
  const [internalErrorMessage, setInternalErrorMessage] = useState("");

  const combinedErrorMessage = externalErrorMessage || internalErrorMessage;
  const isErrorStatus = restProps.status === "error" || !!combinedErrorMessage;

  // Обновление внутреннего состояния при изменении initialValue извне
  useEffect(() => {
    setValue(initialValue === null ? "" : initialValue);
  }, [initialValue]);

  const runValidation = useCallback(
    (currentValue) => {
      // Валидация пропускается, если нет функции validator
      if (!validator) return true;

      // Считаем валидным, если поле пустое, или если проходит валидацию
      const isValid = currentValue === "" || validator(currentValue);

      if (onValidation) {
        onValidation(isValid);
      }
      return isValid;
    },
    [validator, onValidation]
  );

  const handleChange = useCallback(
    (event) => {
      const newValue = event.target.value;
      setValue(newValue);
      setInternalErrorMessage(""); // Сбрасываем внутреннюю ошибку при изменении

      if (externalOnChange) {
        // Передаем измененное событие с новым значением
        externalOnChange({
          ...event,
          target: { ...event.target, value: newValue },
        });
      }
      // Промежуточная валидация (опционально)
      // runValidation(newValue); // Можно добавить, если нужна live-валидация
    },
    [externalOnChange]
  );

  const handleBlur = useCallback(
    (event) => {
      const currentValue = event.target.value;
      const isValid = runValidation(currentValue);

      if (!isValid && currentValue !== "") {
        setInternalErrorMessage(validationErrorMessage);
      } else {
        setInternalErrorMessage("");
      }

      if (externalOnBlur) {
        externalOnBlur(event);
      }
    },
    [runValidation, externalOnBlur, validationErrorMessage]
  );

  // Обновляем статус, если есть ошибка
  const status = isErrorStatus ? "error" : restProps.status;

  return (
    <BaseInput
      {...restProps}
      status={status}
      errorMessage={combinedErrorMessage}
      id={id}
    >
      <input
        type={type}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        {...restProps}
        className={styles.input} // Базовый класс для инпута
      />
    </BaseInput>
  );
};

// 3. Переиспользуемые функции валидации
const isValidEmail = (email) => {
  const emailRegex =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
  return emailRegex.test(email);
};

// Проверка на 12 цифр (для Украины)
const validatePhoneNumber = (number) => {
  const cleaned = ("" + number).replace(/\D/g, "");
  return cleaned.length === 12;
};

// 4. Компоненты на основе BaseInput и ControlledInput

// --- Компоненты, управляемые извне (BaseInput) ---

/** Обычный текстовый ввод (внешнее управление) */
const TextInput = (props) => (
  <BaseInput {...props}>
    <input
      type="text"
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder || "Введите текст"}
      className={styles.input}
    />
  </BaseInput>
);

/** Ввод числа (внешнее управление) */
const NumInput = (props) => (
  <BaseInput {...props}>
    <input
      type="number"
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder || "Введите число"}
      className={styles.input}
    />
  </BaseInput>
);

/** Ввод пароля (внешнее управление) */
const PassInput = (props) => (
  <BaseInput {...props}>
    <input
      type="password"
      autoComplete="new-password"
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder || "Введите пароль"}
      className={styles.input}
    />
  </BaseInput>
);

/** Поле выбора (Select) */
const SelectInput = ({ options = [], placeholder = "Выберите", ...props }) => (
  <BaseInput {...props}>
    <select
      value={props.value}
      onChange={props.onChange}
      className={styles.select}
    >
      <option value="">{placeholder}</option>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </BaseInput>
);

// --- Компоненты с внутренним состоянием/валидацией (ControlledInput) ---

/** Текстовое поле с внутренним состоянием */
const TextModInput = (props) => (
  <ControlledInput
    type={props.type || "text"}
    placeholder={props.placeholder || "Введите текст"}
    {...props}
  />
);

/** Поле для заметок (TextArea) с внутренним состоянием */
const NoteInput = ({
  initialValue = "",
  onChange: externalOnChange,
  placeholder = "Напишите, если есть замечания или особенности...",
  rows = 4,
  ...props
}) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue === null ? "" : initialValue);
  }, [initialValue]);

  const handleChange = useCallback(
    (event) => {
      setValue(event.target.value);
      if (externalOnChange) {
        externalOnChange(event);
      }
    },
    [externalOnChange]
  );

  return (
    <BaseInput {...props}>
      <textarea
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        rows={rows}
        className={styles.textarea}
      />
    </BaseInput>
  );
};

/** Email поле с внутренней валидацией */
const EmailInput = (props) => (
  <ControlledInput
    type="email"
    placeholder={props.placeholder || "Введите e-mail"}
    validationErrorMessage="Введите корректный e-mail"
    validator={isValidEmail}
    {...props}
  />
);

/** Email поле с внутренней валидацией (модифицированная версия, теперь просто EmailInput) */
// Мы объединили EmailInput и EmailModInput в один улучшенный EmailInput
// Предыдущий EmailInput использовал внутреннее состояние, но не имел onValidation.
// Теперь мы используем ControlledInput, который поддерживает обе функции.
// Экспортируем его под старым именем EmailModInput для обратной совместимости.
const EmailModInput = (props) => <EmailInput {...props} />;

/** Поле для телефона с внутренней валидацией */
const PhoneInput = ({ isPhoneNumber = true, ...props }) => {
  // Если isPhoneNumber = false, валидация не применяется (validator будет undefined)
  const validator = isPhoneNumber ? validatePhoneNumber : undefined;

  return (
    <ControlledInput
      type="tel" // Изменили type на "tel"
      initialValue={props.initialValue || "+380"}
      placeholder={props.placeholder || "+380xxxxxxxxx"}
      validationErrorMessage="Введите корректный номер телефона (12 цифр)"
      validator={validator}
      {...props}
    />
  );
};


// src/elem/inputs/inputs.jsx

/** Поле для ввода цены (преобразование центы <-> рубли/гривны) */
const PriceInput = ({
  initialValue, 
  onChange = () => {}, 
  placeholder = "0.00",
  //label = "",
  errorText = "Некорректный формат цены",
  className = "",
  // status удален из этого списка, чтобы избежать ошибки "already been declared"
  ...restProps 
}) => {
  // --- Функции форматирования и парсинга (остаются для внутренней работы) ---
  
  // Функция для преобразования внутреннего значения (центы) в отображаемый формат (0.00)
  const formatDisplayValue = useCallback((value) => {
    if (value === null || value === undefined || value === "") return "";
    const num = parseFloat(value);
    if (isNaN(num)) return "";
    // Преобразование центов в рубли/гривны с точкой
    return (num / 100).toFixed(2); 
  }, []);

  // Функция для преобразования отображаемого значения во внутреннее (центы)


  // --- Состояние ---

  // Храним значение, которое отображается в поле (формат "0.00")
  const [inputValue, setInputValue] = useState(
    formatDisplayValue(initialValue)
  );
  const [isValidPrice, setIsValidPrice] = useState(true);

  // Обновление при внешнем изменении
  useEffect(() => {
    setInputValue(formatDisplayValue(initialValue));
  }, [initialValue, formatDisplayValue]);


  // --- Основная логика обработки ввода ---
 const handleChange = useCallback(
   (event) => {
     // 1. Очистка: оставляем только цифры
     let newRawValue = event.target.value.replace(/\D/g, "");

     if (newRawValue.length > 10) {
       // Ограничение длины
       newRawValue = newRawValue.substring(0, 10);
     }

     let formattedDisplay;
     let parsedCents;

     if (newRawValue.length === 0) {
       formattedDisplay = "";
       parsedCents = null;
     } else {
       // 2. УДАЛЕНИЕ ВЕДУЩИХ НУЛЕЙ из основной части числа
       // Если длина больше 2, удаляем все ведущие нули, КРОМЕ последнего
       if (newRawValue.length > 2) {
         // 525 -> 525 (если нулей нет)
         // 0525 -> 525
         // 00525 -> 525
         const integerPartRaw = newRawValue.slice(0, -2);
         const decimalPart = newRawValue.slice(-2);

         // Удаляем все ведущие нули, оставляя 1, если число равно '0' (хотя это маловероятно после ввода)
         const cleanIntegerPart = integerPartRaw.replace(/^0+/, "");

         // Если после удаления нулей осталась пустая строка (т.е., были только нули), ставим "0"
         const finalIntegerPart =
           cleanIntegerPart === "" ? "0" : cleanIntegerPart;

         formattedDisplay = `${finalIntegerPart}.${decimalPart}`;
         parsedCents = parseInt(finalIntegerPart + decimalPart, 10);
       } else if (newRawValue.length === 1) {
         // 0.0X
         formattedDisplay = `0.0${newRawValue}`;
         parsedCents = parseInt(newRawValue, 10);
       } else {
         // length === 2
         // 0.XX
         formattedDisplay = `0.${newRawValue}`;
         parsedCents = parseInt(newRawValue, 10);
       }
     }

     // Обновляем отображаемое значение
     setInputValue(formattedDisplay);

     // 3. Передача внешнего значения (в центах)
     if (parsedCents !== null) {
       onChange({ target: { value: parsedCents } });
       setIsValidPrice(true);
     } else if (newRawValue.length === 0) {
       onChange({ target: { value: null } });
       setIsValidPrice(true);
     } else {
       setIsValidPrice(false);
       onChange({ target: { value: null } });
     }
   },
   [onChange]
 );
  
  // --- Рендеринг и статус ---
  
  const externalStatus = restProps.status || "normal";
  const status = !isValidPrice || externalStatus === "error" ? "error" : externalStatus;


  return (
    <BaseInput
      {...restProps}
      status={status}
      errorMessage={!isValidPrice ? errorText : restProps.errorMessage}
      // Принудительно используем type="tel" или "text", чтобы избежать клавиатуры с точкой
    >
      <input
        type="tel" // Используем "tel" для лучшей мобильной клавиатуры без точки/запятой
        value={inputValue}
        onChange={handleChange}
        placeholder={placeholder}
        className={styles.input}
      />
    </BaseInput>
  );
};


export {
  EmailModInput, // Перенаправлено на EmailInput
  TextModInput,
  SelectInput,
  EmailInput,
  PhoneInput,
  PassInput,
  PriceInput,
  TextInput,
  NumInput,
  NoteInput,
};
