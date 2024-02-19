import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPrint, faEnvelope,faTrash } from '@fortawesome/free-solid-svg-icons';
import { Form, Button } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import avatar1 from '../../assets/images/avatar1.jpg'
import Payrollindex from '../../components/Payroll/Payrollindex';

export default function Paylist() {

    const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [userList] = useState([
    {  no: '01',imageSrc:  avatar1,name: 'Marshall Nichols',email:'marshall-n@gmail.com',salary: '$1,200', status: 'Done', role: 'Web Developer',  action: '', },
    {  no: '02 ',imageSrc:  avatar1,name: ' Susie Willis',email:'marshall-n@gmail.com', salary: '$378', status: 'Done', role: 'Graphic Designer',  action: '', },
    {  no: '03 ',imageSrc:  avatar1,name: ' Debra Stewart',email:'marshall-n@gmail.com',salary: '$653', status: 'Done', role: 'HTML Developer',  action: '', },
    {  no: '04',imageSrc:  avatar1,name: ' Erin Gonzales',email:'marshall-n@gmail.com',salary: ' $451', status: 'Pending', role: 'Mobile',  action: '', },
    {  no: '05',imageSrc:  avatar1,name: ' Susie Willis',email:'marshall-n@gmail.com',salary: ' $1,989', status: 'Done', role: 'VueJs FrontEnd',  action: '', },
    {  no: '06',imageSrc:  avatar1,name: ' Debra Stewart',email:'marshall-n@gmail.com',salary: ' $343', status: 'Pending', role: 'Java Developer',  action: '', },
    {  no: '07',imageSrc:  avatar1,name: ' Erin Gonzales',email:'marshall-n@gmail.com',salary: ' $653', status: 'Done', role: 'Designer',  action: '', },
    {  no: '08',imageSrc:  avatar1,name: ' Ava Alexander',email:'marshall-n@gmail.com',salary: ' $451', status: 'Pending', role: 'Team Leader',  action: '', },
    {  no: '09',imageSrc:  avatar1,name: ' Ava Alexander',email:'marshall-n@gmail.com',salary: '$1,918', status: 'Pending', role: 'Mobile',  action: '', },  
    {  no: '10',imageSrc:  avatar1,name: ' Ava Alexander',email:'marshall-n@gmail.com',salary: '$431', status: 'Done', role: 'VueJs FrontEnd',  action: '', },  
  ]);

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'done':
        return '#4CAF50'; 
      case 'pending':
        return '#FFC107'; 
      
      default:
        return '#ffffff'; 
    }
  };

  // Calculate start and end indices based on the current page and itemsPerPage
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the items for the current page
  const currentPageItems = userList.slice(startIndex, endIndex);

  // Total number of pages
  const totalPages = Math.ceil(userList.length / itemsPerPage);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <div>
         <Payrollindex/>
         <div className='card mt-4 mx-3'>
          <div className='d-flex justify-content-between mx-2 switch-top mt-2'>
            <h6 className='mx-2 mt-3'>EMPLOYEE</h6>
            <Form className="mt-2 d-flex">
              <Form.Control
                type="search"
                placeholder="Search something..."
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">
                <FontAwesomeIcon icon={faSearch} />
              </Button>
            </Form>
          </div>

          <div className='p-3 employeeli mt-3'>
            <div className='table-responsive'>
                <table className='table table-striped p-2'>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>EMPLOYEE</th>
                    <th>ROLE</th>
                    <th>SALARY</th>
                    <th>STATUS</th>
                    <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {currentPageItems.map((user) => (
                    <tr key={user.name}>
                        <td><div className='mt-2 mx-1'>{user.no}</div></td>
                          
                        <td>
                        <div className='row'>
                            <div className='col-2'>
                            <img className="img-thumbnail rounded-circle avatar-sml" src={user.imageSrc} alt=''/>
                            </div>   
                            <div className='col-6'>
                            <strong><small className='d-flex'>{user.name}</small></strong>
                            <br />
                            <small className='d-flex'>{user.email}</small>
                            </div>
                        </div> 
                        </td>
                        <td><div className='mt-2'>{user.role}</div></td>
                        <td><div className='mt-2'>{user.salary}</div></td>
                        <td>
                        <div className='mt-2'> <span style={{ backgroundColor: getStatusColor(user.status), padding: '3px', borderRadius:'5px', color:'white' }}>
                            {user.status}
                        </span></div>
                        </td>  
                        <td>
                        {(
                            <>
                            <button className='btn btn-sm mx-1'>
                                <FontAwesomeIcon icon={faEnvelope} className='text-warning'/>
                            </button>
                            <button className='btn btn-sm mx-1'>
                                <FontAwesomeIcon icon={faPrint} className='text-info'/>
                            </button>
                            <button className='btn btn-sm mx-1'>
                                <FontAwesomeIcon icon={faTrash} className='text-danger'/>
                            </button>
                            </>
                        )}
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </div>

          <ButtonToolbar aria-label="Toolbar with button groups" className='d-flex justify-content-end mb-3'>
            <ButtonGroup className="me-2" aria-label="First group">
              <Button className='mx-1 btn btn-outline-primary' onClick={handlePreviousPage} disabled={currentPage === 1}>
                Previous
              </Button>
              {[...Array(totalPages).keys()].map((page) => (
                <Button className='btn btn-outline-primary' key={page + 1} onClick={() => setCurrentPage(page + 1)} active={page + 1 === currentPage}>
                  {page + 1}
                </Button>
              ))}
              <Button className='mx-1 btn btn-outline-primary' onClick={handleNextPage} disabled={currentPage === totalPages}>
                Next
              </Button>
            </ButtonGroup>
          </ButtonToolbar>
        </div>
    </div>
  )
}
