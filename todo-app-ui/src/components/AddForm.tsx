import { useContext, useState } from "react";
import Button from "./Button";
import { TodoContext } from "../context/TodosProvider";
import { ITodo } from "../App";

function AddForm() {
  const [value, setValue] = useState("");
  const { setTodos, isLoading, setIsLoading } = useContext(TodoContext);

  function handleAddTodo(newContent: string) {
    setIsLoading(true);
    fetch("http://localhost:5000/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ content: newContent }),
    })
      .then((data) => data.json())
      .then((res) => {
        setTodos((prev: ITodo[]) => [...prev, res.todo]);
        setTimeout(() => {
          setIsLoading(false);
          setValue("");
        }, 500);
      });
  }

  return (
    <div
      className={`flex justify-center pb-5 gap-2 ${
        isLoading ? "opacity-50" : ""
      }`}
    >
      <input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Add Todo..."
        style={{
          borderRadius: 8,
          backgroundColor: "lightgrey",
          padding: 8,
        }}
        disabled={isLoading}
      />
      <Button
        title="Add"
        otherStyles="bg-blue-400 hover:bg-blue-500"
        handleClick={() => value && handleAddTodo(value)}
      />
    </div>
  );
}

export default AddForm;
