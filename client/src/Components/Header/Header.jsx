import { Link } from "react-router-dom";
import Logo from "../Common/Logo/Logo";
import Nav from "../Common/Nav/Nav";

export default function Header() {
  return (
    <div className='container'>
      <header className='d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom'>
        <h1 className='visually-hidden'>Company name</h1>

        <Link to='/' className='d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none'>
          <Logo />
        </Link>

        <Nav />

        <div className='col-md-3 text-end'>
          <button
            type='button'
            className='btn btn-outline-primary me-2'
            data-bs-toggle='modal'
            data-bs-target='#loginModal'>
            Login
          </button>
        </div>
      </header>
    </div>
  );
}
