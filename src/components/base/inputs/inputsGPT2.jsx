/*inputsGPT2.jsx - расширенные инпуты с валидацией и подтверждением для email и пароля, а также числовые и ценовые поля. Все компоненты используют общий базовый лэйаут и стили из ingpt.module.css.*/

import React, { useState, forwardRef } from "react";
import styles from "./ingpt.module.css";

/* =========================
   VALIDATORS
========================= */
const validators = {
  email: (v) =>
    !v
      ? "Email обязателен"
      : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
        ? "Некорректный email"
        : "",

  password: (v) =>
    !v ? "Пароль обязателен" : v.length < 8 ? "Минимум 8 символов" : "",

  digits: (v) => (v && !/^\d+$/.test(v) ? "Только цифры" : ""),
};

/* =========================
   BASE LAYOUT
========================= */
const BaseInput = forwardRef(
  ({ label, error, children, className = "" }, ref) => (
    <div className={`${styles.base} ${className}`} ref={ref}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={styles.control}>{children}</div>
      {error && <div className={styles.error}>{error}</div>}
    </div>
  ),
);

/* =========================
   CONFIRM BLOCK
========================= */
const ConfirmBlock = ({
  value,
  confirmLabel = "Подтвердите",
  onValidChange,
  errorMessage = "Значения не совпадают",
  children,
}) => {
  const [confirmValue, setConfirmValue] = useState("");
  const [error, setError] = useState("");

  const handleConfirm = (v) => {
    setConfirmValue(v);
    const isMatch = v === value;
    setError(isMatch ? "" : errorMessage);
    onValidChange?.(isMatch);
  };

  return (
    <div className={styles.confirmGroup}>
      {children}
      <input
        className={styles.input}
        placeholder={confirmLabel}
        value={confirmValue}
        onChange={(e) => handleConfirm(e.target.value)}
      />
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

/* =========================
   TEXT / TEXTAREA / SELECT
========================= */
export const TextInput = forwardRef(({ label, error, ...props }, ref) => (
  <BaseInput label={label} error={error}>
    <input ref={ref} className={styles.input} {...props} />
  </BaseInput>
));

export const TextAreaInput = forwardRef(
  ({ label, error, rows = 4, ...props }, ref) => (
    <BaseInput label={label} error={error}>
      <textarea ref={ref} className={styles.textarea} rows={rows} {...props} />
    </BaseInput>
  ),
);

export const SelectInput = forwardRef(
  ({ label, error, options = [], ...props }, ref) => (
    <BaseInput label={label} error={error}>
      <select ref={ref} className={styles.select} {...props}>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </BaseInput>
  ),
);

/* =========================
   EMAIL
========================= */
export const EmailInput = forwardRef(
  ({ label = "E-mail", confirm, value, onChange, ...props }, ref) => {
    const [internal, setInternal] = useState("");
    const [error, setError] = useState("");

    const currentValue = value ?? internal;

    const handleChange = (v) => {
      setInternal(v);
      onChange?.(v);
      setError(validators.email(v));
    };

    const inputEl = (
      <input
        ref={ref}
        type="email"
        className={styles.input}
        value={currentValue}
        onChange={(e) => handleChange(e.target.value)}
        {...props}
      />
    );

    return (
      <BaseInput label={label} error={error}>
        {confirm ? (
          <ConfirmBlock value={currentValue} confirmLabel="Подтвердите e-mail">
            {inputEl}
          </ConfirmBlock>
        ) : (
          inputEl
        )}
      </BaseInput>
    );
  },
);

/* =========================
   PASSWORD
========================= */
export const PasswordInput = forwardRef(
  ({ label = "Пароль", confirm, value, onChange, ...props }, ref) => {
    const [internal, setInternal] = useState("");
    const [visible, setVisible] = useState(false);
    const [error, setError] = useState("");

    const currentValue = value ?? internal;

    const handleChange = (v) => {
      setInternal(v);
      onChange?.(v);
      setError(validators.password(v));
    };

    const inputEl = (
      <div className={styles.passwordWrap}>
        <input
          ref={ref}
          type={visible ? "text" : "password"}
          className={styles.input}
          value={currentValue}
          onChange={(e) => handleChange(e.target.value)}
          {...props}
        />
        <button
          type="button"
          className={styles.toggle}
          onClick={() => setVisible((s) => !s)}
        >
          {visible ? "👁️‍🗨️" : "👁️"}
        </button>
      </div>
    );

    return (
      <BaseInput label={label} error={error}>
        {confirm ? (
          <ConfirmBlock value={currentValue} confirmLabel="Подтвердите пароль">
            {inputEl}
          </ConfirmBlock>
        ) : (
          inputEl
        )}
      </BaseInput>
    );
  },
);

/* =========================
   DIGITS
========================= */
export const DigitsInput = forwardRef(
  ({ label = "Число", value, onChange }, ref) => {
    const [error, setError] = useState("");

    const handleChange = (v) => {
      setError(validators.digits(v));
      onChange?.(v);
    };

    return (
      <BaseInput label={label} error={error}>
        <input
          ref={ref}
          className={styles.input}
          inputMode="numeric"
          value={value}
          onChange={(e) => handleChange(e.target.value)}
        />
      </BaseInput>
    );
  },
);

/* =========================
   PRICE (твой формат сохранён)
========================= */
export const PriceInput = forwardRef(
  ({ label = "Цена", onChange, error }, ref) => {
    const [digits, setDigits] = useState("");

    const formatDisplay = (d) => {
      if (!d) return "0.00";
      const clean = d.padStart(3, "0");
      const i = Number(clean.slice(0, -2)).toLocaleString("ru-RU");
      return `${i}.${clean.slice(-2)}`;
    };

    const handleChange = (e) => {
      const d = e.target.value.replace(/\D/g, "");
      setDigits(d);
      onChange?.(Number(d || 0) / 100);
    };

    return (
      <BaseInput label={label} error={error}>
        <input
          ref={ref}
          className={styles.input}
          inputMode="numeric"
          value={formatDisplay(digits)}
          onChange={handleChange}
        />
      </BaseInput>
    );
  },
);
