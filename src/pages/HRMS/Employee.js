import React, {useState} from 'react';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import Employeelist from '../../components/Employee/Employeelist';
import LeaveEmployee from '../../components/Employee/LeaveEmployee';
import VIewEmplyoee from '../../components/Employee/VIewEmplyoee';
import { Button, Modal, Form } from 'react-bootstrap';
import Sidebar from '../../layouts/Sidebar';

export default function Employee() {
  const [activeButton, setActiveButton] = useState('employeelist');
  const [currentComponent, setCurrentComponent] = useState('employeelist');
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

    
  const handleButtonClick = (componentName) => {
    setCurrentComponent(componentName);
    setActiveButton(componentName);
    // Close modals when switching components
    setShow1(false);
    setShow2(false);
  };

    
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const handleAddButtonClick = () => {
    if (currentComponent === 'employeelist') {
      handleShow1();
    } else if (currentComponent === 'leaveemployee') {
      handleShow2();
    }
  };




  return (
    <>
    <div className='main d-flex'>
      <Sidebar/>
      <div className='employee-main px-3'>
    <Header/>
    
    <div className='d-flex justify-content-between top-change-btn'>
      <div className='all-top'>
        <button onClick={() => handleButtonClick('employeelist')} className={`top-bar-btn mx-2 ${activeButton === 'employeelist' ? 'text-secondary border-top-2' : ''}`}>All</button>
        <button onClick={() => handleButtonClick('viewemplyoee')} className={`top-bar-btn mx-2 ${activeButton === 'viewemplyoee' ? 'text-secondary border-top-2' : ''}`}>View</button>
        <button onClick={() => handleButtonClick('leaveemployee')} className={`top-bar-btn mx-2 ${activeButton === 'leaveemployee' ? 'text-secondary border-top-2' : ''}`}>Leave</button>
      </div>

      {(currentComponent === 'employeelist' || currentComponent === 'leaveemployee') && (
        <div className='d-flex pt-2'>
          <Button variant="primary" className='mx-3 btn-top' onClick={handleAddButtonClick}>
            +Add
          </Button>
        </div>
      )}
    </div>


    <div className='mt-4 mx-3'>
      {currentComponent === 'employeelist' && <Employeelist />}  
      {currentComponent === 'viewemplyoee' && <VIewEmplyoee />}
      {currentComponent === 'leaveemployee' && <LeaveEmployee />}
    </div>


    <Modal show={show1} onHide={handleClose1}>
      <Modal.Header closeButton>
      <Modal.Title>Add Employee</Modal.Title>
      </Modal.Header>

      <Modal.Body>
      <div className='row'>
          <div className='col-md-6'>
              <div className="mb-3">
                <label htmlFor="">Employee ID <span className='text-danger'>*</span></label>
                <input type="text" className="form-control" id="emplyoeeid" placeholder=" "/>
              </div>
          </div>

          <div className='col-md-6'>
            <div className="mb-3">
              <label htmlFor="">Email ID <span className='text-danger'>*</span></label>
              <input type="email" className="form-control" id="email" placeholder=" "/>
            </div>
          </div>

          
      </div>

      <div className='row'>
        <div className='col-md-6'>
          <div className="mb-3">
            <label htmlFor="">First Name <span className='text-danger'>*</span></label>
            <input type="text" className="form-control" id="firstname" placeholder=" "/>
          </div>
        </div>
        <div className='col-md-6'>
          <div className="mb-3">
            <label htmlFor="">Last Name <span className='text-danger'>*</span></label>
            <input type="text" className="form-control" id="lastname" placeholder=" "/>
          </div>
        </div>
      </div>

      <div className='row'>
        <div className='col-md-6'>
          <div className="mb-3">
              <label htmlFor="">Phone  No</label>
              <input type="text" className="form-control" id="phoneno" placeholder=" "/>
            </div>
        </div>
        <div className='col-md-6'>
          <div className="mb-3">
              <label htmlFor="">Start Date <span className='text-danger'>*</span></label>
              <input type="date" className="form-control" id="startdate" placeholder=" "/>
          </div>
        </div>
      </div>

      <div className='col-md-6'>
        <div className="mb-3">
          <label htmlFor="role" className="form-label">Role <span className='text-danger'>*</span></label>
          <select
            className="form-select"
            id="role"
            placeholder="Role"
          >
            <option value="">Web Designer</option>
          </select>
        </div>
      </div>

      <div>
          <Form.Group controlId="formFile" className="mb-3">
              <Form.Control type="file" />
              <Form.Label className='employeeinputbtn'>This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</Form.Label>
          </Form.Group>
      </div>


      <div>
          <div className="mb-3">
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Facebook "/>
          </div>
          <div className="mb-3">
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Twitter "/>
          </div>
          <div className="mb-3">
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Linkedin"/>
          </div>
          <div className="mb-3">
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Instagram"/>
          </div>
      </div>   
      

      </Modal.Body>

      <Modal.Footer>
      <Button variant="secondary" onClick={handleClose1} className='bg-danger border-0'>
          Cancel
      </Button>
      <Button variant="primary btn-top" className='border-0'>
          Add
      </Button>
      </Modal.Footer>       
    </Modal>



    <Modal show={show2} onHide={handleClose2}>
      <Modal.Header closeButton>
      <Modal.Title>Leave Employee</Modal.Title>
      </Modal.Header>

      <Modal.Body>
      <div className='row'>
            <div className='col-md-6'>
                <div className="mb-3">
                <label htmlFor="" className="form-label">Employee ID <span className='text-danger'>*</span></label>
                <input type="text" className="form-control" id="employeeid" placeholder="Employee ID "/>
                </div> 
            </div>

            <div className='col-md-6'>
             <div className="mb-3">
                <label htmlFor="" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="username" placeholder="Name "/>
              </div>
            </div>
      </div>  

      <div className='row'>
          <div className='col-md-6'>
            <div className="mb-3">
              <label htmlFor="" className="form-label">From <span className='text-danger'>*</span></label>
              <input type="date" className="form-control" id="startdate" placeholder="Start Date* "/>
            </div>
          </div>

          <div className='col-md-6'>
            <div className="mb-3">
              <label htmlFor="" className="form-label">To <span className='text-danger'>*</span></label>
              <input type="date" className="form-control" id="enddate" placeholder="End Date* "/>
            </div>
          </div>
      </div>

      <div className='row'>
        <div className='col-md-6'>
            <div className="mb-3">
              <label htmlFor="" className="form-label">Numbers of Days <span className='text-danger'>*</span></label>
              <input type="number" className="form-control" id="numberofdays" placeholder=""/>
            </div>
          </div>

          <div className='col-md-6'>
            <div className="mb-3">
              <label htmlFor="" className="form-label">Leave Types <span className='text-danger'>*</span></label>
              <textarea type="text" className="form-control" id="leavetype" placeholder=""/>
            </div>
          </div>  
      </div>

      </Modal.Body>

      <Modal.Footer>
      <Button variant="secondary" onClick={handleClose2} className='bg-danger border-0'>
          Cancel
      </Button>
      <Button variant="primary btn-top" onClick={handleClose2} className='border-0'>
          Apply
      </Button>
      </Modal.Footer>       
    </Modal>
    
    <Footer/>
    </div>
    </div>
    </>
  )
}
