import React,{useState} from 'react'
import { Button,Form } from 'react-bootstrap'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import avatar1 from '../../assets/images/avatar1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faPaypal, faBitcoin, faCcVisa } from '@fortawesome/free-brands-svg-icons';

export default function Payments() {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [userList] = useState([
    {  id: 'MP 4515',imageSrc:  avatar1,name: 'Zoe Baker'    ,email:'zoe.baker@example.com',projectname: 'UPlo - Bootstrap 4',date: '07 March, 2018'   ,amount: '$4,205'      ,type: 'Paypal', },
    {  id: 'LK 1515 ',imageSrc: avatar1,name: 'South Shyanne',email:'south.shyanne@example.com',projectname: 'Tito Wordpress'  ,date: '25 Jun, 2018'   ,amount: '$4,205'   ,type: 'Paypal', },
    {  id: 'SS 6323 ',imageSrc: avatar1,name: 'South Shyanne',email:'south.shyanne@example.com',projectname: 'Hotel Management'  ,date: '12 July, 2018'   ,amount: '$4,205'     ,type: 'Paypal', },
    {  id: 'PQ 8585',imageSrc:  avatar1,name: 'Erin Gonzales',email:'marshall-n@gmail.com',projectname: 'Bootstrap 4 Angular5 Admin'  ,date: '13 July, 2018',amount: '$4,205'             ,type: 'Paypal', },
    {  id: 'WD 4455',imageSrc:  avatar1,name: 'Susie Willis' ,email:'marshall-n@gmail.com',projectname: 'Angular Dashboard',date: '27 July, 2018'   ,amount: '$4,205'     ,type: 'Paypal', },
    {  id: 'MP 4515',imageSrc:  avatar1,name: 'Zoe Baker'    ,email:'zoe.baker@example.com',projectname: 'UPlo - Bootstrap 4'  ,date: '07 March, 2018',amount: '$4,205'     ,type: 'Paypal', },
    {  id: 'LK 1515',imageSrc:  avatar1,name: 'Erin Gonzales',email:'marshall-n@gmail.com',projectname: 'Tito Wordpress'  ,date: '25 Jun, 2018'   ,amount: '$4,205'           ,type: 'Paypal', },
    {  id: 'SS 6323',imageSrc:  avatar1,name: 'Susie Willis' ,email:'marshall-n@gmail.com',projectname: 'Hotel Management'  ,date: '25 Jun, 2018',amount: '$4,205'        ,type: 'Paypal', },
    {  id: 'PQ 8585',imageSrc:  avatar1,name: 'South Shyanne',email:'south.shyanne@example.com',projectname: 'Bootstrap 4 Angular5 Admin',date: '13 July, 2018',amount: '$4,205'             ,type: 'Paypal', },  
    
  ]);


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
      

      
        <div className='card mt-4 mx-3'>
          <div className='d-flex justify-content-between mx-2'>
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

          <div className='p-3 employeeli'>
            <table className='table table-striped p-2'>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>CLIENTS NAME</th>
                  <th>PROJECT NAME</th>
                  <th>DATE</th>
                  <th>TYPE</th>
                  <th>AMOUNT</th>
                </tr>
              </thead>
              <tbody>
                {currentPageItems.map((user) => (
                  <tr key={user.name}>
                    <td>{user.id}</td>
                    <td>
                      <div className='row'>
                        <div className='col-2'>
                        <img className="img-thumbnail rounded-circle avatar-sml" src={user.imageSrc} alt=''/>
                        </div>   
                        <div className='col-6'>
                        <strong>{user.name}</strong>
                        <br />
                        {user.email }
                        </div>
                      </div> 
                    </td>
                    <td>{user.projectname}</td>
                    <td>{user.date}</td>
                    <td>{renderPaidByIcon(user.type)}</td>
                    <td>{user.amount}</td>     
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <ButtonToolbar aria-label="Toolbar with button groups" className='d-flex justify-content-end mb-3'>
            <ButtonGroup className="me-2" aria-label="First group">
              <Button className='mx-1 btn btn-outline-primary' onClick={handlePreviousPage} disabled={currentPage === 1}>
                Previous
              </Button>
              {[...Array(totalPages).keys()].map((page) => (
                <Button className='btn btn-outline-primary' key={page + 1} onClick={() => setCurrentPage(page + 1)} text-secondary={page + 1 === currentPage}>
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
