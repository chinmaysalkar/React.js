import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Dashboard from '../src/pages/HRMS/Dashboard';
import Users from '../src/pages/HRMS/Users';
import Holidays from '../src/pages/HRMS/Holidays';
import Department from '../src/pages/HRMS/Department';
import Employee from '../src/pages/HRMS/Employee';
import Events from '../src/pages/HRMS/Events';
import Accounts from '../src/pages/HRMS/Accounts';
import Activities from '../src/pages/HRMS/Activities';
import Payroll from '../src/pages/HRMS/Payroll';
import Report from '../src/pages/HRMS/Report';
import Gridlist from './components/Department/Gridlist';
import Payslip from '../src/components/Payroll/Payslip';
import VIewEmplyoee from '../src/components/Employee/VIewEmplyoee';
import LeaveEmployee from '../src/components/Employee/LeaveEmployee';
import Payments from './components/Accounts/Payments';
import Expenses from './components/Accounts/Expenses';
import Invoice from './components/Report/Invoice';
import Detail from './components/Report/Detail';
import Calender from './pages/SidebarPages/Calender';
import FileManager from './pages/SidebarPages/FileManager';
import FriendsGroup from './pages/SidebarPages/FriendsGroup';
import Search from './pages/SidebarPages/Search';
import Contact from './pages/SidebarPages/Contact'
import ContactGrid from './pages/SidebarPages/Contact/ContactGrid';
import ContactAdd from './pages/SidebarPages/Contact/ContactAdd';
import Login from './pages/Authentication/Login';
import ProjectList from './pages/Project/ProjectList';
import TaskBoard from './pages/Project/TaskBoard';
import TicketList from './pages/Project/TicketList';
import ProjectClients from './pages/Project/ProjectClients';
import TodoList from './pages/Project/TodoList';
import TicketDetails from './pages/Project/TicketDetails';
import JobDashboard from './pages/Job Portal/JobDashboard';
import Applicant from './pages/Job Portal/Applicant';
import Positions from './pages/Job Portal/Positions';
import Resumes from './pages/Job Portal/Resumes';
import Settings from './pages/Job Portal/Setting';
import Register from './pages/Authentication/Register';
import ForgotPassword from './pages/Authentication/ForgotPassword';
import Error404 from './pages/Authentication/Error404';
import Error500 from './pages/Authentication/Error500';
import ProjectDashboard from './pages/Project/ProjectDashboard';
import NewPassword from './pages/Authentication/NewPassword';
import VerifyEmail from './pages/Authentication/VerifyEmail';
import MyProfile from './pages/Profile/MyProfile';





function App() {
  
  
  
  
  return (
   <>
   
   <div> 
    <Router>
      <Routes>
        <Route path="/" element={<Login/>  }/>
        <Route path="/register" element={<Register />}/>
        <Route path="/forgotpassword" element={<ForgotPassword />}/>
        <Route path="/newpassword" element={<NewPassword />}/>
        <Route path="/verifyemail" element={<VerifyEmail />}/>
        <Route path="/error404" element={<Error404 />}/>
        <Route path="/error500" element={<Error500 />}/>

        
        
        
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/users" element={<Users />}/>
        <Route path="/holidays" element={<Holidays />}/>
        <Route path="/department" element={<Department />}/>
        <Route path="/employee" element={<Employee />}/>
        <Route path="/events" element={<Events />}/>
        <Route path="/accounts" element={<Accounts />}/>
        <Route path="/activities" element={<Activities />}/>
        <Route path="/payroll" element={<Payroll />}/>
        <Route path="/report" element={<Report />}/>
        <Route path="/departmentgv" element={<Gridlist />}/>
        <Route path="/payslip" element={<Payslip />}/>
        <Route path="/viewemployee" element={<VIewEmplyoee />}/>
        <Route path="/leaveemployee" element={<LeaveEmployee />}/>
        <Route path="/payments" element={<Payments />}/>
        <Route path="/expenses" element={<Expenses />}/>
        <Route path="/invoicereport" element={<Invoice />}/>
        <Route path="/detail" element={<Detail />}/>
        <Route path="/calender" element={<Calender />}/>
        <Route path="/friendgroup" element={<FriendsGroup />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/filemanager" element={<FileManager />}/>
        <Route path="/search" element={<Search />}/>
        <Route path="/contactgrid" element={<ContactGrid />}/>
        <Route path="/contactaddnew" element={<ContactAdd />}/>        
        <Route path="/projectlist" element={<ProjectList />}/>
        <Route path="/projecttaskboard" element={<TaskBoard />}/>
        <Route path="/projectdashboard" element={<ProjectDashboard />}/>
        <Route path="/ticketlist" element={<TicketList />}/>
        <Route path="/clients" element={<ProjectClients />}/>
        <Route path="/todolist" element={<TodoList />}/>
        <Route path="/ticketdetails" element={<TicketDetails />}/>
        <Route path="/jobdashboard" element={<JobDashboard />}/>
        <Route path="/positions" element={<Positions />}/>
        <Route path="/applicants" element={<Applicant />}/>
        <Route path="/resumes" element={<Resumes />}/>
        <Route path="/settings" element={<Settings />}/>
        <Route path="/myprofile" element={<MyProfile />}/>
        
        
        
      </Routes>
      
    </Router>
   </div>
   
   
   </>
  );
}

export default App;
