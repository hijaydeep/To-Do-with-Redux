import Column from "./Column";

const Board = () => {
  const columns = [
    { id: "todo", title: "To Do" },
    { id: "inprogress", title: "In Progress" },
    { id: "done", title: "Done" },
  ];
  return (
    <div className="mx-auto max-w-6xl p-6">
      <header className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Kanban Board</h1>
        <div className="text-xs text-gray-500">
          Redux + redux-persist · HTML5 DnD
        </div>
      </header>
      <div className="grid md:grid-cols-3 gap-4">
        {columns.map((c) => (
          <Column
            key={c.id}
            columnId={c.id}
            title={c.title}
            showAdd={c.id === "todo"}
          />
        ))}
      </div>
    </div>
  );
};

export default Board;
