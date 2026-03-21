import { useState } from "react";
import { useUser } from "../context/UserContext";

const LoginForm2 = () => {
    const { dispatch } = useUser()
    const [name, setName] = useState('')
    const [age, setAge] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (name.trim() === '' || age.trim() === '') {
            alert('please ...')
            return
        }

        const ageNum = parseInt(age, 10)
        if (isNaN(ageNum) || ageNum <= 0) {
            alert('please age >=0')
            return
        }

        dispatch({
            type: 'LOGIN',
            payload: { name: name.trim(), age: ageNum }
        })

        setName('')
        setAge('')
    }

    return (
        <div>
            <h2>exer10 login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>username</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="username"
                    />
                </div>
                <div>
                    <label>age</label>
                    <input
                        type="text"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        placeholder="age"
                    />
                </div>
                <button type="submit">login</button>
            </form>
        </div>
    )
}

export default LoginForm2