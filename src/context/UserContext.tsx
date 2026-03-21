import { createContext, useContext, useReducer } from "react";

interface User {
    name: string
    age: number
    isLogin: boolean
}

type UserAction = { type: 'LOGIN', payload: { name: string, age: number } } | { type: 'LOGOUT' }

interface UserState {
    user: User
}

interface UserContextType {
    state: UserState
    dispatch: React.Dispatch<UserAction>
}

const initialState: UserState = {
    user: {
        name: '',
        age: 0,
        isLogin: false
    }
}

const userReducer = (state: UserState, action: UserAction) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                user: {
                    ...action.payload,
                    isLogin: true
                }
            }
        case 'LOGOUT':
            return {
                user: {
                    name: '',
                    age: 0,
                    isLogin: false
                }
            }
        default:
            return state
    }
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(userReducer, initialState)

    return (
        <UserContext.Provider value={{ state, dispatch }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    const context = useContext(UserContext)

    if (!context) {
        throw new Error('context must used within Provider')
    }

    return context
}