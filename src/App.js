// import Sidebar from './layouts/Sidebar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Skeleton from './layouts/Skeleton';
import Blank from './pages/Blank'
import CreateBranchForm from "./pages/Branch/Create";
import BranchList from "./pages/Branch/List";
import ButtonPage from "./pages/ButtonPage";
import CreateCouncellorForm from "./pages/Councellor/Create";
import CouncellorList from "./pages/Councellor/List";
import CreateCountryForm from "./pages/Country/Create";
import CountryList from "./pages/Country/List";
import Dashboard from "./pages/Dashboard/Dashboard";
import AssignEnquiryForm from "./pages/Enquiry/AssignEnquiry";
import CreateEnquiryForm from "./pages/Enquiry/AddEnquiryModal";
import List from "./pages/Enquiry/List";
import CreateQualificationForm from "./pages/Qualification/Create";
import QualificationList from "./pages/Qualification/List";
import CreateSourceForm from "./pages/Source/Create";
import SourceList from "./pages/Source/List";
import SignupForm from "./pages/SignInSignUp/SignupForm";
import SignInForm from "./pages/SignInSignUp/SignInForm";
import DropDownPage from "./pages/DropDownPage";
import UsersList from "./pages/Users/UsersList";
// import CreateUser from "./pages/Users/AddUserModel"
import Enquiry from "./pages/Dashboard/Enquiry";
import Leads_Enquiry from "./pages/Dashboard/Leads_Enquiries";
import Leads_Enquiry_Visa from "./pages/Dashboard/Leads_Enquiries_visa";
import UniversityList from "./pages/University/List";
import CreateUniversityForm from "./pages/University/Create";
import AddLeads from "./pages/Enquiry/AddLeads";



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<SignInForm/>} />
          {/* <Route exact path="/signup" element={<SignupForm/>} /> */}
          <Route exact path="/signin" element={<SignInForm/>} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/enquiry/list" element={<List />} />
          <Route exact path="/enquiry/addleads" element={<AddLeads/>} />
          <Route exact path="/enquiry/assign" element={<AssignEnquiryForm />} />
          <Route exact path="/source" element={<SourceList />} />
          <Route exact path="/councellor" element={<CouncellorList />} />
          <Route exact path="/country" element={<CountryList />} />
          <Route exact path="/qualification" element={<QualificationList />} />
          <Route exact path="/branch" element={<BranchList />} />
          <Route exact path="/university" element={<UniversityList />} />

          <Route exact path="/users/list" element={<UsersList/>} />
          {/* <Route exact path="/leads_enquiry" element={<Leads_Enquiry/>} /> */}
          {/* <Route exact path="/leads_enquiry_visa" element={<Leads_Enquiry_Visa/>} /> */}

          {/* <Route exact path="/dashboard/leads_enquiry_visa/er" element={<Leads_Enquiry_Visa/>} /> */}
          {/* <Skeleton/> */  }

          <Route exact path="/dropdown/page" element={<DropDownPage />} />
          {/* <Skeleton/> */}

        </Routes>
      </Router>
    </div>
  );
}

export default App;
