import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header";
import Feed from "./Components/Main/Feed/Feed";
import Main from "./Components/Main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from "./Components/Main/Chat/Chat";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main>
        <Routes>
          <Route path='/' element={<Feed />} />
          <Route path='/chat' element={<Chat />} />
        </Routes>
      </Main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
