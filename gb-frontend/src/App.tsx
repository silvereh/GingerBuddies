import React from "react";
import Routing from './Routing';

import './App.scss';

const App = () => {
  return (
    <div className={ `App` }>
      <main className="main">
        <Routing />
      </main>
    </div>
  );
}
export default App;
