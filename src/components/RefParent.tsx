import { useRef } from "react";
import RefChild from "./RefChild";
import type { RefChildHandle } from "./RefChild";

const RefParent = () => {
    const childRef = useRef<RefChildHandle>(null)

    const handleFocus = () => {
        childRef.current?.focusInput()
    }
    const handleClear = () => {
        childRef.current?.clearInput()
    }

    return (
        <div>
            <button onClick={handleFocus}>Focus</button>
            <button onClick={handleClear}>Clear</button>
            <RefChild ref={childRef}></RefChild>
        </div>
    )
}

export default RefParent