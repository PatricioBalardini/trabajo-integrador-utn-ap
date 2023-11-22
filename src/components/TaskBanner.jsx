export const TaskBanner = ({ userName, taskItems }) => (
  <h4>
    {userName}Tareas App
    <span>({taskItems.filter((t) => !t.done).lenght} Tares por hacer)</span>
  </h4>
);
