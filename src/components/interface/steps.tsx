import styles from "@/styles/components/Steps.module.scss"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface StepsInterface {
    step: number
}

export default function Steps({ step = 1 }: StepsInterface) {

    // at the moment its used only for the checkout layout
    const steps = [1, 2, 3, 4];

    return (
        <div className={styles.steps}>
            {steps.map((s, i) => (
                <div className={`${styles.step} ${s === step ? styles.active : ''} ${s < step ? styles.done : ''}`} key={i}><i>{s >= step ? s : <FontAwesomeIcon icon={faCheck} />}</i></div>
            ))}
        </div>
    )
}