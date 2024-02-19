import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faTrash, faPrint, faSearch } from '@fortawesome/free-solid-svg-icons';
import Accountindex from '../../components/Accounts/Accountindex'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import avatar1 from '../../assets/images/avatar1.jpg';
import { Button, Form } from 'react-bootstrap';
import { faPaypal, faBitcoin, faCcVisa } from '@fortawesome/free-brands-svg-icons';
export default function Invoices() {
    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const [userList] = useState([
      {  date: '07 March, 2018',invoiceno: '#LA-5218',imageSrc:  avatar1,clients: 'vPro tec LLC.',amount: '$1,200', status: 'Approved',   action: '',type:'Paypal' },
      {  date: '25 Jun, 2018',invoiceno: '#LA-1212 ',imageSrc:  avatar1,clients: ' BT Technology', amount: '$378', status: 'Pending',   action: '',type:'Paypal' },
      {  date: '12 July, 2018',invoiceno: '#LA-0222 ',imageSrc:  avatar1,clients: ' More Infoweb Pvt.',amount: '$653', status: 'Pending',   action: '',type:'Paypal' },
      {  date: '13 July, 2018',invoiceno: '#LA-0312',imageSrc:  avatar1,clients: ' RETO Tech LLC.',amount: ' $451', status: 'Approved',  action: '',type:'Paypal' },
      {  date: '27 July, 2018',invoiceno: '#LA-5656',imageSrc:  avatar1,clients: ' SDRAPP Pvt.',amount: ' $1,989', status: 'Approved',   action: '',type:'Paypal' },
      {  date: '07 March, 2018',invoiceno: '#LA-4515',imageSrc:  avatar1,clients: ' Kdash Infoweb LLC.',amount: ' $343', status: 'Approved',   action: '',type:'Paypal' },
      {  date: '25 Jun, 2018',invoiceno: '#LA-1212',imageSrc:  avatar1,clients: ' BT Technology',amount: ' $653', status: 'Pending',   action: '',type:'Paypal' },
      {  date: '12 July, 2018',invoiceno: '#LA-0222',imageSrc:  avatar1,clients: ' More Infoweb Pvt.',amount: ' $451', status: 'Pending',  action: '',type:'Paypal'},
      {  date: '25 Jun, 2018',invoiceno: '#LA-7845',imageSrc:  avatar1,clients: ' BT infoweb',amount: '$1,918', status: 'Pending',   action: '',type:'Paypal' },  
      {  date: '27 July, 2018',invoiceno: '#LA-5656',imageSrc:  avatar1,clients: ' SDRAPP Pvt.',amount: '$431', status: 'Approved',   action: '',type:'Paypal' },  
    ]);
  
    const getStatusColor = (status) => {
      switch (status.toLowerCase()) {
        case 'approved':
          return '#D4F479  '; 
        case 'pending':
          return '#FFC107'; 
        
        default:
          return '#ffffff'; 
      }
    };
  

    const renderPaidByIcon = (type) => {
        if (type === 'Paypal') {
          return <FontAwesomeIcon icon={faPaypal} />;
        }
        if (type === 'Bitcoin') {
            return <FontAwesomeIcon icon={faBitcoin} />;
          }
    
        if (type === 'Visa') {
          return <FontAwesomeIcon icon={faCcVisa} />;
        } 
    
        return null;
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
        <Accountindex/>
        <div className='card mt-4 mx-3'>
            <div className='d-flex justify-content-between mx-2'>
            <h6 className='mx-2 mt-3'>INVOICES</h6>
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

            <div className='p-3 employeeli'>
        <div className='table-responsive'>
        <table className='table table-striped p-2'>
            <thead>
            <tr>
                <th>INVOICE No.</th>
                <th>CLIENTS</th>
                <th>DATE</th>
                <th>TYPE</th>
                <th>STATUS</th>
                <th>AMOUNT</th>
                <th>ACTION</th>
            </tr>
            </thead>
            <tbody>
            {currentPageItems.map((user) => (
                <tr key={user.clients}>
                <td>{user.invoiceno}</td>
                <td>{user.clients}</td>
                <td>{user.date}</td>
                <td>{renderPaidByIcon(user.type)}</td>
                <td>
                    <span style={{ backgroundColor: getStatusColor(user.status), padding: '3px', borderRadius: '5px', color: 'white' }}>
                    {user.status}
                    </span>
                </td>
                <td>{user.amount}</td>
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
