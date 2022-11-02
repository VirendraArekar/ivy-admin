// import Sidebar from './layouts/Sidebar';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
// import Skeleton from './layouts/Skeleton';
import Blank from './pages/Blank'
import ButtonPage from "./pages/ButtonPage";
import Dashboard from "./pages/Dashboard";
import CreateEnquiryForm from "./pages/Enquiry/Create";
import List from "./pages/Enquiry/List";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route exact path="/" element={<Blank />} /> */}
          <Route exact path="/component/button" element={<ButtonPage />} />
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/enquiry/list" element={<List />} />
          <Route exact path="/enquiry/create" element={<CreateEnquiryForm />} />
          {/* <Skeleton/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
