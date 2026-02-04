import s from './sc.module.css';   

export function Container({children, className}) {
    return (
        <div className={`${s.container} ${className || ""}`}>
            {children}
        </div>
    );
}
export function PaddingBox({children, className}) {
    return (
        <div className={`${s.box} ${className || ""}`}>
            {children}
        </div>
    );
}