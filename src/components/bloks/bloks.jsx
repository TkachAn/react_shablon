// src/components/bloks/bloks.jsx
import s from "./sb.module.css";
export function LogoType({ children, className }) {
  return (
     <div className={`${s.logoType} ${className || ""}`}>
    {children}
    </div>)
}
export function Navigation({ children, className }) {
  return <nav className={`${s.navigation} ${className || ""}`}>{children}</nav>;
}
export function Auth({ children, className }) {
  return <div className={`${s.auth} ${className || ""}`}>{children}</div>;
}
export function Block({ children, className }) {
  return <div className={`${s.block} ${className || ""}`}>{children}</div>;
}