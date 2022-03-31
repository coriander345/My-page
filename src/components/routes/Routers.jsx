import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import InfiniteScroll from '../../pages/infiniteScroll/InfiniteScroll';

const Routers = () => {
  return (
    <Routes>
      <Route path="h" element={<Home />} />
      <Route path="infi" element={<InfiniteScroll />} />
    </Routes>
  );
};

export default Routers;
