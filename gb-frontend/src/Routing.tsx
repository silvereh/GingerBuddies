import React from "react";
import { Routes, Route } from 'react-router-dom';

import { Home } from './Home';

const Routing = () => (
  <Routes data-testid="Routing">
    <Route path="/" element={ <Home /> } />
    <Route path="/*" element={ <div /> }></Route>
  </Routes>
);

export default Routing;
