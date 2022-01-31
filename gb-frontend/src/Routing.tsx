import React from "react";
import { Routes, Route } from 'react-router-dom';

import { Home } from './Home';

const Routing = () => (
  <Routes data-testid="Routing">
    <Route path="/GingerBuddies/" element={ <Home /> } />
    <Route path="/GingerBuddies/*" element={ <div /> }></Route>
  </Routes>
);

export default Routing;
