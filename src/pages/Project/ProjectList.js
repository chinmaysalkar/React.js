import React,{useState} from 'react';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import { Button, Form } from 'react-bootstrap';
import OnGoing from '../../components/Project/ProjectList/OnGoing';
import UpComing from '../../components/Project/ProjectList/UpComing';
import Modal from 'react-bootstrap/Modal';
import Sidebar from '../../layouts/Sidebar';

export default function ProjectList() {
    const [activeButton, setActiveButton] = useState('OnGoing');

    const [currentComponent, setCurrentComponent] = useState('OnGoing');

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
      <div className='pagewidth px-3'>
    <Header />
    <div className='d-flex justify-content-between mx-3 top-change-btn'>
      <div className='all-top'>
        <button onClick={() => handleButtonClick('OnGoing')} className={`top-bar-btn mx-2 ${activeButton === 'OnGoing' ? 'text-secondary border-top-2' : ''}`}>OnGoing</button>
        <button onClick={() => handleButtonClick('UpComing')} className={`top-bar-btn mx-2 ${activeButton === 'UpComing' ? 'text-secondary border-top-2' : ''}`}>UpComing</button>
      </div>

      <div className='d-flex pt-2'>
        <Form.Control
          type='search'
          placeholder='Search something...'
          className='me-2'
          aria-label='Search'
        />
        <Button variant="primary" className='mx-1 btn-top' onClick={handleShow}>
          +Add
        </Button>
      </div>
    </div>

      <div>
      {currentComponent === 'OnGoing' && <OnGoing />}
      {currentComponent === 'UpComing' && <UpComing />}
      </div>

    
    <Footer />
    </div>



    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><h5>Add Upcoming Project</h5></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row'>
            <div className='col-lg-6'>
              <div class="mb-3">
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Owner Name "/>
              </div>

              <div class="mb-3">
              <input type="text" class="form-control" id="exampleFormControlInput2" placeholder="Mile Stone "/>
              </div>

              <div class="mb-3">
              <input type="text" class="form-control" id="exampleFormControlInput2" placeholder="Technology "/>
              </div>

              <div class="mb-3">
              <input type="text" class="form-control" id="exampleFormControlInput3" placeholder="Work "/>
              </div>

              <div class="mb-3">
              <input type="text" class="form-control" id="exampleFormControlInput4" placeholder="Duration"/>
              </div>

              <div class="mb-3">
              <input type="text" class="form-control" id="exampleFormControlInput5" placeholder="Priority"/>
              </div>
            </div>

            <div className='col-lg-6'>
              <div class="mb-3">
                <input type="text" class="form-control" id="exampleFormControlInput6" placeholder="Project Name "/>
              </div>

              <div class="mb-3">
                <input type="text" class="form-control" id="exampleFormControlInput8" placeholder="Creator Name"/>
              </div>

              <div class="mb-3">
                <input type="date" class="form-control" id="exampleFormControlInput9" placeholder="Date "/>
              </div>


              <div class="mb-3">
                <input type="text" class="form-control" id="exampleFormControlInput10" placeholder="Deal "/>
              </div>

              <div class="mb-3">
                <input type="text" class="form-control" id="exampleFormControlInput11" placeholder="Client "/>
              </div>

              <div class="mb-3">
                <select name="teamselector" id="teamselector" class="form-select">
                  <option>Team Members</option>
                </select>
              </div>

              <div class="mb-3">
                <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Description " rows="3"></textarea>
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
    </div>
    </> 
    
  );
}
