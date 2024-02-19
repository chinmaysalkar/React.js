import React, {useState} from 'react'
import Header from '../../layouts/Header';
import Userlist from '../../components/Users/Userlist';
import Footer from '../../layouts/Footer';
import { Button, Form } from 'react-bootstrap';
import Sidebar from '../../layouts/Sidebar';
import Modal from 'react-bootstrap/Modal';



export default function Users() {
  const [activeButton, setActiveButton] = useState('userlist');

  const [currentComponent, setCurrentComponent] = useState('userlist');

  const handleButtonClick = (componentName) => {
      setCurrentComponent(componentName);
      setActiveButton(componentName);
  };
  

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 


  const [checkboxes, setCheckboxes] = useState([
    { role: 'Super Admin', read: true, write: true, delete: true },
    { role: 'Admin', read: true, write: false, delete: false },
    { role: 'Employee', read: true, write: false, delete: false },
    { role: 'HR Admin', read: true, write: true, delete: true },
  ]);

  const handleCheckboxChange = (role, type) => {
    setCheckboxes(prevCheckboxes => {
      return prevCheckboxes.map(checkbox => {
        if (checkbox.role === role) {
          return { ...checkbox, [type]: !checkbox[type] };
        }
        return checkbox;
      });
    });
  };
    
  return (
    <>
    <div className='main d-flex'>
      <Sidebar/>
      <div className='users-main px-3'>
      <div>
      <Header/>
      </div>
      <div className='d-flex justify-content-between top-change-btn'>
    <div className='all-top'>
      <button onClick={() => handleButtonClick('userlist')} className={`top-bar-btn mx-2 ${activeButton === 'userlist' ? 'text-secondary border-top-2' : ''}`}>List</button>
    </div>

    <div className='d-flex pt-2'>
      <Button variant="primary" className='mx-3 btn-top'onClick={handleShow}>
        + Add User
      </Button>
    </div>
      </div>

      <div>
      {currentComponent === 'userlist' && <Userlist />}
      </div>



      <div>
      <Footer/>
      </div>
    </div>
    </div>




      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>
          <div className='card'>

            <div className="mb-3">
              <input type="text" className="form-control" id="userid" placeholder="Employee ID*"/>
            </div>

    
            <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                <Form.Group className="mb-3" controlId="firstname">                  
                    <Form.Control type="text" placeholder="First Name*" />
                </Form.Group>
                </div>
                    
                <div className='col-lg-6 col-md-6 col-sm-12'>
                <Form.Group className="mb-3" controlId="lastname">                  
                    <Form.Control type="text" placeholder="Last Name" />
                </Form.Group>
                </div>
            </div>

            <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-6'>
                    <Form.Group className="mb-3" controlId="email">                  
                        <Form.Control type="email" placeholder="Eamil ID" />
                    </Form.Group>
                </div>
                <hr />
                <div className='col-lg-6 col-md-6 col-sm-6'>
                    <Form.Group className="mb-3" controlId="mobileno">                  
                        <Form.Control type="text" placeholder="Mobile No" />
                    </Form.Group>
                </div>

                <div className='col-lg-6 col-md-6 col-sm-6 mb-3'>
                    <Form.Select aria-label="Default select example">
                        <option>Select Role Type</option>
                        <option value="1">Super Admin</option>
                        <option value="2">Admin</option>
                        <option value="3">Employee</option>
                    </Form.Select>
                </div>

            </div> 
            
            <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-6'>
                    <Form.Group className="mb-3" controlId="username">                  
                        <Form.Control type="text" placeholder="Username*" />
                    </Form.Group>
                </div>

                <div className='col-lg-6 col-md-6 col-sm-6'>
                    <Form.Group className="mb-3" controlId="password">                  
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </div>

                <div className='col-lg-6 col-md-6 col-sm-6'>
                    <Form.Group className="mb-3" controlId="confirmpassword">                  
                        <Form.Control type="password" placeholder="Confirm Password" />
                    </Form.Group>
                </div>

                <div className='col-lg-6 col-md-6 col-sm-6'>
                    <label htmlFor="date">Date</label>
                    <Form.Group className="mb-3" controlId="date">                  
                        <Form.Control type="date" placeholder="00/00/0000" />
                    </Form.Group>
                </div>
            </div>    
            <hr />
            <h6>Module Permission</h6>

            <div className='userlist table-responsive'>
                <table className='table table-striped p-2'>
                    <thead>
                    <tr>
                        <th></th>
                        <th>READ</th>
                        <th>WRITE</th>
                        <th>DELETE</th>
                    </tr>
                    </thead>
                    <tbody> 
                    {checkboxes.map((checkbox, index) => (
                      <tr key={index}>
                        <td>{checkbox.role}</td>
                        <td><input className='form-check-input checkbox-custom' type="checkbox" defaultChecked={checkbox.read} onChange={() => handleCheckboxChange(checkbox.role, 'read')} /></td>                        
                        <td><input className='form-check-input checkbox-custom' type="checkbox" defaultChecked={checkbox.write} onChange={() => handleCheckboxChange(checkbox.role, 'write')} /></td>
                        <td><input className='form-check-input checkbox-custom' type="checkbox" defaultChecked={checkbox.delete} onChange={() => handleCheckboxChange(checkbox.role, 'delete')} /></td>
                      </tr>
                    ))}
                    </tbody>
                </table>
            </div>
          </div>
        </div>  

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" className='btn-top'>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
