import s from './s.module.css';   

export function Container({children}) {
    return (
        <div className={s.container}>
            {children}
        </div>
    );
}
export function PaddingBox({children}) {
    return (
        <div className={s.box}>
            {children}
        </div>
    );
}