import "./App.css";
import AddForm from "./components/AddForm";
import ListTodo from "./components/ListTodo";
import TodosProvider from "./context/TodosProvider";

export interface ITodo {
  _id: string;
  content: string;
}
function App() {
  return (
    <TodosProvider>
      <div>
        <AddForm />
        <ListTodo />
      </div>
    </TodosProvider>
  );
}

export default App;
