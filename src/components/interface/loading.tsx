import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface LoadingInterface {
    text?: string
}

export default function Loading({ text = "Loading" }: LoadingInterface) {
    return (
        <span className="flex gap-2"><span><FontAwesomeIcon icon={faCircleNotch} className="animate-spin" /></span> {text}</span>
    )
}