import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { ModalContext } from '../../context/ModalContext';
import Logo from '../Common/Logo/Logo';
import Nav from '../Common/Nav/Nav';

export default function Header() {
  const { email, logout, isLoggedIn } = useContext(AuthContext);
  const modal = useContext(ModalContext);

  const handleLogin = () => {
    if (isLoggedIn) {
      logout();
    } else {
      modal.show();
    }
  };

  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <h1 className="visually-hidden">Company name</h1>

        <Link
          to="/"
          className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
        >
          <Logo />
        </Link>

        <Nav />

        <div className="col-md-3 text-end">
          {isLoggedIn ? <small className="text-muted me-4">{email}</small> : ''}
          <button
            type="button"
            className="btn btn-outline-primary me-2"
            onClick={handleLogin}
          >
            {isLoggedIn ? 'Logout' : 'Login'}
          </button>
        </div>
      </header>
    </div>
  );
}
