import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import Paylist from '../../components/Payroll/Paylist';
import Payslip from '../../components/Payroll/Payslip';
import Sidebar from '../../layouts/Sidebar';
import Modal from 'react-bootstrap/Modal';

export default function Payroll() {
    const [activeButton, setActiveButton] = useState('paylist');

    const [currentComponent, setCurrentComponent] = useState('paylist');

    const handleButtonClick = (componentName) => {
        setCurrentComponent(componentName);
        setActiveButton(componentName);
    };


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


  
  return (
    <>
    <div className='main d-flex'>
      <Sidebar/>
      <div className='payroll-main px-3'>
      
      <Header />

      <div>

      <div className='d-flex justify-content-between top-change-btn'>
      <div className='all-top'>
        <button onClick={() => handleButtonClick('paylist')} className={`top-bar-btn mx-2 ${activeButton === 'paylist' ? 'text-secondary border-top-2' : ''}`}>EmployeeSalary</button>
        <button onClick={() => handleButtonClick('payslip')} className={`top-bar-btn mx-2 ${activeButton === 'payslip' ? 'text-secondary border-top-2' : ''}`}>Payslip</button>
      </div>

      <div className='d-flex pt-2'>
        <Button variant="primary" className='mx-3 btn-top' onClick={handleShow}>
          + Add Salary
        </Button>
      </div>
    </div>
      
    <div className='mt-3'>
      {currentComponent === 'paylist' && <Paylist />}
      {currentComponent === 'payslip' && <Payslip />}
    </div>   

    </div>
    <Footer/>
        
    </div>
    </div>


    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Salary</Modal.Title>
        </Modal.Header>
        <Modal.Body>

       <div>
          <div className="mb-3">
            <label htmlFor="userid" className="form-label">User ID</label>
            <input type="email" className="form-control" id="userid" placeholder=""/>
          </div>

          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="name" className="form-control" id="name" placeholder=""/>
          </div>
          
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input type="email" className="form-control" id="email" placeholder="name@example.com"/>
          </div>

          <div className="mb-3">
            <label htmlFor="salary" className="form-label">Salary</label>
            <input type="text" className="form-control" id="salary" placeholder=""/>
          </div>

          <div className="mb-3">
            <label htmlFor="userid" className="form-label">Role</label>
            <input type="role" className="form-control" id="role" placeholder=""/>
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
  );
}
