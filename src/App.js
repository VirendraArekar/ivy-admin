// import Sidebar from './layouts/Sidebar';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
// import Skeleton from './layouts/Skeleton';
import Blank from './pages/Blank'
import CreateBranchForm from "./pages/Branch/Create";
import BranchList from "./pages/Branch/List";
import ButtonPage from "./pages/ButtonPage";
import CreateCouncellorForm from "./pages/Councellor/Create";
import CouncellorList from "./pages/Councellor/List";
import CreateCountryForm from "./pages/Country/Create";
import CountryList from "./pages/Country/List";
import Dashboard from "./pages/Dashboard";
import AssignEnquiryForm from "./pages/Enquiry/AssignEnquiry";
import CreateEnquiryForm from "./pages/Enquiry/Create";
import List from "./pages/Enquiry/List";
import CreateQualificationForm from "./pages/Qualification/Create";
import QualificationList from "./pages/Qualification/List";
import CreateSourceForm from "./pages/Source/Create";
import SourceList from "./pages/Source/List";
import SignupForm from "./pages/SignInSignUp/SignupForm";
import SignInForm from "./pages/SignInSignUp/SignInForm";
import DropDownPage from "./pages/DropDownPage";
import UsersList from "./pages/Users/UsersList";
import CreateUser from "./pages/Users/CreateUser"
import Enquiry from "./pages/Dashboard/Enquiry";
import Leads_Enquiry from "./pages/Dashboard/Leads_Enquiries";
import Leads_Enquiry_Visa from "./pages/Dashboard/Leads_Enquiries_visa";



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/blank" element={<Blank/>} />
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
          <Route exact path="/country/list" element={<CountryList />} />
          <Route exact path="/country/create" element={<CreateCountryForm />} />
          <Route exact path="/qualification/list" element={<QualificationList />} />
          <Route exact path="/qualification/create" element={<CreateQualificationForm />} />
          <Route exact path="/branch/list" element={<BranchList />} />
          <Route exact path="/branch/create" element={<CreateBranchForm />} />

          <Route exact path="/users/list" element={<UsersList/>} />
          <Route exact path="/users/create" element={<CreateUser/>} />
          <Route exact path="/dashboard/enquiry" element={<Enquiry/>} />
          <Route exact path="/dashboard/leads_enquiry" element={<Leads_Enquiry/>} />
          <Route exact path="/dashboard/leads_enquiry_visa" element={<Leads_Enquiry_Visa/>} />
          {/* <Route exact path="/dashboard/leads_enquiry_visa/er" element={<Leads_Enquiry_Visa/>} /> */}
          {/* <Skeleton/> */  }
        </Routes>
      </Router>
    </div>
  );
}

export default App;
