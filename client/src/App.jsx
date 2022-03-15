import Footer from './Components/Footer/Footer';
import Header from './Components/Header';
import Main from './Components/Main/Main';
import { BrowserRouter } from 'react-router-dom';
import './app.scss';
import Login from './Components/Login/Login';
import 'bootstrap';
import { useRoutes } from './routes';

function App() {
  const routes = useRoutes(false);

  return (
    <BrowserRouter>
      <div className="app d-flex flex-column justify-content-flex-start align-items-center">
        <Header />
        <Main>{routes}</Main>
        <Footer />
        <Login />
      </div>
    </BrowserRouter>
  );
}

export default App;
