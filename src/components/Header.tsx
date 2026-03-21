import { useUser } from "../context/UserContext";

const Header = () => {
    const { state, dispatch } = useUser()
    const { user } = state

    const handleLogOut = () => {
        dispatch({
            type: 'LOGOUT'
        })
    }

    return (
        <div>
            {user.isLogin ? (
                <div>
                    <p>welcome, {user.name} !</p>
                    <button onClick={handleLogOut}>LogOut</button>
                </div>
            ) : (
                <div>
                    <p>no Login here</p>
                </div>
            )}
        </div>
    )
}

export default Header