import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "../context/TodosProvider";

function ListTodo() {
  const { todos } = useContext(TodoContext);

  return (
    <div className="flex justify-center mt-3">
      <div>
        {todos.map((item) => (
          <TodoItem todo={item} key={item._id} />
        ))}
      </div>
    </div>
  );
}

export default ListTodo;
