import { PropsType } from "config/types";
import styles from "@/styles/components/Button.module.scss";
import { MouseEventHandler } from "react";

export default function Button({ children, className, onClick, color, title, id }: { children: JSX.Element | string, className?: string, onClick?: MouseEventHandler, color?: 'default' | 'primary' | 'secondary' | 'inherit', title?: string, id?: string }) {
    return (
        <button  type="button" id={id} title={title} onClick={onClick} className={`${styles[color || 'default']} ${className}`}>
            {children}
        </button>
    )
}