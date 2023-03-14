import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Overall from "./UI/Overall";
import Expense from "./UI/Expense";
import Income from "./UI/Income";

import Main from "./main";

function App() {
  return (
    <div className="UIclass">
      <Navbar />
      <Main />
      <Routes>
        <Route path="/" element={<Overall />} />
        <Route path="/expenses" element={<Expense />} />
        <Route path="/Income" element={<Income />} />
      </Routes>
    </div>
  );
}

export default App;
