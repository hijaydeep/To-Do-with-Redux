import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { moveTask } from "../redux/tasksSlice";
import TaskCard from "./TaskCard";
import AddTaskModal from "./AddTaskModal";

const Column = ({ columnId, title, showAdd }) => {
  const tasks = useSelector((s) =>
    s.tasks.items.filter((t) => t.column === columnId)
  );
  const dispatch = useDispatch();
  const [isOver, setIsOver] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const onDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    if (!isOver) setIsOver(true);
  };

  const onDrop = (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("text/plain");
    if (id) dispatch(moveTask({ id, column: columnId }));
    setIsOver(false);
  };
  return (
    <div
      onDragOver={onDragOver}
      onDragLeave={() => setIsOver(false)}
      onDrop={onDrop}
      className={`flex flex-col gap-3 rounded-2xl p-4 border ${
        isOver ? "bg-indigo-50 border-indigo-300" : "bg-gray-50 border-gray-200"
      } min-h-[260px]`}
    >
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-gray-800">{title}</h3>
        {showAdd && (
          <button
            onClick={() => setOpenModal(true)}
            className="text-xs px-3 py-1 rounded-full bg-indigo-600 text-white hover:bg-indigo-700"
          >
            + Add
          </button>
        )}
      </div>
      {tasks.length === 0 ? (
        <p className="text-xs text-gray-500">Drop tasks here…</p>
      ) : (
        <div className="grid gap-3">
          {tasks.map((t) => (
            <TaskCard key={t.id} task={t} />
          ))}
        </div>
      )}
      {openModal && <AddTaskModal onClose={() => setOpenModal(false)} />}
    </div>
  );
};

export default Column;
