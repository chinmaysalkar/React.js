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
              <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Employee ID "/>
              </div>
              <div className="mb-3">
              <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="Name "/>
              </div>
              <div className="mb-3">
              <input type="email" className="form-control" id="exampleFormControlInput3" placeholder="Email ID "/>
              </div>
          </div>
          <div className='col-md-6'>
              <div className="mb-3">
              <input type="text" className="form-control" id="exampleFormControlInput4" placeholder="Phone Number "/>
              </div>
              <div className="mb-3">
              <input type="text" className="form-control" id="exampleFormControlInput5" placeholder="Start Date* "/>
              </div>
              <div className="mb-3">
              <input type="text" className="form-control" id="exampleFormControlInput6" placeholder="Role "/>
              </div>
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
      <Button variant="secondary" onClick={handleClose1}>
          Close
      </Button>
      <Button variant="primary btn-top" onClick={handleClose1}>
          Save Changes
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

              <div className="mb-3">
              <label htmlFor="" className="form-label">Name</label>
              <input type="text" className="form-control" id="username" placeholder="Name "/>
              </div>

              <div className="mb-3">
              <label htmlFor="" className="form-label">From <span className='text-danger'>*</span></label>
              <input type="date" className="form-control" id="startdate" placeholder="Start Date* "/>
              </div>

              <div className="mb-3">
              <label htmlFor="" className="form-label">To <span className='text-danger'>*</span></label>
              <input type="date" className="form-control" id="enddate" placeholder="End Date* "/>
              </div>
          </div>
          <div className='col-md-6'>
              
             
              <div className="mb-3">
              <label htmlFor="" className="form-label">Numbers of days <span className='text-danger'>*</span></label>
              <input type="text" className="form-control" id="numberofdays" placeholder=" "/>
              </div>

              <div className="mb-3">
              <label htmlFor="" className="form-label">Leave Type <span className='text-danger'>*</span></label>
              <textarea className="form-control" placeholder="" id="leavereason"></textarea>
              </div>
          </div>
      </div>  

      </Modal.Body>

      <Modal.Footer>
      <Button variant="secondary" onClick={handleClose2}>
          Close
      </Button>
      <Button variant="primary btn-top" onClick={handleClose2}>
          Add
      </Button>
      </Modal.Footer>       
    </Modal>
    
    <Footer/>
    </div>
    </div>
    </>
  )
}
