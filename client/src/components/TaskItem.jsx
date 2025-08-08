export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="flex items-center justify-between bg-white shadow rounded px-4 py-2 mb-2">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task._id, task.completed)}
          className="h-5 w-5 text-green-600"
        />
        <span className={`text-lg ${task.completed ? 'line-through text-gray-500' : ''}`}>
          {task.title}
        </span>
      </div>
      <button
        onClick={() => onDelete(task._id)}
        className="text-red-500 hover:text-red-700"
      >
        🗑️
      </button>
    </li>
  );
}
