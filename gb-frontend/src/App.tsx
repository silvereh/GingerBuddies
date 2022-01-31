import React from "react";
import Routing from './Routing';

import './App.scss';
import Layout from './Layout';

const App = () => {
  return (
    <div className="App">
      <Layout.Header />
      <main className="main" id="main">
        <Routing />
      </main>
      <Layout.Footer />
    </div>
  );
}
export default App;
