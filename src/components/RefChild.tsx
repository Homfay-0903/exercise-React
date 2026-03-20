import { useState, useImperativeHandle, useRef } from "react"

export interface RefChildHandle {
    focusInput: () => void
    clearInput: () => void
}

interface RefChildProps {
    ref: React.Ref<RefChildHandle>
}

const RefChild = ({ ref }: RefChildProps) => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    useImperativeHandle(ref, () => ({
        focusInput: () => (
            inputRef.current?.focus()
        ),
        clearInput: () => (
            setValue('')
        )
    }))

    return (
        <div>
            <input
                ref={inputRef}
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="please input"
            />
        </div>
    )
}

export default RefChild