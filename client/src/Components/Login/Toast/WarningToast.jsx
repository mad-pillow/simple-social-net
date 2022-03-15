export default function WarningToast({ warning }) {
  const success = warning?.success;
  const data = warning?.data;
  let messages = [];

  if (data) {
    messages = data.errors
      ? data.errors.map((error) => error.msg)
      : [data.message];
  }

  return (
    <div aria-live="polite" aria-atomic="true" className="position-relative">
      <div className="toast-container position-absolute top-0 start-50 translate-middle-x p-3">
        {messages.map((message, index) => {
          return (
            <div
              key={Date.now() + String(index)}
              className={`toast warningToast align-items-center text-white border-0 ${
                success ? 'bg-success' : 'bg-danger'
              }`}
              role="alert"
              aria-live="assertive"
              aria-atomic="true"
            >
              <div className="d-flex">
                <strong className="toast-body">{message}</strong>
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
