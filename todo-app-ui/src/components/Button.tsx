import { useContext } from "react";
import { TodoContext } from "../context/TodosProvider";

interface ButtonProps {
  title: string;
  otherStyles?: string;
  handleClick?: () => void;
}

function Button({ title, otherStyles = "", handleClick }: ButtonProps) {
  const { isLoading } = useContext(TodoContext);
  return (
    <div
      className={`h-[48px] p-3 rounded-md flex items-center justify-center hover:cursor-pointer opacity ${otherStyles} `}
      onClick={isLoading ? () => {} : handleClick}
    >
      <p>{title}</p>
    </div>
  );
}

export default Button;
