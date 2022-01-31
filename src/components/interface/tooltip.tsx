// import styles from "@/styles/components/Popover.module.scss"
import styles from "@/styles/components/Tooltip.module.scss";

import { Children, ReactChildren } from "react";

interface TooltipInterface {
    children: any | any[],
    tooltip: string,
    position?: string
}

export default function Tooltip({ children, tooltip, position = "top" }: TooltipInterface) {
    return (
        <span className={styles.tooltip} data-tooltip={tooltip} data-position={position}>
            {Children.map(children, (child, i) => {
                    return child
                })}
        </span>
    )
}