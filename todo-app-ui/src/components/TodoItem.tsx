import { useContext } from "react";
import { ITodo } from "../App";
import Button from "./Button";
import { TodoContext } from "../context/TodosProvider";

interface TodoItemProps {
  todo: ITodo;
}

function TodoItem({ todo }: TodoItemProps) {
  const { setTodos, setIsLoading } = useContext(TodoContext);

  function handleDelete(id: string) {
    setIsLoading(true);
    fetch(`http://localhost:5000/todo/${id}`, {
      method: "DELETE",
    }).then(() => {
      setTodos((prev: ITodo[]) => prev.filter((item) => item._id !== id));
      setIsLoading(false);
    });
  }

  return (
    <div
      className={`h-fit w-[600px] rounded-xl bg-gray-100 shadow-gray-200 shadow-md mb-3 p-3 flex justify-between items-center `}
    >
      <span>{todo.content}</span>
      <div className="flex gap-2">
        <Button
          title="Delete"
          otherStyles="bg-red-400 hover:bg-red-500"
          handleClick={() => handleDelete(todo._id)}
        />
      </div>
    </div>
  );
}

export default TodoItem;
