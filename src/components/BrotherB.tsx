interface BrotherBProps {
    showNumber: string
}

const BrotherB = ({ showNumber }: BrotherBProps) => {
    let content: React.ReactNode
    const trimmed = showNumber.trim()

    if (trimmed === '') {
        content = <span style={{ color: 'gray' }}>请输入数字</span>
    } else {
        const num = Number(trimmed)
        if (isNaN(num)) {
            content = <span style={{ color: 'red' }}>请输入有效数字</span>
        } else {
            const square = num * num
            content = <span>平方: {square}</span>
        }
    }

    return (
        <div>{content}</div>
    )
}

export default BrotherB