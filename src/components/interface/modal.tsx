import React from "react";
import { PropsType } from "@/config/types";
import styles from "@/styles/components/Modal.module.scss";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSSTransition } from "react-transition-group";

interface ModalInterface {
    title: string,
    isOpen: boolean,
    handleModal: () => void,
    children: PropsType | string
}

export default function Modal({ title, isOpen = false, handleModal, children }: ModalInterface) {
    if (!isOpen) return null;
    return (
        <div className={styles.modal} onClick={handleModal}>
            <div onClick={(e) => e.stopPropagation()}>
                <header>
                    <span className={styles.title}>{title}</span>
                    <button type="button" onClick={handleModal}><FontAwesomeIcon icon={faTimes} className="text-lg" /></button>
                </header>
                <main>
                    {React.Children.map(children, (child, i) => {
                        return child
                    })}
                </main>
            </div>
        </div>
    )
}