import { Route, Routes, Navigate } from 'react-router-dom';
import Feed from './Components/Main/Feed/Feed';
import Chat from './Components/Main/Chat/Chat';
import About from './Components/Main/About';

export const useRoutes = (isLoggedIn) => {
  if (isLoggedIn) {
    return (
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Feed />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
