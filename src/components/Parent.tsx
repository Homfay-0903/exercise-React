import { useState } from "react";
import Child from "./Child";

const Parent = () => {
    const [inputMessage, setInputMessage] = useState('')

    const handleChildClick = () => {
        console.log('子组件按钮被点击')
    }
    const handleChildInput = (newValue: string) => {
        setInputMessage(newValue)
    }


    return (
        <div>
            <p>Parent</p>
            <p>child input is: {inputMessage || 'no input now'}</p>
            <Child message="Hello React 19" onButtonClick={handleChildClick} inputValue={inputMessage} onInputChange={handleChildInput}></Child>
        </div>
    )
}

export default Parent