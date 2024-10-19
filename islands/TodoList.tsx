// Import the Todo interface
import { Todo } from '../types/Todo.ts';

// Update the function to use the Todo type
export default function TodoList({ todos }: { todos: Todo[] }) {
  return (
    <div class="my-4">
      <h2 class="text-2xl font-bold">Todo List</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.text} - {todo.status} - {todo.date} - {todo.member}
          </li>
        ))}
      </ul>
    </div>
  );
}
