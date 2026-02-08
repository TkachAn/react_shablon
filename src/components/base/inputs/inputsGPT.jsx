import React, { useState, forwardRef } from "react";
import styles from "./ingpt.module.css";

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
   CONFIRM BLOCK (Composition)
========================= */
const ConfirmBlock = ({
  value,
  confirmLabel = "Подтвердите",
  onConfirm,
  errorMessage = "Значения не совпадают",
  children,
}) => {
  const [confirmValue, setConfirmValue] = useState("");
  const [error, setError] = useState("");

  const handleConfirm = (v) => {
    setConfirmValue(v);
    const isMatch = v === value;
    setError(isMatch ? "" : errorMessage);
    onConfirm?.(isMatch);
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
   TEXT & NUMBER & SELECT
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
   EMAIL & PASSWORD (Hybrid Mode)
========================= */
export const EmailInput = forwardRef(
  (
    {
      label = "E-mail",
      confirm,
      value: externalValue,
      onChange,
      error,
      ...props
    },
    ref,
  ) => {
    const [internalValue, setInternalValue] = useState("");
    const isControlled = externalValue !== undefined;
    const currentValue = isControlled ? externalValue : internalValue;

    const handleChange = (e) => {
      const val = e.target.value;
      if (!isControlled) setInternalValue(val);
      onChange?.(val);
    };

    const inputEl = (
      <input
        ref={ref}
        type="email"
        className={styles.input}
        value={currentValue}
        onChange={handleChange}
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

export const PasswordInput = forwardRef(
  (
    {
      label = "Пароль",
      confirm,
      value: externalValue,
      onChange,
      error,
      ...props
    },
    ref,
  ) => {
    const [internalValue, setInternalValue] = useState("");
    const [visible, setVisible] = useState(false);

    const isControlled = externalValue !== undefined;
    const currentValue = isControlled ? externalValue : internalValue;

    const handleChange = (e) => {
      const val = e.target.value;
      if (!isControlled) setInternalValue(val);
      onChange?.(val);
    };

    const inputEl = (
      <div className={styles.passwordWrap}>
        <input
          ref={ref}
          type={visible ? "text" : "password"}
          className={styles.input}
          value={currentValue}
          onChange={handleChange}
          {...props}
        />
        <button
          type="button"
          className={styles.toggle}
          onClick={() => setVisible(!visible)}
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
   PRICE (Formatting Logic)
========================= */
export const PriceInput = forwardRef(
  ({ label = "Цена", onChange, value: externalValue, error }, ref) => {
    const [digits, setDigits] = useState("");

    const formatDisplay = (d) => {
      if (!d) return "0.00";
      const clean = d.padStart(3, "0");
      const integerPart = Number(clean.slice(0, -2)).toLocaleString("ru-RU");
      const fractionPart = clean.slice(-2);
      return `${integerPart}.${fractionPart}`;
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
