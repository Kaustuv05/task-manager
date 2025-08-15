import React from 'react';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Outlet /> {/* This renders the matched child route */}
    </div>
  );
}

export default App;