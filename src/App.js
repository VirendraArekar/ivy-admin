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
import SignupForm from "./pages/SignInSignUp/SignupForm";
import SignInForm from "./pages/SignInSignUp/SignInForm";
import DropDownPage from "./pages/DropDownPage";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/signup" element={<SignupForm/>} />
          <Route exact path="/signin" element={<SignInForm/>} />
          <Route exact path="/component/button" element={<ButtonPage />} />
          <Route exact path="/component/dropdown" element={<DropDownPage/>} />
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
