import './app.scss';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header';
import Main from './Components/Main/Main';
import Login from './Components/Login/Login';
import { BrowserRouter } from 'react-router-dom';
import { useRoutes } from './routes';
import { useAuth } from './hooks/auth.hook';
import { AuthContext } from './context/authContext';
import 'bootstrap';

function App() {
  const { token, userId, login, logout } = useAuth();
  const isLoggedIn = !!token;
  const routes = useRoutes(isLoggedIn);

  return (
    <AuthContext.Provider value={{ token, userId, login, logout, isLoggedIn }}>
      <BrowserRouter>
        <div className="app d-flex flex-column justify-content-flex-start align-items-center">
          <Header />
          <Main>{routes}</Main>
          <Footer />
          <Login />
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
