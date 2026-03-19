import { useState } from "react";
import TodoList from "./TodoList";

interface TodoItem {
    id: number
    text: string
    done: boolean
}

const TodoParent = () => {
    const [todoList, setTodoList] = useState<TodoItem[]>([
        { id: 1, text: '学习 React', done: false },
        { id: 2, text: '写 TypeScript', done: true },
        { id: 3, text: '完成练习题', done: false },
    ])

    const handleToggleTodo = (id: number) => {
        setTodoList(prevTodos => (
            prevTodos.map(prevTodo =>
                prevTodo.id === id ? { ...prevTodo, done: !prevTodo.done } : prevTodo
            )
        ))
    }
    const handleDeleteTodo = (id: number) => {
        setTodoList(prevTodos => (
            prevTodos.filter(prevTodo => prevTodo.id !== id)
        ))
    }

    return (
        <TodoList todos={todoList} onToggleTodo={handleToggleTodo} onDeleteTodo={handleDeleteTodo}></TodoList>
    )
}

export default TodoParent