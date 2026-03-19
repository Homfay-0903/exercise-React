interface ChildProps {
    message: string
    onButtonClick: () => void
    inputValue: string
    onInputChange: (value: string) => void
    isVisible: boolean
    resetVisible: () => void
}

const Child = ({ message, onButtonClick, inputValue, onInputChange, isVisible, resetVisible }: ChildProps) => {

    const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value
        onInputChange(newValue)
    }

    return (
        <div>
            <p>{message}</p>
            <button onClick={onButtonClick}>Click Here</button>
            <p></p>
            <input type="text" value={inputValue} onChange={handleInputValue} placeholder="please input here" />
            <p></p>
            {isVisible && (
                <div>
                    <p>我是可被控制的子组件内容</p>
                </div>
            )}
            <button onClick={resetVisible}>Reset</button>
        </div>
    )
}

export default Child