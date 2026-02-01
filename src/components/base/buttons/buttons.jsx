// src/base/buttons/buttons.jsx
"use client";
import React from "react";
import styles from "./button.module.css";

/**
 * Внутренний базовый компонент.
 * Он не экспортируется, а служит фундаментом для остальных.
 */
const BaseButton = ({
  onClick,
  children,
  status = "normal",
  type = "button",
  ...props
}) => (
  <button
    onClick={onClick}
    type={type}
    className={`${styles.baseButton} ${styles[status]}`}
    disabled={status === "blocked"}
    {...props}
  >
    {children}
  </button>
);

// --- Экспортируемые компоненты-обертки ---

export const NormButton = (props) => <BaseButton {...props} />;

export const SubmitButton = (props) => (
  <BaseButton type="submit" status="accent" {...props}>
    {props.children || "Сохранить"}
  </BaseButton>
);

export const DeleteButton = (props) => (
  <BaseButton {...props}>{props.children || "Удалить"}</BaseButton>
);

export const AddButton = (props) => (
  <BaseButton {...props}>{props.children || "Добавить"}</BaseButton>
);

export const EditButton = (props) => (
  <BaseButton {...props}>{props.children || "Изменить"}</BaseButton>
);
