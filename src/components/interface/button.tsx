import { PropsType } from "config/types";
import styles from "@/styles/components/Button.module.scss";

export default function Button({children, className, onClick, color, title}: PropsType) {
    return (
        <button type="button" title={title} onClick={onClick} className={`${styles[color || 'default']} ${className}`}>
            {children}
        </button>
    )
}