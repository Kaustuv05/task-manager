import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold underline">
        Hello, world!
      </h1>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default HomePage;
