import React from "react";
import { BrowserRouter } from "react-router-dom";
import HistoryUser from "./page/historyUser"; // Use uppercase for the component name
import Test from "./page/test";
function App() {
  return (
    <BrowserRouter>
      <HistoryUser />
      <Test />
    </BrowserRouter>
  );
}

export default App;
