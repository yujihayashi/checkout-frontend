import { PropsType } from "config/types";

export default function Tag({ children, danger }: PropsType) {
    return (
        <span className={`inline-flex px-1.5 py-0.5 rounded-md text-xs bg-danger ${danger && 'hi'}`}>{children}</span>
    )
}