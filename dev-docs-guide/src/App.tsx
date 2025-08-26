import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        {/*
          ADD MORE ROUTES HERE
          1. Add a new `<Route>` component.
          2. Set the `path` prop to the desired URL (e.g., "/contact").
          3. Set the `element` prop to the component for that page (e.g., `<ContactPage />`).
          4. Make sure to import the component.
          Example:
          <Route path="/contact" element={<ContactPage />} />
        */}
      </Routes>
    </div>
  );
}

export default App;
