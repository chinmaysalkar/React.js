import React, {useState} from 'react'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faSearch } from '@fortawesome/free-solid-svg-icons';

export default function ListView() {

    const [userList, setUserList] = useState([

        {  no: '01 ',departmentname: 'Web Development',departmenthead: 'John Smith', totalemployee: '102',   action: '', },
        {  no: '02 ',departmentname: ' Marketing', departmenthead: 'Maryam Amiri', totalemployee: '13',   action: '', },
        {  no: '03 ',departmentname: ' App Development',departmenthead: 'Frank Camly', totalemployee: '21',   action: '', },
        {  no: '04 ',departmentname: ' Support',departmenthead: ' Gary Camara', totalemployee: '84',  action: '', },
        {  no: '05 ',departmentname: ' Accounts',departmenthead: ' Fidel Tonn', totalemployee: '11',   action: '', },
        {  no: '06 ',departmentname: ' PHP Open Source',departmenthead: ' Maryam Amiri', totalemployee: '37',   action: '', },
        {  no: '07 ',departmentname: ' Design and Printing',departmenthead: ' Maryam Amiri', totalemployee: '17',  action: '', },
       
       
        
      ]);  

      const handleDeleteUser = (index) => {
        const updatedUserList = [...userList];
        updatedUserList.splice(index, 1);
        setUserList(updatedUserList);
      };

  return (
    <div className='mt-4 mx-3'>
        <div class='card p-3'>
        <div className='d-flex justify-content-between mx-2 switch-top'>
          <h6 className='mx-2 mt-3'>DEPARMENTS LIST</h6>
          <Form className='mt-2 d-flex'>
            <Form.Control
              type='search'
              placeholder='Search something...'
              className='me-2'
              aria-label='Search'
            />
            <Button variant='outline-success'>
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </Form>
        </div>

        <div className='p-3 department'>
          <div className='table-responsive'>
            <table className='table table-striped p-2'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>DEPARTMENT</th>
                  <th>DEPARTMENT HEAD</th>
                  <th>TOTAL EMPLOYEE</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {userList.map((user, index) => (
                  <tr key={user.no}>
                    <td>{user.no}</td>
                    <td>{user.departmentname}</td>
                    <td>{user.departmenthead}</td>
                    <td>{user.totalemployee}</td>
                    <td>
                      {(
                        <>
                          <button className='btn btn-sm mx-1'>
                            <FontAwesomeIcon icon={faEdit} className='text-success'/>
                          </button>
                          <button className='btn btn-sm mx-1' onClick={() => handleDeleteUser(index)}>
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
    </div>


    

    </div>
  )
}
