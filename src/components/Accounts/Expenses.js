import React,{useState} from 'react'
import avatar1 from '../../assets/images/avatar1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaypal, faBitcoin, faCcVisa } from '@fortawesome/free-brands-svg-icons';

export default function Expenses() {

  const itemsPerPage = 10;
  const [currentPage] = useState(1);
  const [userList] = useState([
    {  date: '07 March, 2018',item: 'HP Laptop',imageSrc:  avatar1,orderby: 'Marshall Nichols',amount: '$200', status: 'Approved',   form: 'Paytem',paidby:'Paypal' },
    {  date: '25 Jun, 2018',item: 'iMack Desktop ',imageSrc:  avatar1,orderby: ' Marshall Nichols', amount: '$378', status: 'Pending',   form: 'ebay USA',paidby:'Paypal' },
    {  date: '12 July, 2018',item: 'Logitech USB Mouse, Keyboard ',imageSrc:  avatar1,orderby: ' Debra Stewart',amount: '$653', status: 'Pending',   form: 'Amazon',paidby:'Paypal' },
    {  date: '13 July, 2018',item: 'MacBook Pro Air',imageSrc:  avatar1,orderby: ' Marshall Nichols',amount: ' $451', status: 'Approved',  form: 'Amazon',paidby:'Paypal' },
    {  date: '27 July, 2018',item: 'Dell Monitor 28 inch',imageSrc:  avatar1,orderby: ' Ava Alexander',amount: ' $989', status: 'Approved',   form: 'Flipkart UK',paidby:'Paypal' },
    {  date: '07 March, 2018',item: 'Logitech USB Mouse, Keyboard',imageSrc:  avatar1,orderby: ' Marshall Nichols',amount: ' $343', status: 'Approved',   form: 'Amazon',paidby:'Paypal' },
    {  date: '25 Jun, 2018',item: 'MacBook Pro Air',imageSrc:  avatar1,orderby: ' Debra Stewart',amount: ' $653', status: 'Pending',   form: 'Amazon',paidby:'Paypal' },
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

  

  return (
    <div>
      <div className='card mt-4 mx-3'>
          <div className='d-flex justify-content-between mx-2'>
            
          </div>

          <div className='p-3 employeeli'>
            <table className='table table-striped p-2'>
              <thead>
                <tr>
                  <th>ITEM</th>
                  <th>ORDER BY</th>
                  <th>FORM</th>
                  <th>DATE</th>                 
                  <th>PAID BY</th>
                  <th>STATUS</th>
                  <th>AMOUNT</th>
                </tr>
              </thead>
              <tbody>
                {currentPageItems.map((user) => (
                  <tr key={user.orderby}>

                    <td>{user.item}</td>
                    <td>{user.orderby}</td>
                    <td>{user.form}</td>
                    <td>{user.date}</td>
                    <td>{renderPaidByIcon(user.paidby)}</td>
                    <td>
                    <span style={{ backgroundColor: getStatusColor(user.status), padding: '3px',borderRadius:'5px', color:'white' }}>
                      {user.status}
                    </span>
                    </td> 
                    <td>{user.amount}</td>                     
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
      </div>
    
    </div>
  )
}
