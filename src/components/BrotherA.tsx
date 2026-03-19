interface BrotherAProps {
    inputNumber: string
    onChangeNumber: (num: string) => void
}

const BrotherA = ({ inputNumber, onChangeNumber }: BrotherAProps) => {
    const handleInputNumer = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newNumber = e.target.value
        onChangeNumber(newNumber)
    }

    return (
        <input type="text" value={inputNumber} onChange={handleInputNumer} placeholder="input number here" />
    )
}

export default BrotherA