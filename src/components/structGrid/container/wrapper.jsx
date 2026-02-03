import s from '../../structure/s.module.css';

export default function Wrapper({ children }) {
  return <div className={s.wrapper}>{children}</div>;
}