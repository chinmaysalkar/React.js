import React from 'react'
// import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faBell, faUser,faGear,faPaperPlane,faCircleQuestion,faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
// import ReactCountryFlag from "react-country-flag"
import { Dropdown } from 'react-bootstrap';
import { FaCheck, FaUser, FaThumbsUp, FaQuestionCircle, FaShoppingCart } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import avatar1 from '../assets/images/avatar1.jpg'


export default function Header() {


    // const [isDropdownOpen, setDropdownOpen] = useState(false);

    // const [selectedLanguage, setSelectedLanguage] = useState(null);

    // const handleIconClick = () => {
    //     setDropdownOpen(!isDropdownOpen);
    // };

    // const handleLanguageSelect = (languageCode) => {
    //     setSelectedLanguage(languageCode);
    // };


    const users = [
        {
          id: 1,
          name: 'Donald Gardner',
          role: 'Designer, Blogger',
          status: 'online',
        //   imageUrl: '../assets/images/xs/avatar4.jpg',
        },
        {
          id: 2,
          name: 'Wendy Keen',
          role: 'Java Developer',
          status: 'online',
        //   imageUrl: '../assets/images/xs/avatar5.jpg',
        },
        {
          id: 3,
          name: 'Matt Rosales',
          role: 'CEO, Epic Theme',
          status: 'offline',
        //   imageUrl: '../assets/images/xs/avatar2.jpg',
        },
        {
          id: 4,
          name: 'Phillip Smith',
          role: 'Writer, Mag Editor',
          status: 'online',
        //   imageUrl: '../assets/images/xs/avatar3.jpg',
        },
      ];


      const feeds = [
        {
          icon: <FaCheck/>,
          title: 'Issue Fixed',
          timestamp: '11:05',
          description: 'WE have fixed all design bugs with responsive',
          className: '',
        },
        {
          icon: <FaUser/>,
          title: 'New User',
          timestamp: '10:45',
          description: 'I feel great! Thanks team',
          className: '',
        },
        {
          icon: <FaThumbsUp/>,
          title: '7 New Feedback',
          timestamp: 'Today',
          description: 'It will give a smart finishing to your site',
          className: '',
        },
        {
          icon: <FaQuestionCircle/>,
          title: 'Server Warning',
          timestamp: '10:50',
          description: 'Your connection is not private',
          className: '',
        },
        {
          icon: <FaShoppingCart/>,
          title: '7 New Orders',
          timestamp: '11:35',
          description: 'You received a new order from Tina.',
          className: '',
        },
      ];

    const location = useLocation();

   
    const getPageSpecificUsername = (pathname) => {
        
        switch (pathname) {
        case '/dashboard':
            return 'HR Dashboard';

        case '/myprofile':
            return 'My Profile'; 

        case '/report':
            return 'Report';
        case '/holidays':
            return 'Holiday';
        case '/payroll':
            return 'Payroll';
        case '/accounts':
            return 'Accounts';
        case '/activities':
            return 'Activities';
        case '/department':
            return 'Department';
        case '/events':
            return 'Events';
        case '/users':
            return 'Users';
        case '/employee':
            return 'Employee';
        case '/adduser':
            return 'Users';
        case '/departmentgv':
            return 'Department';
        case '/payslip':
            return 'Payroll'; 
        case '/viewemployee':
            return 'Employee';
        case '/leaveemployee':
            return 'Employee';
        case '/payments':
            return 'Account';

        case '/expenses':
            return 'Account';

        case '/invoicereport':
            return 'Report';

        case '/detail':
            return 'Report';
            
        case '/calender':
            return 'Calender';

        case '/contact':
            return 'Contact';
            
        case '/contactgrid':
            return 'Contact';

        case '/contactaddnew':
            return 'Contact';

        case '/filemanager':
            return 'File Manager';

        case '/friendgroup':
            return 'Friend Group';

        case '/search':
            return 'Search';
            
        case '/projectlist':
            return 'Project';

        case '/projecttaskboard':
            return 'Taskboard';

        case '/projectdashboard':
            return 'Project Dashboard';

        case '/ticketlist':
            return 'Ticket List';

        case '/ticketdetails':
            return 'Ticket Details';

        case '/clients':
            return 'Clients';

        case '/todolist':
            return 'Todo List';
           
        case '/jobdashboard':
            return 'Job Dashboard';
           
        case '/positions':
            return 'Job Positions';
            
        case '/applicants':
            return 'Job Applicants';
          
        case '/resumes':
            return 'Job Resumes';
            
        case '/settings':
            return 'Job Settings';

                
        default:
            return 'HR Dashboard';
        }
    };
    const username = getPageSpecificUsername(location.pathname);

  return (
    <div className='col-lg-12 col-md-12 col-sm-12 mx-3'>
        <div className='mt-3'>
            <div className='d-flex justify-content-between'>
                <div className='d-flex'>
                    {/* <button className="toggle-btn" type="button" onClick={toggleSidebar} >
                        <FontAwesomeIcon icon={faAlignLeft}/>
                    </button> */}
                    <Navbar.Brand href="#" className='mt-1'>{username}</Navbar.Brand>

                {/* <div className='d-flex mx-2'>
                    <div className='mx-2'>
                        <select className="custom-select p-2">
                            <option>Year</option>
                            <option>Month</option>
                            <option>Week</option>
                        </select>
                    </div> 

                    <div>
                        <Form className="me-auto xs-hide">
                            <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            />   
                        </Form>
                    </div>
                </div> */}
                </div>
                  
                <div className='d-flex header-right mx-3'>                 
                    <div className='d-flex xs-hide'>
                        <div className='d-flex mx-2'>                       
                            {/* <li className="nav-item dropdown mx-2">
                                <a className="nav-link dropdown-toggle" href="dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Language
                                </a>
                                <ul className="dropdown-menu ">
                                    <li className={`dropdown-item ${selectedLanguage === 'US' ? 'selected' : ''}`} onClick={() => handleLanguageSelect('US')}>
                                        <ReactCountryFlag countryCode="US" style={{ fontSize: '2em' , marginRight: '10px' }} />
                                            English
                                    </li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li className={`dropdown-item ${selectedLanguage === 'ES' ? 'selected' : ''}`} onClick={() => handleLanguageSelect('ES')}>
                                        <ReactCountryFlag countryCode="ES" style={{ fontSize: '2em', marginRight: '10px' }} />
                                        Spanish
                                    </li>
                                    <li className={`dropdown-item ${selectedLanguage === 'JP' ? 'selected' : ''}`} onClick={() => handleLanguageSelect('JP')}>
                                        <ReactCountryFlag countryCode="JP" style={{ fontSize: '2em' , marginRight: '10px' }} />
                                            Japanese
                                    </li>
                                    <li className={`dropdown-item ${selectedLanguage === 'FR' ? 'selected' : ''}`} onClick={() => handleLanguageSelect('FR')}>
                                        <ReactCountryFlag countryCode="FR" style={{ fontSize: '2em', marginRight: '10px' }} />
                                            France
                                    </li>
                                </ul>

                            </li> */}


                            {/* <li className="nav-item dropdown mx-2">
                                <a className="nav-link dropdown-toggle" href="dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Report
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/action">Ms Excel</a></li>
                                    <li><a className="dropdown-item" href="/action">Ms Word</a></li>
                                    <li><a className="dropdown-item" href="/action">PDF</a></li>
                                </ul>
                            </li> */}



                            <li className="nav-item dropdown mx-2">
                                <a className="nav-link dropdown-toggle" href="dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Project
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/action">Graphics Design</a></li>
                                    <li><a className="dropdown-item" href="/action">Angular Admin</a></li>
                                    <li><a className="dropdown-item" href="/action">PSD to HTML</a></li>
                                    <li><a className="dropdown-item" href="/action">IOs App Development</a></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><a className="dropdown-item" href="/action">Home Development</a></li>
                                    <li><a className="dropdown-item" href="/action">New Blog post</a></li>
                                </ul>
                            </li>
                        </div>
                        
                        

                        <div className="notification d-flex mt-1">
                            
                            <Dropdown className='mx-2'>
                                <Dropdown.Toggle variant="default" className="nav-link icon d-none d-md-flex btn btn-default btn-icon ml-1">
                                <FontAwesomeIcon icon={faEnvelope}  />           
                                <span className="blink position-absolute top-2 start-100  translate-middle p-2 bg-danger rounded-circle"></span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu style={{ position: 'absolute', left: '50%', transform: 'translateX(-100%)' }}>
                                
                                <ul className="right_chat list-unstyled  p-2">
                                {users.map(user => (
                                    <li key={user.id} className={user.status === 'online' ? 'online' : 'offline'}>
                                    <a href="fake_url">
                                        <div className="media">
                                            <img className="media-object rounded-circle avatar-sml" src={avatar1} alt=''/>
                                        <div className="media-body mb-3">
                                            <small className="name mx-3">{user.name}</small>
                                            <small className="message mx-3">{user.role}</small>
                                            <span className="badge badge-outline status"></span>
                                        </div>
                                        </div>
                                    </a>
                                    </li>
                                ))}
                                </ul>
                                <Dropdown.Divider />
                                <Dropdown.Item className="text-center text-muted-dark readall">Mark all as read</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            
                            <Dropdown className='mx-2'>
                                <Dropdown.Toggle variant="default" className="nav-link icon d-none d-md-flex btn btn-default btn-icon ml-1">
                                
                                <FontAwesomeIcon icon={faBell}  />
                                <span className="blink position-absolute top-2 start-100  translate-middle p-2 bg-success rounded-circle"></span>
                                
                                </Dropdown.Toggle>
                                <Dropdown.Menu style={{ position: 'absolute', left: '50%', transform: 'translateX(-100%)' }}>
                                
                                <ul className="list-unstyled feeds_widget p-2">
                                    {feeds.map((feed, index) => (
                                        <li key={index} className='d-flex mb-3'>
                                        <div className="feeds-left mx-3">{feed.icon}</div>
                                        <div className="feeds-body">
                                            <h6 className={`title ${feed.className} d-flex justify-content-between`}>
                                            {feed.title} <small className="float-right text-muted mx-1">{feed.timestamp}</small>
                                            </h6>
                                            <small>{feed.description}</small>
                                        </div>
                                        </li>
                                    ))}
                                </ul>

                                <Dropdown.Divider />
                                <Dropdown.Item href="fake_url" className="text-center text-muted-dark readall">Mark all as read</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                        
                            <Dropdown className='mx-1'>
                                <Dropdown.Toggle variant="default" className="nav-link icon d-none d-md-flex btn btn-default btn-icon ml-1">
                                <FontAwesomeIcon icon={faUser}  />
                                </Dropdown.Toggle>
                                <Dropdown.Menu style={{ position: 'absolute', left: '50%', transform: 'translateX(-100%)' }}>                               
                                <Dropdown.Item className='mb-2'> <Link to="/myprofile" className='text-black '><FontAwesomeIcon  icon={faUser} className="dropdown-icon"/> Profile</Link></Dropdown.Item>
                                <Dropdown.Item className='mb-2'><FontAwesomeIcon  icon={faGear} className="dropdown-icon"/> Settings</Dropdown.Item>
                                <Dropdown.Item className='mb-2'><FontAwesomeIcon  icon={faEnvelope} className="dropdown-icon"/> Inbox</Dropdown.Item>
                                <Dropdown.Item className='mb-2'><FontAwesomeIcon  icon={faPaperPlane} className="dropdown-icon"/> Message</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item className='mb-2'><FontAwesomeIcon  icon={faCircleQuestion} className="dropdown-icon"/> Need help?</Dropdown.Item>
                                <Dropdown.Item href="/" className='mb-2'><FontAwesomeIcon  icon={faArrowRightFromBracket} className="dropdown-icon"/> Sign out</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>       
                </div>
            </div>
        </div>
       <div className='mr-3'>  <hr /> </div>       
    </div>
  )
}


