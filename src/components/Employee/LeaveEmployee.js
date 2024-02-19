import React,{useState} from 'react'
import Employeeindex from './Employeeindex'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTrash, faCheck} from '@fortawesome/free-solid-svg-icons';
import avatar1 from '../../assets/images/avatar1.jpg'

export default function LeaveEmployee() {
  const [userList] = useState([

    {  imageSrc:  avatar1,name: 'Marshall Nichols',employeeid: 'LA-0215 ',leavetype: 'Casual Leave', date: '24 July, 2019 to 26 July, 2019', reason: 'Going to Family Function',  action: '', },
    {  imageSrc:  avatar1,name: 'Susie Willis', employeeid: ' LA-0215', leavetype: 'Casual Leave', date: '20 July, 2019 to 26 July, 2019', reason: 'Going to Development',  action: '', },
    {  imageSrc:  avatar1,name: 'Debra Stewart',employeeid: 'LA-0215 ',leavetype: 'Casual Leave', date: '21 July, 2019 to 26 July, 2019', reason: 'Attend Birthday party',  action: '', },
    {  imageSrc:  avatar1,name: 'Erin Gonzales',employeeid: 'LA-0215 ',leavetype: ' Casual Leave', date: '11 Aug, 2019 to 21 Aug, 2019', reason: 'Going to Holiday',  action: '', },

    
  ]);

  
  return (
    <div>
        
        <Employeeindex/>


        <div className='card mt-3 p-3'>
        <div className='p-3 employeeli'>
          <div className='table-responsive'>
            <table className='table  table-striped p-2'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>NAME</th>
                  <th>EMPLOYEE ID</th>
                  <th>LEAVE TYPE</th>
                  <th>DATE</th>
                  <th>REASON</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {userList.map((user, index) => (
                  <tr key={user.name}>
                    <td><img className="img-thumbnail rounded-circle avatar-sml" src={user.imageSrc} alt=''/></td>
                    <td><div className='mt-3'>{user.name}</div></td>
                    <td><div className='mt-3'>{user.employeeid}</div></td>
                    <td><div className='mt-3'>{user.leavetype}</div></td>
                    <td><div className='mt-3'>{user.date}</div></td>
                    <td><div className='mt-3'>{user.reason}</div></td>
                    <td>
                      {(
                        <>
                          <div className='mt-2'>
                          <button className='btn btn-sm mx-1'>
                            <FontAwesomeIcon icon={faCheck} className='text-success'/>
                          </button>
                          <button className='btn btn-sm mx-1'>
                            <FontAwesomeIcon icon={faTrash} className='text-danger'/>
                          </button>
                          </div>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        </div>
        

    </div>
  )
}
