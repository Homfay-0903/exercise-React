interface BrotherBProps {
    showNumber: string
}

const BrotherB = ({ showNumber }: BrotherBProps) => {
    let content: React.ReactNode
    let squreNumber = Number(showNumber.trim())

    if (!squreNumber) {
        content = <p>please input number first</p>
    } else if (isNaN(squreNumber)) {
        content = <p>请输入有效数字</p>
    } else {
        const res = squreNumber * squreNumber
        content = <p>the res is: {res}</p>
    }

    return (
        <div>{content}</div>
    )
}

export default BrotherB