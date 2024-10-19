import { useState } from "preact/hooks";

interface AddTodoProps {
  onAdd: (todo: { text: string; status: string; date: string; member: string }) => void;
}

export default function AddTodo({ onAdd }: AddTodoProps) {
  const [newTodo, setNewTodo] = useState({ text: "", status: "", date: "", member: "" });

  const handleAdd = () => {
    onAdd(newTodo);
    setNewTodo({ text: "", status: "", date: "", member: "" });
  };

  return (
    <div class="my-4">
      <input
        type="text"
        placeholder="Todo"
        value={newTodo.text}
        onInput={(e) => setNewTodo({ ...newTodo, text: (e.target as HTMLInputElement).value || "" })}
      />
      <input
        type="text"
        placeholder="Status"
        value={newTodo.status}
        onInput={(e) => setNewTodo({ ...newTodo, status: (e.target as HTMLInputElement).value || "" })}
      />
      <input
        type="date"
        value={newTodo.date}
        onInput={(e) => setNewTodo({ ...newTodo, date: (e.target as HTMLInputElement).value || "" })}
      />
      <input
        type="text"
        placeholder="Assign to"
        value={newTodo.member}
        onInput={(e) => setNewTodo({ ...newTodo, member: (e.target as HTMLInputElement).value || "" })}
      />
      <button onClick={handleAdd}>Add Todo</button>
    </div>
  );
}
