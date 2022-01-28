import React from "react";
import { Routes, Route } from 'react-router-dom';

import { Home } from './Home';

const Routing = () => (
  <Routes data-testid="Routing">
    <Route path="/" element={ <Home /> } />
  </Routes>
);

export default Routing;
