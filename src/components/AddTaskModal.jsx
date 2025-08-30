import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/tasksSlice";

const AddTaskModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      setError("Title and Description are required");
      return;
    }
    dispatch(addTask({ title: title.trim(), description: description.trim() }));
    onClose();
  };
  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="w-full max-w-sm rounded-2xl bg-white p-5 shadow-xl">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold">New Task</h3>
          <button onClick={onClose} className="text-sm text-gray-500">
            ✕
          </button>
        </div>
        <form onSubmit={submit} className="grid gap-3">
          <label className="grid gap-1 text-sm">
            <span className="text-gray-700">Title *</span>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="rounded-xl border border-gray-300 px-3 py-2"
              placeholder="Task title"
            />
          </label>
          <label className="grid gap-1 text-sm">
            <span className="text-gray-700">Description *</span>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              className="rounded-xl border border-gray-300 px-3 py-2 resize-none"
              placeholder="Task description"
            />
          </label>
          {error && <p className="text-xs text-red-600">{error}</p>}
          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-2 text-sm rounded-xl border border-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-3 py-2 text-sm rounded-xl bg-indigo-600 text-white"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTaskModal;
