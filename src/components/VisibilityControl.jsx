export const VisibilityControl = ({
  isChecked,
  callback,
  description,
  cleanTasks,
}) => {
  const handleDelete = () => {
    if (
      window.confirm(
        `Una vez eliminida no hay vuelta atras, pensalo... ${description} `
      )
    ) {
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
          onChange={(e) => callback(e.target.checked)}
        />{" "}
        <label>Mostrar {description}</label>
      </div>
      <button onClick={handleDelete}>Borrar</button>
    </div>
  );
};
