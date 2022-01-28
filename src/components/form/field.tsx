import { FieldInterface } from "@/config/types";
import styles from "@/styles/components/Field.module.scss";
import Checkbox from "./checkbox";
import Radio from "./radio";

export default function Field({ label, name, value, type = "text", handleChange, options, config, className, error = "" }: FieldInterface) {
    let input: JSX.Element;

    switch (type) {
        case "radio":
            input = <Radio type="radio" name={name} value={value} handleChange={handleChange} options={options} />
            break;
        case "checkbox":
            input = <Checkbox type="checkbox" name={name} value={value} label={label} handleChange={handleChange} options={options} />
            break;
        case "select":
            input = (<select name={name} value={value as string | string[]} onChange={handleChange} className={styles.field}>
                {options?.map((o, i) => (
                    <option value={o.value} key={i}>{o.label}</option>
                ))}
            </select>)
            break;
        case "description":
            input = <></>
            break;
        case "phone": // TODO -> create input for phone component
        case "postalcode":  // TODO -> create input for brazilian postalcode component
        default:
            input = <input type={type} id={name} name={name} value={value as string | number | readonly string[]} onChange={handleChange} className={styles.field} />
            break;
    }

    return (
        <div className={`${styles.row} ${config?.width ? config.width : 'w-full'} ${className ? className : ''} ${styles[`field__${type}`]}`}>
            {/* show the label only if the type equals checkbox */}
            {type !== 'checkbox' ? <label htmlFor={name} className={styles.label}>{label}</label> : ''}
            {input}
            {error && (<div className={styles.error}>{error}</div>)}
        </div>
    )
}
