import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';
import Academic from '../pages/Academic';
import Reading from '../pages/Reading';
import Todo from '../pages/Todo';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/portfolio" element={<Portfolio />} />
    <Route path="/academic" element={<Academic />} />
    <Route path="/reading" element={<Reading />} />
    <Route path="/todo" element={<Todo />} />
  </Routes>
);

export default AppRoutes;
