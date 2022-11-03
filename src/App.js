// import Sidebar from './layouts/Sidebar';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
// import Skeleton from './layouts/Skeleton';
import Blank from './pages/Blank'
import ButtonPage from "./pages/ButtonPage";
import CreateCouncellorForm from "./pages/Councellor/Create";
import CouncellorList from "./pages/Councellor/List";
import Dashboard from "./pages/Dashboard";
import AssignEnquiryForm from "./pages/Enquiry/AssignEnquiry";
import CreateEnquiryForm from "./pages/Enquiry/Create";
import List from "./pages/Enquiry/List";
import CreateSourceForm from "./pages/Source/Create";
import SourceList from "./pages/Source/List";


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
          <Route exact path="/enquiry/assign" element={<AssignEnquiryForm />} />
          <Route exact path="/source/list" element={<SourceList />} />
          <Route exact path="/source/create" element={<CreateSourceForm />} />
          <Route exact path="/councellor/list" element={<CouncellorList />} />
          <Route exact path="/councellor/create" element={<CreateCouncellorForm />} />
          {/* <Skeleton/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
