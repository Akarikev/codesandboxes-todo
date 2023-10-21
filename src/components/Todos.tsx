import { ThickArrowLeftIcon, TrashIcon } from "@radix-ui/react-icons";
import TodoItem from "./TodoItem";

export function Todos({ item }) {
  return (
    <div className="todo-item">
      <ThickArrowLeftIcon width={32} height={32} className="icon-done" />
      <TrashIcon width={32} height={32} className="icon-trash" />
      <TodoItem item={item} />
    </div>
  );
}

export default Todos;
