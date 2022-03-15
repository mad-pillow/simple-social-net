import './app.scss';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header';
import Main from './Components/Main/Main';
import Login from './Components/Login/Login';
import { BrowserRouter } from 'react-router-dom';
import { useRoutes } from './routes';
import { useAuth } from './hooks/auth.hook';
import { AuthContext } from './context/AuthContext';
import { ModalContext } from './context/ModalContext';
import 'bootstrap';
import { useEffect, useState } from 'react';
import { Modal } from 'bootstrap';

function App() {
  const { token, userId, login, logout, email } = useAuth();
  const isLoggedIn = !!token;
  const routes = useRoutes(isLoggedIn);
  const [modal, setModal] = useState(null);

  useEffect(() => {
    setModal(new Modal('.modal'));
  }, []);

  return (
    <ModalContext.Provider value={modal}>
      <AuthContext.Provider
        value={{ token, userId, email, login, logout, isLoggedIn }}
      >
        <BrowserRouter>
          <div className="app d-flex flex-column justify-content-flex-start align-items-center">
            <Header />
            <Main>{routes}</Main>
            <Footer />
            <Login />
          </div>
        </BrowserRouter>
      </AuthContext.Provider>
    </ModalContext.Provider>
  );
}

export default App;
