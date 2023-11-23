export const VisibilityControl = ({
  isChecked,
  callback,
  description,
  cleanTasks,
}) => {
  const handleDelete = () => {
    if (window.confirm(`ELiminar tareas ${description} ?`)) {
      cleanTasks();
    }
  };
  return (
    <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">
      <div className="form-check form-switch">
        {" "}
        <input
          className="form-check-input"
          type="checkbox"
          checked={isChecked}
          onChange={(e) => callback(e.target.checked)}
        />{" "}
        <label className="form-check-label">{description}</label>
      </div>
      <button className="btn btn-danger btn-sm" onClick={handleDelete}>
        Eliminar
      </button>
    </div>
  );
};
