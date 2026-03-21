import { useUser } from "../context/UserContext";

const Content = () => {
    const { state } = useUser()
    const { user } = state

    return (
        <div>
            {user.isLogin ? (
                <div>
                    <p>congratulation! {user.name}, {user.age}</p>
                </div>
            ) : (
                <div>
                    <p>please login first</p>
                </div>
            )}
        </div>
    )
}

export default Content