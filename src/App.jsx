import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/HomePage';
import Refpage from './pages/Refpage';
import Chatpage from './pages/ChatPage';
import PythonPage from './pages/PythonPage';
import JavascriptPage from './pages/JavascriptPage';
import ReactPage from './pages/ReactPage';
import CplusplusPage from './pages/CplusplusPage';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* Add comments for expandability */}
        <Route path="/" element={<Homepage />} />
        <Route path="/reference" element={<Refpage />} />
        <Route path="/chat" element={<Chatpage />} />
        <Route path="/python" element={<PythonPage />} />
        <Route path="/javascript" element={<JavascriptPage />} />
        <Route path="/react" element={<ReactPage />} />
        <Route path="/c++" element={<CplusplusPage />} />
      </Routes>
    </div>
  );
};

export default App;
