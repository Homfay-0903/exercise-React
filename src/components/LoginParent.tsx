import LoginForm from "./LoginForm";
import { useActionState } from "react";

interface LoginState {
    message: string
    success?: boolean
}

const LoginParent = () => {
    const LoginAction = async (_prevState: LoginState, formData: FormData): Promise<LoginState> => {
        const username = formData.get('username') as string
        const password = formData.get('password') as string

        await new Promise(resolve => setTimeout(resolve, 3000))

        if (username === 'admin' && password === '123456') {
            return {
                message: 'success',
                success: true
            }
        } else {
            return {
                message: 'defeat',
                success: false
            }
        }
    }

    const [state, action, isPending] = useActionState(LoginAction, { message: '' })

    return (
        <div>
            <h2>login here</h2>
            <LoginForm action={action} state={state} isPending={isPending}></LoginForm>
        </div>
    )
}

export default LoginParent