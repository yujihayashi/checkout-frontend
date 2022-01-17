import { FieldInterface } from "@/config/types";
import slugify from "@/helpers/slugify.helper";
import styles from "@/styles/components/Field.module.scss";

export default function Radio({ options, handleChange, value, ...props }: FieldInterface) {
    return (
        <div className="">
            {options && options.map((o, i) => (
                <label key={i} htmlFor={slugify(o.value)} className={styles['radio__label']}>
                    <input {...props} onChange={handleChange} id={slugify(o.value)} value={o.value} checked={value === o.value} />
                    {o.label || o.value}
                </label>
            ))}
        </div>
    )
}