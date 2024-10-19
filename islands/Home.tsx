import { useState } from 'preact/hooks';
import AddTodo from './AddTodo.tsx';
import TodoList from './TodoList.tsx';
import { Todo } from '../types/Todo.ts';

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <>
        <AddTodo onAdd={addTodo} />
        <TodoList todos={todos} />
    </>
  );
}

