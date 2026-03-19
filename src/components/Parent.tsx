import { useState } from "react";
import Child from "./Child";
import BrotherA from "./BrotherA"
import BrotherB from "./BrotherB";

const Parent = () => {
    const [inputMessage, setInputMessage] = useState('')
    const [isVisible, setIsVisible] = useState(true)
    const [number, setNumber] = useState('')

    const handleChildClick = () => {
        console.log('子组件按钮被点击')
    }
    const handleChildInput = (newValue: string) => {
        setInputMessage(newValue)
    }
    const toggleVisibility = () => {
        setIsVisible(prev => !prev)
    }
    const resetVisibility = () => {
        setIsVisible(true)
    }
    const handleNumberIuput = (newNumber: string) => {
        setNumber(newNumber)
    }


    return (
        <div>
            <p>Parent</p>
            <p>child input is: {inputMessage || 'no input now'}</p>
            <p></p>
            <button onClick={toggleVisibility}>{isVisible ? '隐藏' : '显示'}内容</button>
            <Child
                message="Hello React 19"
                onButtonClick={handleChildClick}
                inputValue={inputMessage}
                onInputChange={handleChildInput}
                isVisible={isVisible}
                resetVisible={resetVisibility}
            ></Child>

            <hr />
            <BrotherA inputNumber={number} onChangeNumber={handleNumberIuput}></BrotherA>
            <BrotherB showNumber={number}></BrotherB>
        </div>
    )
}

export default Parent