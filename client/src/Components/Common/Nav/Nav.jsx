import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';
import './nav.scss';

export default function Nav() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
      <li>
        <NavLink to="/" className="nav-link px-2 link-dark">
          Home
        </NavLink>
      </li>
      {isLoggedIn ? (
        <li>
          <NavLink to="/chat" className="nav-link px-2 link-dark">
            Chat
          </NavLink>
        </li>
      ) : (
        ''
      )}
      <li>
        <NavLink to="/about" className="nav-link px-2 link-dark">
          About
        </NavLink>
      </li>
    </ul>
  );
}
