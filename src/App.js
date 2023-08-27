import React, { useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { UserContext } from './UserContext';
import Authenticate from './components/Authenticate';
import Home from './components/Home';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const [user, setUser] = useState({ isLoggedIn: false, email: '' });

  return (
    <UserContext.Provider value={user}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<PrivateRoute><Home setStatus={setUser} /></PrivateRoute>} />
          <Route path="/login" element={<Authenticate setStatus={setUser} />} />
        </Routes>
      </HashRouter>
    </UserContext.Provider>
  );
}

export default App;
