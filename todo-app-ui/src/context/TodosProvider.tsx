import { ReactNode, createContext, useEffect, useState } from "react";
import { ITodo } from "../App";

export const TodoContext = createContext<{
  todos: ITodo[];
  isLoading: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setTodos: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setIsLoading: any;
}>({
  todos: [],
  isLoading: false,
  setTodos: () => {},
  setIsLoading: () => {},
});

const TodosProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:5000/todo", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((data) => data.json())
      .then((res) => {
        setTodos(res.todos);
        setIsLoading(false);
      });
  }, []);

  return (
    <TodoContext.Provider value={{ todos, setTodos, isLoading, setIsLoading }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodosProvider;
