import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/NavBar";
import ConfigList from './components/ConfigList';
import ConfigForm from './components/ConfigForm';

const App: React.FC = () => {
  return (
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<ConfigList />} />
            <Route path="/create" element={<ConfigForm />} />
          </Routes>
        </div>
      </Router>
  );
};

export default App;
