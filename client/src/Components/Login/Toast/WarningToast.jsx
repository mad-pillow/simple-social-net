export default function WarningToast({ warning }) {
  let warningMessages = [];

  if (warning) {
    warningMessages = warning.errors
      ? warning.errors.map((error) => error.msg)
      : [warning.message];
  }

  return (
    <div aria-live="polite" aria-atomic="true" className="position-relative">
      <div className="toast-container position-absolute top-0 start-50 translate-middle-x p-3">
        {warningMessages.map((message, index) => {
          return (
            <div
              key={index}
              className="toast warningToast align-items-center text-white bg-danger border-0"
              role="alert"
              aria-live="assertive"
              aria-atomic="true"
            >
              <div className="d-flex">
                <div className="toast-body">{message}</div>
                <button
                  type="button"
                  className="btn-close btn-close-white me-2 m-auto"
                  data-bs-dismiss="toast"
                  aria-label="Close"
                ></button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
