import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header";
import Feed from "./Components/Main/Feed/Feed";
import Main from "./Components/Main/Main";
import Chat from "./Components/Main/Chat/Chat";
import About from "./Components/Main/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.scss";
import Login from "./Components/Login/Login";
import "bootstrap";

function App() {
  return (
    <BrowserRouter>
      <div className='app d-flex flex-column justify-content-flex-start align-items-center'>
        <Header />
        <Main>
          <Routes>
            <Route path='/' element={<Feed />} />
            <Route path='/chat' element={<Chat />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </Main>
        <Footer />
        <Login />
      </div>
    </BrowserRouter>
  );
}

export default App;
