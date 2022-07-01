import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Edit from "./components/Edit";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route exact path='/'element={<Dashboard />} />
        <Route exact path='/edit'element={<Edit />} />
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
