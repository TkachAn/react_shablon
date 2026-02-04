// src/base/buttons/IconButtons
import styles from "./button.module.css";
import { Menu, X, Trash, Pencil, Plus, UserPlus, UserPen, LogOut } from "lucide-react";

/**
 * Внутренняя базовая кнопка для иконок.
 * Объединяет общие стили и логику.
 */
const BaseIconButton = ({ onClick, title, children, ...props }) => (
  <button 
    onClick={onClick} 
    type="button" 
    className={styles.iconButton} 
    title={title}
    {...props}
  >
    {children}
  </button>
);

// --- Экспортируемые компоненты ---

export const CloseIconButton = (props) => (
  <BaseIconButton {...props} title={props.title || "Закрыть"}>
    <X size={24} />
  </BaseIconButton>
);

export const DeleteIconButton = (props) => (
  <BaseIconButton {...props} title={props.title || "Удалить"}>
    <Trash size={24} />
  </BaseIconButton>
);

export const EditIconButton = (props) => (
  <BaseIconButton {...props} title={props.title || "Редактировать"}>
    <Pencil size={24} />
  </BaseIconButton>
);

export const AddIconButton = (props) => (
  <BaseIconButton {...props} title={props.title || "Добавить"}>
    <Plus size={24} />
  </BaseIconButton>
);

export const UserAddIconButton = (props) => (
  <BaseIconButton {...props} title={props.title || "Добавить пользователя"}>
    <UserPlus size={24} />
  </BaseIconButton>
);

export const UserEditIconButton = (props) => (
  <BaseIconButton {...props} title={props.title || "Редактировать пользователя"}>
    <UserPen size={24} />
  </BaseIconButton>
);

export const MenuIconButton = (props) => (
  <BaseIconButton {...props} title={props.title || "Меню"}>
    <Menu size={24} />
  </BaseIconButton>
);

// Логика выхода (handleSignOut) вынесена для чистоты
const handleSignOut = () => {
    console.log('Попытка выхода из системы...');
    // Здесь будет ваша реальная логика (например, удаление токена)
};

export const LogOutIconButton = (props) => (
  <BaseIconButton 
    {...props} 
    onClick={props.onClick || handleSignOut} 
    title={props.title || "Выход"}
  >
    <LogOut size={24} />
  </BaseIconButton>
);