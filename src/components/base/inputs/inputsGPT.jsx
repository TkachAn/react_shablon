import React from "react";
import styles from "./ingpt.module.css";

/* =========================
   HELPERS / VALIDATORS
========================= */

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const isValidPhone = (value) => /^\+?\d{10,15}$/.test(value);

/* =========================
   PRICE INPUT HELPERS
========================= */

const parsePriceDigits = (value) => value.replace(/\D/g, "");

const formatPriceFromDigits = (digits) => {
  if (!digits) return "0.00";

  const padded = digits.padStart(3, "0");
  const major = padded.slice(0, -2);
  const minor = padded.slice(-2);

  return `${Number(major)}.${minor}`;
};

/* =========================
   HOOKS
========================= */

const useControlledInput = ({
  initialValue = "",
  validator,
  onValidation,
  onChange,
  onBlur,
}) => {
  const [value, setValue] = React.useState(initialValue);
  const [error, setError] = React.useState("");

  const validate = React.useCallback(
    (val) => {
      if (!validator) return true;

      const valid = validator(val);
      setError(valid ? "" : "Некорректный ввод");
      onValidation?.(valid);
      return valid;
    },
    [validator, onValidation],
  );

  const handleChange = (e) => {
    const val = e.target.value;
    setValue(val);
    onChange?.(e);
  };

  const handleBlur = (e) => {
    validate(value);
    onBlur?.(e);
  };

  return {
    value,
    error,
    onChange: handleChange,
    onBlur: handleBlur,
  };
};

const usePriceInput = ({ initialValue = 0, onChange }) => {
  const [digits, setDigits] = React.useState(
    Math.round(initialValue * 100).toString(),
  );

  const handleChange = (e) => {
    const nextDigits = parsePriceDigits(e.target.value);
    setDigits(nextDigits);
  };

  React.useEffect(() => {
    onChange?.(Number(digits || 0) / 100);
  }, [digits, onChange]);

  return {
    value: formatPriceFromDigits(digits),
    inputMode: "numeric",
    onChange: handleChange,
  };
};

/* =========================
   BASE UI
========================= */

const BaseInput = ({
  label,
  status = "normal",
  errorMessage,
  id,
  children,
}) => {
  const isBlocked = status === "blocked";
  const isError = status === "error" || !!errorMessage;

  return (
    <div className={styles.wrapper}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}

      {React.cloneElement(children, {
        id,
        disabled: isBlocked,
        className: `
          ${styles.input}
          ${styles[status]}
          ${isError ? styles.error : ""}
          ${children.props.className || ""}
        `,
      })}

      {isError && <span className={styles.errorText}>{errorMessage}</span>}
    </div>
  );
};

/* =========================
   BASIC INPUTS
========================= */

const TextInput = (props) => (
  <BaseInput {...props}>
    <input type="text" />
  </BaseInput>
);

const NumInput = (props) => (
  <BaseInput {...props}>
    <input type="number" />
  </BaseInput>
);

const PassInput = (props) => (
  <BaseInput {...props}>
    <input type="password" />
  </BaseInput>
);

const NoteInput = (props) => (
  <BaseInput {...props}>
    <textarea />
  </BaseInput>
);

const SelectInput = ({ options = [], ...props }) => (
  <BaseInput {...props}>
    <select>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  </BaseInput>
);

/* =========================
   CONTROLLED INPUTS
========================= */

const ControlledInput = ({
  initialValue,
  validator,
  onValidation,
  errorMessage,
  ...props
}) => {
  const input = useControlledInput({
    initialValue,
    validator,
    onValidation,
    onChange: props.onChange,
    onBlur: props.onBlur,
  });

  return (
    <BaseInput errorMessage={input.error || errorMessage}>
      <input {...props} {...input} />
    </BaseInput>
  );
};

const TextModInput = (props) => <ControlledInput {...props} />;

const EmailInput = (props) => (
  <ControlledInput {...props} type="email" validator={isValidEmail} />
);

const PhoneInput = (props) => (
  <ControlledInput {...props} inputMode="numeric" validator={isValidPhone} />
);

/* =========================
   PRICE INPUT (FIXED SCALE)
========================= */

const PriceInput = ({ onChange, ...props }) => {
  const price = usePriceInput({ onChange });

  return (
    <BaseInput {...props}>
      <input type="text" {...price} />
    </BaseInput>
  );
};

const ConfirmField = ({
  children,
  label = "Подтверждение",
  errorMessage = "Значения не совпадают",
  onChange,
}) => {
  const child = React.Children.only(children);

  const [value, setValue] = React.useState("");
  const [confirm, setConfirm] = React.useState("");
  const [error, setError] = React.useState("");

  const handleMainChange = (e) => {
    setValue(e.target.value);
    child.props.onChange?.(e);
  };

  const handleConfirmChange = (e) => {
    setConfirm(e.target.value);
  };

  React.useEffect(() => {
    if (!value && !confirm) {
      setError("");
      return;
    }

    if (value !== confirm) {
      setError(errorMessage);
      onChange?.({ value, valid: false });
      return;
    }

    setError("");
    onChange?.({ value, valid: true });
  }, [value, confirm, errorMessage, onChange]);

  return (
    <BaseInput label={label} errorMessage={error}>
      <div className={styles.confirmGroup}>
        {React.cloneElement(child, {
          onChange: handleMainChange,
        })}

        <input
          type={child.props.type || "text"}
          placeholder="Подтвердите"
          value={confirm}
          onChange={handleConfirmChange}
        />
      </div>
    </BaseInput>
  );
};


/* =========================
   EXPORTS
========================= */

export {
  TextInput,
  NumInput,
  PassInput,
  NoteInput,
  SelectInput,
  TextModInput,
  EmailInput,
  PhoneInput,
  PriceInput,
};
