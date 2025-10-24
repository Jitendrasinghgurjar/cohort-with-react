import React from "react";

const Read = ({ todos, settodos }) => {
  const deleteHandler = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    settodos(filteredTodos);
  };

  const renderTodos = todos.map((todo) => (
    <li
      key={todo.id}
      className="flex justify-between items-center bg-gray-100 hover:bg-gray-200 transition-all duration-200 rounded-xl px-6 py-4 mb-4 shadow-sm"
    >
      <span className="text-lg text-gray-800 font-medium">{todo.title}</span>

      <span
        onClick={() => deleteHandler(todo.id)}
        className="text-red-500 hover:text-red-600 font-semibold cursor-pointer transition-all duration-200"
      >
        🗑 Delete
      </span>
    </li>
  ));

  return (
    <div className="w-[40%] p-10 bg-white rounded-xl shadow-md border border-gray-200">
      <h1 className="text-2xl mb-6 font-light text-gray-800">
        <span className="text-pink-500 font-medium">Pending</span> Todos
      </h1>
      {todos.length === 0 ? (
        <p className="text-gray-400 italic">No pending todos 🎉</p>
      ) : (
        <ol>{renderTodos}</ol>
      )}
    </div>
  );
};

export default Read;
