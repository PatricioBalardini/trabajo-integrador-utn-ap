export const Container = ({ children }) => {
  return (
    <div className="container-fluid p-4 fw-lighter">
      <div className="col-md-4 offset-md-4">{children}</div>
    </div>
  );
};
