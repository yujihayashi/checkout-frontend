import styles from "@/styles/components/Button.module.scss";
import { MouseEventHandler } from "react";

interface ButtonInterface {
    children: JSX.Element | string,
    className?: string,
    onClick?: MouseEventHandler,
    color?: 'default' | 'primary' | 'primary-inverse' | 'secondary' | 'inherit',
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
    title?: string,
    id?: string,
    type?: "button" | "submit" | "reset" | undefined
}

export default function Button({ children, className, onClick, color, size = 'md', title, id, type = "button" }: ButtonInterface) {
    return (
        <button type={type} id={id} title={title} onClick={onClick} className={`${styles.button} ${styles[color || 'default']} ${className || ""} ${styles[size || 'md']}`}>
            {children}
        </button>
    )
}