import { Link } from 'react-router-dom';
import Logo from '../Common/Logo/Logo';
import Nav from '../Common/Nav/Nav';

export default function Footer() {
  return (
    <div className="container ">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p className="col-md-4 mb-0 text-muted">© 2021 Company, Inc</p>

        <Link
          to="/"
          className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        >
          <Logo />
        </Link>

        <Nav />
      </footer>
    </div>
  );
}
