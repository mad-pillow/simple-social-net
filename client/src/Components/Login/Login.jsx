import { useEffect, useState } from 'react';
import { useHttp } from '../../hooks/http.hook';
import Logo from '../Common/Logo/Logo';
import { Toast } from 'bootstrap';
import WarningToast from './Toast/WarningToast';

export default function Login() {
  const [personData, setPersonData] = useState({ email: '', password: '' });
  const { loading, error, request } = useHttp();
  const [isEmailValid, setIsEmailValid] = useState(null);
  const [isPasswordValid, setIsPasswordValid] = useState(null);

  const handleDataChange = (e) => {
    const { name, value } = e.target;

    setPersonData({ ...personData, [name]: value });

    const emailRegExp = new RegExp(
      `^[\\w!#$%&'*+/=?\`{|}~^-]+(?:\\.[\\w!#$%&'*+/=?\`{|}~^-]+)*@(?:[A-Z0-9-]+\\.)+[A-Z]{2,6}$`,
      'i'
    );
    const passwordRegExp = new RegExp(`^\\S{6,}$`, 'i');

    switch (name) {
      case 'email':
        setIsEmailValid(emailRegExp.test(value));
        break;
      case 'password':
        setIsPasswordValid(passwordRegExp.test(value));
        break;
      default:
        return;
    }
  };

  useEffect(() => {
    if (error) {
      const toastElements = document.querySelectorAll('.warningToast');

      toastElements.forEach((element) => {
        const toast = new Toast(element);

        toast.show();
      });
    }
  }, [error]);

  const handleSignUp = async () => {
    try {
      const data = await request('/api/auth/signup', 'POST', { ...personData });
    } catch (e) {}
  };

  const handleLogIn = async () => {};

  return (
    <div
      className="modal fade"
      id="loginModal"
      tabIndex="-1"
      aria-labelledby="loginModalLabel"
      aria-hidden="true"
    >
      <WarningToast warningText={error} />
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <Logo />
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <h1 className="h3 mb-4 fw-normal">Please log in or sign up</h1>

              <div className="form-floating" bis_skin_checked="1">
                <input
                  type="email"
                  className={`form-control ${
                    isEmailValid === false ? 'is-invalid' : ''
                  } ${isEmailValid === true ? 'is-valid' : ''}`}
                  name="email"
                  id="floatingInput"
                  placeholder="name@example.com"
                  autoComplete="off"
                  onChange={handleDataChange}
                  required
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating mt-2" bis_skin_checked="1">
                <input
                  type="password"
                  className={`form-control ${
                    isPasswordValid === false ? 'is-invalid' : ''
                  } ${isPasswordValid === true ? 'is-valid' : ''}`}
                  name="password"
                  id="floatingPassword"
                  placeholder="Password"
                  autoComplete="off"
                  onChange={handleDataChange}
                  required
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>

              <div className="text-end mt-5">
                <button
                  type="button"
                  className="btn btn-outline-primary me-2"
                  onClick={handleLogIn}
                >
                  Log in
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSignUp}
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
