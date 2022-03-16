import { Route, Routes, Navigate } from 'react-router-dom';
import Feed from './Components/Main/Feed/Feed';
import Chat from './Components/Main/Chat/Chat';
import About from './Components/Main/About';
import NewFeed from './Components/Main/NewFeed/NewFeed';

export const useRoutes = (isLoggedIn) => {
  if (isLoggedIn) {
    return (
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/about" element={<About />} />
        <Route path="/host/new-topic" element={<NewFeed />} />
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
