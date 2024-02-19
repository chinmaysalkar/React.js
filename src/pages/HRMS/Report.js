import React, {useState} from 'react'
import Header from '../../layouts/Header'
import Footer from '../../layouts/Footer'
import { Button } from 'react-bootstrap'
import Expenses from '../../components/Report/Expenses'
import Invoice from '../../components/Report/Invoice'
import Detail from '../../components/Report/Detail'
import Sidebar from '../../layouts/Sidebar'
import Modal from 'react-bootstrap/Modal';



export default function Report() {

    const [activeButton, setActiveButton] = useState('expenses');

    const [currentComponent, setCurrentComponent] = useState('expenses');

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
    <div className='report-main px-3'>
      <Header/>

        
        <div className='d-flex justify-content-between top-change-btn'>
          <div className='all-top'>
            <button onClick={() => handleButtonClick('expenses')} className={`top-bar-btn mx-2 mb-2 ${activeButton === 'expenses' ? 'text-secondary border-top-2' : ''}`}>Expenses</button>
            <button onClick={() => handleButtonClick('invoice')} className={`top-bar-btn mx-2 ${activeButton === 'invoice' ? 'text-secondary border-top-2' : ''}`}>invoice</button>
            <button onClick={() => handleButtonClick('details')} className={`top-bar-btn mx-2 ${activeButton === 'details' ? 'text-secondary border-top-2' : ''}`}>Details</button>
          </div>

          <div className='d-flex pt-2'>
           <select className="custom-select p-2 mx-1">
              <option>Year</option>
              <option>Month</option>
              <option>Week</option>
            </select>
            <Button variant="primary" className='mx-3 btn-top' onClick={handleShow}>
              +Add
            </Button>
          </div>
        </div>

        <div>
        {currentComponent === 'expenses' && <Expenses />}
        {currentComponent === 'invoice' && <Invoice />}
        {currentComponent === 'details' && <Detail />}
        </div>
    
      <Footer/>  
    </div>
   </div>



      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Expense</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <div className='row'>
            <div className='col-lg-6'>

              <div className="mb-3">
                <label htmlFor="item" className="form-label">Item Name</label>
                <input type="text" className="form-control" id="item" placeholder=""/>
              </div>

              <div className="mb-3">
                <label htmlFor="purchasedate" className="form-label">Purchase Date</label>
                <input type="date" className="form-control" id="purchasedate" placeholder=""/>
              </div>

              <div className="mb-3">
                <label htmlFor="amount" className="form-label">Amount</label>
                <input type="text" className="form-control" id="amount" placeholder="$50"/>
              </div>

              <div class="mb-3">
                <label for="option" class="form-label">Status</label>
                <select class="form-select" id="option">
                    <option value="">Select...</option>
                    <option value="option1">Pending</option>
                    <option value="option2">Approved</option>
                </select>
             </div>
            </div>

            <div className='col-lg-6'>

              <div className="mb-3">
                <label htmlFor="purchasefrom" className="form-label">Purchase From</label>
                <input type="text" className="form-control" id="purchasefrom" placeholder=""/>
              </div>

              <div className="mb-3">
                <label htmlFor="purchasedby" className="form-label">Ordered By</label>
                <input type="text" className="form-control" id="purchasedby" placeholder=""/>
              </div>

              <div class="mb-3">
                <label for="option" class="form-label">Paid By</label>
                <select class="form-select" id="option">
                    <option value="">Select...</option>
                    <option value="option1">Cash</option>
                    <option value="option2">Online</option>
                </select>
             </div>

            </div>

        </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" className='btn-top' onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>    


   </>
  )
}
