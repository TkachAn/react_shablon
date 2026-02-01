import s from "../../s.module.css";

export function AsideRight({children, title, id}) {
    return (
        <aside id={id} className={s.asideRight}>
            <h3>{title}</h3>
            {children}
        </aside>
    );
}