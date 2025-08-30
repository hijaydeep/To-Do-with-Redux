import { useDispatch } from "react-redux";
import { deleteTask } from "../redux/tasksSlice";

const TaskCard = ({ task }) => {
  const dispatch = useDispatch();

  const onDragStart = (e) => {
    e.dataTransfer.setData("text/plain", task.id);
    e.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      draggable
      onDragStart={onDragStart}
      className="rounded-2xl border border-gray-200 bg-white p-3 shadow-sm hover:shadow transition grid gap-1 cursor-grab active:cursor-grabbing"
    >
      <div className="flex items-start justify-between">
        <h4 className="font-semibold text-sm">{task.title}</h4>
        <button
          onClick={() => dispatch(deleteTask(task.id))}
          className="text-xs px-2 py-1 rounded-full bg-red-50 hover:bg-red-100 text-red-600"
        >
          Delete
        </button>
      </div>
      <p className="text-xs text-gray-600 leading-snug">{task.description}</p>
    </div>
  );
};

export default TaskCard;
