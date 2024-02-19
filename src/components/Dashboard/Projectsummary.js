import React, {useState} from 'react'
import avatar1 from '../../assets/images/avatar1.jpg'

export default function Projectsummary() {
  const clientnamesPerPage = 10;
  const [currentPage] = useState(1);
  const [userList] = useState([
    {  no: '#AD1245',clientname: 'Sean Black',imageSrc:  avatar1,project: 'Angular Admin',projectcost: '$200', status: 'Delevered',   payment: 'Done', },
    {  no: '#DF1937',clientname: 'Sean Black ',imageSrc:  avatar1,project: 'Angular Admin', projectcost: '$378', status: 'Delevered',   payment: 'Pending', },
    {  no: '#YU8585',clientname: 'Merri Diamond ',imageSrc:  avatar1,project: 'One page html Admin',projectcost: '$653', status: 'Submit',   payment: 'Done', },
    {  no: '#AD1245',clientname: 'Sean Black',imageSrc:  avatar1,project: 'Wordpress One page',projectcost: ' $451', status: 'Delevered',  payment: 'Done', },
    {  no: '#GH8596',clientname: 'Allen Collins',imageSrc:  avatar1,project: 'VueJs Application',projectcost: ' $989', status: 'Delevered',   payment: 'Done', },
    
  ]);

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'submit':
        return '#F67EDB  '; 
      case 'delevered':
        return '#FFC107'; 
      
      default:
        return '#ffffff'; 
    }
  };

  // Calculate start and end indices based on the current page and clientnamesPerPage
  const startIndex = (currentPage - 1) * clientnamesPerPage;
  const endIndex = startIndex + clientnamesPerPage;

  // Get the clientnames for the current page
  const currentPageclientnames = userList.slice(startIndex, endIndex);
  return (
    <div>
      <div className='card mt-4 mx-3'>
          <div className='d-flex justify-content-between mx-2'>
            
          </div>

          <div className='table-responsive p-3 employeeli'>
            <table className='table  table-striped p-2'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>CLIENT NAME</th>
                  <th>TEAM</th>
                  <th>PROJECT</th>                 
                  <th>PROJECT COST</th>
                  <th>PAYEMENT</th>
                  <th>STATUS</th>
                </tr>
              </thead>
              <tbody>
                {currentPageclientnames.map((user) => (
                  <tr key={user.project}>

                    <td><div className='mt-3'>{user.no}</div></td>
                    <td><div className='mt-3'>{user.clientname}</div></td>
                    <td><img className="img-thumbnail rounded-circle avatar-sml" src={user.imageSrc} alt=''/></td>
                    <td><div className='mt-3'>{user.project}</div></td>
                    <td><div className='mt-3'>{user.projectcost}</div></td>
                    <td><div className='mt-3'>{user.payment}</div></td> 
                    <td>
                    <div className='mt-2'>
                    <span style={{ backgroundColor: getStatusColor(user.status), padding: '3px',borderRadius:'5px', color:'white' }}>
                      {user.status}
                    </span>
                    </div>
                    </td> 
                                        
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
      </div>
        
    </div>
  )
}
