import { FieldInterface } from "@/config/types";
import styles from "@/styles/components/Field.module.scss";
import Radio from "./radio";

export default function Field({ label, name, value, type = "text", handleChange, options }: FieldInterface) {
    let input: JSX.Element;

    switch (type) {
        case "phone":
        case "postalcode":
        case "radio":
            input = <Radio type={type} name={name} value={value} handleChange={handleChange} options={options} />
            break;
        default:
            input = <input type={type} id={name} name={name} value={value} onChange={handleChange} className={styles.field} />
            break;
    }

    return (
        <div className={styles.row}>
            <label htmlFor={name} className={styles.label}>{label}</label>
            {input}
        </div>
    )
}
