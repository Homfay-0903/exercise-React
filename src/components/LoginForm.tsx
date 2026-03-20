interface LoginFormProps {
    action: (formData: FormData) => void
    isPending: boolean
    state: { message: string, success?: boolean }
}

const LoginForm = ({ action, isPending, state }: LoginFormProps) => {
    return (
        <div>
            <form action={action}>
                <div>
                    <label>username</label>
                    <input type="text" name="username" placeholder="admin" required />
                </div>
                <div>
                    <label>password</label>
                    <input type="text" name="password" placeholder="123456" required />
                </div>
                <div>
                    <button disabled={isPending}>{isPending ? 'logining' : 'login'}</button>
                </div>
            </form>
            {state.message && (
                <div style={{ color: state.success ? 'green' : 'red' }}>
                    <p>{state.message}</p>
                </div>
            )}
        </div>
    )
}

export default LoginForm