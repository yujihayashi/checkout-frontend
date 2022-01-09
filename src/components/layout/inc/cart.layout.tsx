import Button from "@/components/interface/button";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PropsType } from "config/types";

export default function Cart({ handleCart }: PropsType) {
    return (
        <>
            <div className="fixed w-10/12 bg-primary text-white top-0 bottom-0 right-0 z-50 transition-all md:absolute md:top-full md:mt-1 md:right-0 md:bottom-auto md:rounded px-4 py-2 md:w-[400px]">
                Cart there
            </div>
            <div className="fixed bg-black bg-opacity-70 text-white inset-0 z-40 md:hidden" onClick={handleCart}>
                <Button color="inherit" className="p-4" title="Close"><FontAwesomeIcon icon={faTimes} /></Button>
            </div>
        </>
    )
}