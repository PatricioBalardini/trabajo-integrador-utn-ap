export const VisibilityControl = ({
  isChecked,
  setShowClmpleted,
  cleanTasks,
}) => {
  const handleDelete = () => {
    if (window.confirm("Una vez eliminida no hay vuelta atras, pensalo...")) {
      cleanTasks();
    }
  };
  return (
    <div>
      <div>
        {" "}
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setShowClmpleted(e.target.checked)}
        />{" "}
        <label>Mostrar tareas terminadas</label>
      </div>
      <button onClick={handleDelete}>Borrar</button>
    </div>
  );
};
