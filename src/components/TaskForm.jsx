import { useState } from "react";

export const TaskForm = ({ createNewTask }) => {
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
    <form className="m-3 row" onSubmit={handleSubmit}>
      {" "}
      <div className="col-9">
        <input
          className="form-control form-control-sm fw-light"
          type="text"
          placeholder="Nueva tarea"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          autoFocus
        />
      </div>
      <div className="col-3 p-0 d-flex aling-items-center">
        {" "}
        <button
          className="btn btn-outline-success btn-sm fw-light"
          type="submit"
        >
          Agregar
        </button>
      </div>
    </form>
  );
};
