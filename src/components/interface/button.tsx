import { PropsType } from "config/types";

export default function Button({children, className}: PropsType) {
    return (
        <button type="button" className={`bg-primary px-8 py-3 rounded-full text-white hover:bg-primary-lighter transition-all ${className}`}>
            {children}
        </button>
    )
}