import { useState } from "react";

export const TaskCreator = ({ createNewTask }) => {
  const [newTaskName, setNewTaskName] = useState("");

  const handleSubmit = (e) => {
    if (newTaskName.trim() === "") {
      alert("Por favor entrar tarea");
      return;
    }
    e.preventDefault();
    createNewTask(newTaskName);
    setNewTaskName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      {" "}
      <div>
        {" "}
        <input
          type="text"
          placeholder="Nueva tarea"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          //placeholder="Entrar nueva tarea..."
          autoFocus
        />
      </div>
      <div>
        {" "}
        <button type="submit">Guardar tarea</button>
      </div>
    </form>
  );
};
