import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket,faPhone,faAlignLeft, faComment, faFolder, faCalendar, faCreditCard, faSearch,faGear,faRocket,faMugHot, faSuitcase, faLock, faChevronDown, faChevronUp, faTimes} from '@fortawesome/free-solid-svg-icons'; 
// import logo from '../assets/images/command-symbol-svgrepo-com.svg';
import { Link } from 'react-router-dom';
import avatar from '../assets/images/avatar1.jpg'
import { faFacebook, faTwitter, faSkype, } from '@fortawesome/free-brands-svg-icons';
import logo1 from '../assets/images/logo1.png'


const Sidebar = () => {
  
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  // User Profile Toggle Bar
  const [isSidebarExpanded1, setIsSidebarExpanded1] = useState(false);

  const toggleSidebar1 = () => {
    setIsSidebarExpanded1(!isSidebarExpanded1);
  };


// User Profile
  const userData = [
    {
      name: 'Sara Hopkins',
      role: 'Webdeveloper',
      imageSrc: avatar,
      socialLinks: [
        { icon: 'faFacebook', title: 'Facebook', href: '#' },
        { icon: 'faTwitter', title: 'Twitter', href: '#' },
        { icon: 'faPhone', title: '1234567890', href: '#' },
        { icon: 'faSkype', title: '@skypename', href: '#' },
      ],
    },
   
  ];

  const getFontAwesomeIcon = (iconName) => {
    switch (iconName) { 
      case 'faFacebook':
        return <FontAwesomeIcon icon={faFacebook} />;
      case 'faTwitter':
        return <FontAwesomeIcon icon={faTwitter} />;
      case 'faPhone':
        return <FontAwesomeIcon icon={faPhone} />;
      case 'faSkype':
        return <FontAwesomeIcon icon={faSkype} />;
      default:
        return null;
    }
  };


  //Statistics  
  const [isCardCollapsed, setCardCollapsed] = useState(false);

  const toggleCardCollapse = () => {
    setCardCollapsed(!isCardCollapsed);
  };


  const statisticsData = [
    { label: 'Balance', value: '$545' },
    { label: 'Growth', value: '27%' },
    { title: 'Total Income', percent: 77, color: 'bg-blue' },
    { title: 'Total Expenses', percent: 50, color: 'bg-danger' },
    { title: 'Gross Profit', percent: 23, color: 'bg-green' },
  ];


  //Freiend
  const [isCardCollapsed1, setCardCollapsed1] = useState(false);

  const toggleCardCollapse1 = () => {
    setCardCollapsed1(!isCardCollapsed1);
  };

  const users = [
    { id: 1, name: 'Donald Gardner', role: 'Designer, Blogger', status: 'online', avatar: avatar },
    { id: 2, name: 'Wendy Keen', role: 'Java Developer', status: 'online', avatar: avatar },
    { id: 3, name: 'Matt Rosales', role: 'CEO, Epic Theme', status: 'offline', avatar: avatar },
  ];

  
  
  return (
    <>
   {!isSidebarExpanded1 && (
    
    <div className="wrapper" >
    
      <div className='sidebar-fixed'>

        <div className='mt-3 mb-4'>
          <div className='logo'>
          <Link to="/dashboard"><img src={logo1} alt="" className='logo1 mx-2  mt-2'/></Link>
          </div>          
        </div>

        <div>
            <li className="sidebar-item">
            <Link to="/search" className="sidebar-link">
            <FontAwesomeIcon icon={faSearch} className='sidebar-fixed1'/>
              
            </Link>
            </li>
            <li className="sidebar-item">
              <Link to="/calender" className="sidebar-link">
              <FontAwesomeIcon icon={faCalendar}className='sidebar-fixed1' />
                
              </Link>
            </li>
            <li className="sidebar-item">
              <Link to="/contact" className="sidebar-link">
              <FontAwesomeIcon icon={faCreditCard} className='sidebar-fixed1'/>
              
              </Link>
            </li>
            <li className="sidebar-item">
              <Link to="/friendgroup" className="sidebar-link">
              <FontAwesomeIcon icon={faComment} className='sidebar-fixed1'/>
                <i className="lni lni-agenda"></i>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link to="/filemanager" className="sidebar-link">
              <FontAwesomeIcon icon={faFolder} className='sidebar-fixed1'/>
                <i className="lni lni-agenda"></i>
              </Link>
            </li>
        </div>

        <div className="sidebar-footer pb-3">  
          
          <button className="toggle-btn mx-1" type="button" onClick={toggleSidebar} >
            <FontAwesomeIcon icon={faAlignLeft}/>
          </button>

          <Link to="/side" className="sidebar-link">
            <FontAwesomeIcon icon={faGear} className='side-setting-icon'/>      
          </Link>

          <div className='px-1'><img src={avatar} alt="" className='sidebar-profile-icon avatar rounded-circle avatar-sml mt-2 mx-3' onClick={toggleSidebar1}/></div>
          

        </div>

      </div>


      <aside id="sidebar" className={` sid ${isSidebarExpanded ? 'expand' : ''}`} style={{ display: isSidebarExpanded ? 'block' : 'none' }}>    
        <div className='mx-4 mt-4' style={{ display: isSidebarExpanded ? 'block' : 'none' }}>
        <h5 className='d-flex'>Epic<span className='mx-1'>HR</span></h5> 
        </div>
        <ul className="sidebar-nav">
        <div className='row'>
        <div className='col-md-3 sidebar-menu p-0' style={{ display: isSidebarExpanded ? 'block' : 'none' }}>

        <div id="sidebar2">
        <small className='mx-4 text-secondary'>DIRECTORIES</small>
        <li className="sidebar-item">
        <a
        href="/side"
        className="sidebar-link collapsed has-dropdown"
        data-bs-toggle="collapse"
        data-bs-target="#hrms"
        aria-expanded="false"
        aria-controls="hrms"
        > 
        <FontAwesomeIcon icon={faRocket} style={{color:'black'}}/>
        <span className='mx-1'>HRMS</span>
        </a>
        <ul
        id="hrms"
        className="sidebar-dropdown list-unstyled collapse"
        data-bs-parent="#sidebar"
        >
        <li className="sidebar-item">
          <Link to="/dashboard" className="sidebar-link">
            Dashboard
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/users" className="sidebar-link">
            Users
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/department" className="sidebar-link">
            Department
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/employee" className="sidebar-link">
            Employee
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/activities" className="sidebar-link">
            Activities
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/holidays" className="sidebar-link">
            Holidays
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/events" className="sidebar-link">
            Events
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/payroll" className="sidebar-link">
            Payroll
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/accounts" className="sidebar-link">
            Accounts
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/report" className="sidebar-link">
            Report
          </Link>
        </li>
        </ul>
        </li>

        <li className="sidebar-item">
        <a
        href="/side"
        className="sidebar-link collapsed has-dropdown"
        data-bs-toggle="collapse"
        data-bs-target="#project"
        aria-expanded="false"
        aria-controls="project"
        >
        <FontAwesomeIcon icon={faMugHot} style={{color:'black'}}/>
        <span className='mx-1'>Project</span>
        </a>
        <ul
        id="project"
        className="sidebar-dropdown list-unstyled collapse"
        data-bs-parent="#sidebar"
        >
        <li className="sidebar-item">
          <Link to="/projectdashboard" className="sidebar-link">
            Dashboard
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/projectlist" className="sidebar-link">
            Project List
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/projecttaskboard" className="sidebar-link">
            Taskboard
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/ticketlist" className="sidebar-link">
            Ticket List
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/ticketdetails" className="sidebar-link">
            Ticket Details
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/clients" className="sidebar-link">
            clients 
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/todolist" className="sidebar-link">
            Todo List
          </Link>
        </li>
        </ul>
        </li>

        <li className="sidebar-item">
        <a
        href="/side"
        className="sidebar-link collapsed has-dropdown"
        data-bs-toggle="collapse"
        data-bs-target="#jobPortal"
        aria-expanded="false"
        aria-controls="jobPortal"
        >
        <FontAwesomeIcon icon={faSuitcase} style={{color:'black'}}/>
        <span className='mx-1'>Job Portal</span>
        </a>
        <ul
        id="jobPortal"
        className="sidebar-dropdown list-unstyled collapse"
        data-bs-parent="#sidebar"
        >
        <li className="sidebar-item">
          <Link to="/jobdashboard" className="sidebar-link">
            Job Dashboard
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/positions" className="sidebar-link">
            Positions
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/applicants" className="sidebar-link">
            Applicant
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/resumes" className="sidebar-link">
            Resumes
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/settings" className="sidebar-link">
            Settings
          </Link>
        </li>

        </ul>
        </li>

        <li className="sidebar-item">
        <a
        href="/side"
        className="sidebar-link collapsed has-dropdown"
        data-bs-toggle="collapse"
        data-bs-target="#authentication"
        aria-expanded="false"
        aria-controls="authentication"
        >
        <FontAwesomeIcon icon={faLock} style={{color:'black'}}/>
        <span className='mx-1'>Authentication</span>
        </a>
        <ul
        id="authentication"
        className="sidebar-dropdown list-unstyled collapse"
        data-bs-parent="#sidebar"
        >
        <li className="sidebar-item">
          <Link to="/" className="sidebar-link">
            Login
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/register" className="sidebar-link">
            Register
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/forgotpassword" className="sidebar-link">
            Forgot Password
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/error404" className="sidebar-link">
            404 error
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/error500" className="sidebar-link">
            500 Error
          </Link>
        </li>
        </ul>
        </li>


        

        </div>
        </div>
        </div>  

        </ul>

      </aside>

    </div>
    )} 
     
      <div id='profile-sidebar' className={` sid ${isSidebarExpanded1 ? 'expand' : ''}`} style={{ display: isSidebarExpanded1 ? 'block' : 'none', backgroundColor:'white', width:'400px' }}>
        <div className='user-div open mt-4 mx-2 d-flex justify-content-between'>
          <h5 className="brand-name d-flex mx-2">Epic <span className='mx-2'>HR</span></h5>
          <p className="user_btn sidebar-profile-icon mx-3">
            <FontAwesomeIcon icon={faArrowRightFromBracket} onClick={toggleSidebar1}/>
          </p>
        </div>
        <div>
          {userData.map((user, index) => (
            <div key={index} className="card border-0 mt-2 p-3">
              <div className="card-body">
                <div className="media">
                  <Link to='/myprofile'><img className="rounded-circle profile-img1 mt-2 mx-2" src={user.imageSrc} alt="avatar" /></Link>
                  <div className="media-body mx-3">
                    <h5 className="m-0">{user.name}</h5>
                    <p className="text-muted mb-0">{user.role}</p>
                    <ul className="social-links list-inline mb-0 mt-2">
                      {user.socialLinks.map((link, linkIndex) => (
                        <li key={linkIndex} className="list-inline-item mx-2 ">
                          <a href={link.href} title={link.title} data-toggle="tooltip" data-original-title={link.title} className='text-secondary'>
                          {getFontAwesomeIcon(link.icon)}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>


        <div className='mb-5'>
          <div  className={`card bg-white border-0 px-3${isCardCollapsed ? ' card-collapsed' : ''}`}>
          <div className="card-header border-0 bg-white d-flex justify-content-between" >
            <div><h6 className="card-title">STATISTICS</h6></div>
            
            <div className="card-options">
              <span className="card-options-collapse mx-3" data-toggle="card-collapse" onClick={toggleCardCollapse}>
                {isCardCollapsed ? (
                  <FontAwesomeIcon icon={faChevronDown} />
                ) : (
                  <FontAwesomeIcon icon={faChevronUp} />
                )}
              </span>
              <span className="card-options-remove " data-toggle="card-remove">
              <FontAwesomeIcon icon={faTimes} />
              </span>
            </div>
          </div>

          {!isCardCollapsed && (
          <div className="card-body">
            <div className="text-center">
              <div className="row mb-2">
                {statisticsData.slice(0, 2).map((data, index) => (
                  <div key={index} className="col-6 pb-3">
                    <label className="mb-0">{data.label}</label>
                    <h4 className="font-30 font-weight-bold">{data.value}</h4>
                  </div>
                ))}
              </div>
            </div>
            {statisticsData.slice(2).map((data, index) => (
              <div key={index} className="form-group mb-4">
                <label className="d-block">
                  {data.title} <span className="float-right">{data.percent}%</span>
                </label>
                <div className="progress progress-xs">
                  <div
                    className={`progress-bar ${data.color}`}
                    role="progressbar"
                    aria-valuenow={data.percent}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: `${data.percent}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          )}
          </div>
        </div>


        <div>
          <div className={`card bg-white border-0 px-3${isCardCollapsed1 ? ' card-collapsed' : ''}`}>
          <div className="card-header border-0 bg-white d-flex justify-content-between">
            <div><h6 className="card-title">FRIENDS</h6></div>
            
            <div className="card-options">
              <span className="card-options-collapse mx-3" data-toggle="card-collapse" onClick={toggleCardCollapse1}>
                {isCardCollapsed1 ? (
                  <FontAwesomeIcon icon={faChevronDown} />
                ) : (
                  <FontAwesomeIcon icon={faChevronUp} />
                )}
              </span>
              <span className="card-options-remove " data-toggle="card-remove">
              <FontAwesomeIcon icon={faTimes} />
              </span>
            </div>
          </div>

          {!isCardCollapsed1 && (
          <div className="card-body">
            <ul className="right_chat list-unstyled">
              {users.map(user => (
                <li key={user.id}>

                  <Link to="#!">
                    <div className="media mb-3 mt-2">
                      <img className="media-object" src={user.avatar} alt={user.name} />
                      <div className="media-body">
                        <span className="name">{user.name}</span>
                        <span className="message">{user.role}</span>
                        <span className={`badge badge-${user.status === 'online' ? 'success' : 'danger'} status-badge`}>
                          {user.status}
                        </span>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          )}
          </div>
        </div>

      </div>  
    </>   

  );
};

export default Sidebar;
