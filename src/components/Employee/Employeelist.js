import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faSearch , faEye} from '@fortawesome/free-solid-svg-icons';
import { Form, Button  } from 'react-bootstrap';
import Employeeindex from './Employeeindex';


export default function Employeelist() {
    const [userList, setUserList] = useState([

        {  no: ' ',logo: ' ',name: 'Marshall Nichols',email:'marshall-n@gmail.com',employeeid: 'LA-0215 ',phone: '+ 264-625-1526', joindate: '24 Jun, 2015', role: 'Web Designer',  action: '', },
        {  no: ' ',logo: ' ',name: ' Susie Willis',email:'marshall-n@gmail.com', employeeid: ' LA-0215', phone: '+ 264-625-1526', joindate: '24 Jun, 2015', role: 'Web Developer',  action: '', },
        {  no: ' ',logo: ' ',name: ' Debra Stewart',email:'marshall-n@gmail.com',employeeid: 'LA-0215 ',phone: '+ 264-625-1526', joindate: '24 Jun, 2015', role: 'Team Lead',  action: '', },
        {  no: ' ',logo: ' ',name: ' Erin Gonzales',email:'marshall-n@gmail.com',employeeid: 'LA-0215 ',phone: ' + 264-625-1526', joindate: '24 Jun, 2015', role: 'Web Developer',  action: '', },
        {  no: ' ',logo: ' ',name: ' Susie Willis',email:'marshall-n@gmail.com',employeeid: 'LA-0215 ',phone: ' + 264-625-1526', joindate: '24 Jun, 2015', role: 'Team Lead',  action: '', },
        {  no: ' ',logo: ' ',name: ' Debra Stewart',email:'marshall-n@gmail.com',employeeid: 'LA-0215 ',phone: ' + 264-625-1526', joindate: '24 Jun, 2015', role: 'Team Lead',  action: '', },
        {  no: ' ',logo: ' ',name: ' Erin Gonzales',email:'marshall-n@gmail.com',employeeid: ' LA-0215',phone: ' + 264-625-1526', joindate: '24 Jun, 2015', role: 'Web Developer',  action: '', },
        {  no: ' ',logo: ' ',name: ' Ava Alexander',email:'marshall-n@gmail.com',employeeid: 'LA-0215 ',phone: ' + 264-625-1526', joindate: '24 Jun, 2015', role: 'HR',  action: '', },
        {  no: ' ',logo: ' ',name: ' Ava Alexander',email:'marshall-n@gmail.com',employeeid: 'LA-0215 ',phone: '+ 264-625-1526', joindate: '24 Jun, 2015', role: 'HR',  action: '', },  
       
        
      ]);

       

      const handleDeleteUser = (index) => {
        const updatedUserList = [...userList];
        updatedUserList.splice(index, 1);
        setUserList(updatedUserList);
      };


  return (
    <div>
        <div>
          <Employeeindex/>

         

          <div className='card mt-3 p-3 border-0'>
            <div className='d-flex justify-content-between mx-2 switch-top'>
                <h6 className='mx-2 mt-3'>EMPLOYEE LIST</h6>
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

          <div className='p-3 employeeli mt-2 col-lg-12 col-md-12 col-sm-12'>
            <div className='table-responsive'>
              <table className='table table-striped p-2'>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>NAME</th>
                    <th>EMPLOYEE ID</th>
                    <th>PHONE</th>
                    <th>JOIN DATE</th>
                    <th>ROLE</th>
                    <th><div className='mx-2'>ACTION</div></th>
                  </tr>
                </thead>
                <tbody>
                  {userList.map((user, index) => (
                    <tr key={user.name}>
                      <td><input className='form-check-input' type="checkbox" /></td>
                      <td>
                        <strong>{user.name}</strong>
                        <br />
                        {user.email}
                      </td>
                      <td>{user.employeeid}</td>
                      <td>{user.phone}</td>
                      <td>{user.joindate}</td>
                      <td>{user.role}</td>
                      <td>
                        {(
                          <>
                            <div className='d-flex'>
                              <button className='btn btn-sm'>
                                <FontAwesomeIcon icon={faEye} />
                              </button>
                              <button className='btn btn-sm mx-1'>
                                <FontAwesomeIcon icon={faEdit} className='text-success'/>
                              </button>
                              <button className='btn btn-sm mx-1' onClick={() => handleDeleteUser(index)}>
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

    </div>
  )
}
