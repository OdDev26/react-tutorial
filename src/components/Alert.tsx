interface Props {
  onButtonClick: () => void;
}

function Alert({ onButtonClick }: Props) {
  return (
    <>
      <div className="alert alert-primary alert-dismissible">
        My Alert
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={onButtonClick}
        ></button>
      </div>
    </>
  );
}

export default Alert;
