import { TaskItem } from "./TaskItem";

export const TaskList = ({ tasks, toggleTask, showCompleted = false }) => {
  const taskTableRows = (doneValue) =>
    tasks
      .filter((task) => task.done === doneValue)
      .map((task) => (
        <TaskItem key={task.name} task={task} toggleTask={toggleTask} />
      ));

  const headerText = showCompleted
    ? "Tareas completadas"
    : "Tareas por completar";

  return (
    <table className="table table-striped table-bordered table-dark border-secondary">
      <thead>
        <tr className="table-success">
          <th className="text-center fw-light">{headerText}</th>
        </tr>
      </thead>
      <tbody>{taskTableRows(showCompleted)}</tbody>
    </table>
  );
};
