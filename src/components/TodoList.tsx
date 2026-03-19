interface TodoItem {
    id: number
    text: string
    done: boolean
}
interface Todo {
    todos: TodoItem[]
    onToggleTodo: (id: number) => void
    onDeleteTodo: (id: number) => void
}

const TodoList = ({ todos, onToggleTodo, onDeleteTodo }: Todo) => {
    return (
        <div>
            <ul>
                {todos.map(todo => (
                    <li
                        key={todo.id}
                    >
                        <span style={{
                            textDecoration: todo.done ? 'line-through' : 'none'
                        }}>
                            {todo.text}
                        </span>
                        <button onClick={() => onToggleTodo(todo.id)}>toggle</button>
                        <button onClick={() => onDeleteTodo(todo.id)}>delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList