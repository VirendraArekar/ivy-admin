// import Sidebar from './layouts/Sidebar';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
// import Skeleton from './layouts/Skeleton';
import Blank from './pages/Blank'
import ButtonPage from "./pages/ButtonPage";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Blank />} />
          <Route exact path="/component/button" element={<ButtonPage />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          {/* <Skeleton/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
