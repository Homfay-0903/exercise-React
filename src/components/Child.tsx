interface ChildProps {
    message: string
    onButtonClick: () => void
    inputValue: string
    onInputChange: (value: string) => void
}

const Child = ({ message, onButtonClick, inputValue, onInputChange }: ChildProps) => {

    const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value
        onInputChange(newValue)
    }

    return (
        <div>
            <p>{message}</p>
            <button onClick={onButtonClick}>Click Here</button>
            <input type="text" value={inputValue} onChange={handleInputValue} placeholder="please input here" />
        </div>
    )
}

export default Child