import React, {useState} from 'react'
import Header from '../../layouts/Header'
import Footer from '../../layouts/Footer'
import Sidebar from '../../layouts/Sidebar';
import { Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

export default function TicketList() {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const ticketData = [
        {
          id: 'ASD-5258',
          title: 'It is a long established fact that a reader',
          priority: 'lower',
          priorityClass: 'tag-default',
          department: 'Pre-Sales',
          agent: 'Archie Cantones',
          date: '6 hours ago',
          activity: 'No reply yet',
          
        },
        {
          id: 'ASD-8793',
          title: 'Measures your Current Assets / Current',
          priority: 'High',
          priorityClass: 'tag-danger',
          department: 'Pre-Sales',
          agent: 'Rose Orcullo',
          date: '9 hours ago',
          activity: '2 reply',
          
        },
        {
          id: 'ASD-2500',
          title: 'There are many variations of passages',
          priority: 'Medium',
          priorityClass: 'tag-info',
          department: 'Pre-Sales',
          agent: 'Charize Cericoz',
          date: '10 hours ago',
          activity: '1 reply',
          
        },

        {
            id: 'ASD-2500',
            title: 'There are many variations of passages',
            priority: 'Medium',
            priorityClass: 'tag-info',
            department: 'Pre-Sales',
            agent: 'Charize Cericoz',
            date: '10 hours ago',
            activity: '1 reply',
           
          },

          {
            id: 'ASD-2500',
            title: 'There are many variations of passages',
            priority: 'Medium',
            priorityClass: 'tag-info',
            department: 'Pre-Sales',
            agent: 'Charize Cericoz',
            date: '10 hours ago',
            activity: '1 reply',
           
          },
          
          {
            id: 'ASD-2500',
            title: 'There are many variations of passages',
            priority: 'Medium',
            priorityClass: 'tag-info',
            department: 'Pre-Sales',
            agent: 'Charize Cericoz',
            date: '10 hours ago',
            activity: '1 reply',
            
          },


          {
            id: 'ASD-2500',
            title: 'There are many variations of passages',
            priority: 'Medium',
            priorityClass: 'tag-info',
            department: 'Pre-Sales',
            agent: 'Charize Cericoz',
            date: '10 hours ago',
            activity: '1 reply',
            
          },


          {
            id: 'ASD-2500',
            title: 'There are many variations of passages',
            priority: 'Medium',
            priorityClass: 'tag-info',
            department: 'Pre-Sales',
            agent: 'Charize Cericoz',
            date: '10 hours ago',
            activity: '1 reply',
            
          },

          {
            id: 'ASD-2500',
            title: 'There are many variations of passages',
            priority: 'Medium',
            priorityClass: 'tag-info',
            department: 'Pre-Sales',
            agent: 'Charize Cericoz',
            date: '10 hours ago',
            activity: '1 reply',
            
          },

          {
            id: 'ASD-2500',
            title: 'There are many variations of passages',
            priority: 'Medium',
            priorityClass: 'tag-info',
            department: 'Pre-Sales',
            agent: 'Charize Cericoz',
            date: '10 hours ago',
            activity: '1 reply',
           
          },
       
      ];
  return (
    <>
    <div className='main d-flex'>
        <Sidebar/>
        <div className='pagewidth px-3'>
        <Header/>

        <div className='container-fluid mt-3'>
            <div className='row'>
                <div className='col-12'>
                    <div className='card'>
                        <div className='card-body'>
                            <div className="row">
                                <div className="col-lg-2 col-md-4 col-sm-6 mb-1">
                                    <div className="input-group">
                                    <input type="text" className="form-control" placeholder="id" />
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-6 mb-1">
                                    <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Priority" />
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-6 mb-1">
                                    <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Department" />
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-6 mb-1">
                                    <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Agent" />
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-6 mb-1">
                                    <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Date" />
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-6 d-grid">
                                    <button href="fake_url" className="btn btn-sm btn-primary btn-top">
                                        Search
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='col-12 mt-3'>
                <Button variant="primary" className='btn-top mb-2' onClick={handleShow}>
                   + Add Ticket
                </Button>

                    <div className='card'>
                        <div className="table-responsive">
                            <table className="table  table-striped table-vcenter ticket-table mb-0">
                                <thead>
                                <tr>
                                    <th colSpan="5"> <span className='mx-5'>Ticket Detail</span></th>
                                    <th colSpan="3"> Activity</th>
                                </tr>
                                <tr>
                                    <th className='bg-secondary'>&nbsp;</th>
                                    <th className='bg-secondary'>ID</th>
                                    <th className='bg-secondary'>Title</th>
                                    <th className='bg-secondary'>Priority</th>
                                    <th className='bg-secondary'>Department</th>
                                    <th className='bg-secondary'>Agent</th>
                                    <th className='bg-secondary'>Date</th>
                                    <th className='bg-secondary'>Activity</th>
                                    <th className='bg-secondary'>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {ticketData.map((ticket, index) => (
                                    <tr key={index}>
                                    <td>
                                        <label className="custom-control custom-checkbox">
                                        <input
                                            type="checkbox"
                                            className="form-check-input mx-1"
                                            name={`example-checkbox${index}`}
                                            value={`option${index}`}
                                            checked={ticket.checked}
                                        />
                                        <span className="custom-control-label">&nbsp;</span>
                                        </label>
                                    </td>
                                    <td>
                                        <a className='text-secondary' href={`/#${ticket.id}`}>{ticket.id}</a>
                                    </td>
                                    <td>
                                        <span className='text-secondary'>{ticket.title}</span>
                                    </td>
                                    <td>
                                        <span className={`text-secondary tag ${ticket.priorityClass}`}>{ticket.priority}</span>
                                    </td>
                                    <td>
                                        <span className='text-secondary'>{ticket.department}</span>
                                    </td>
                                    <td>
                                        <span className='text-secondary'>{ticket.agent}</span>
                                    </td>
                                    <td>
                                        <span className='text-secondary'>{ticket.date}</span>
                                    </td>
                                    <td className='text-secondary'>{ticket.activity}</td>
                                    <td>
                                    <>
                                        <button className='btn btn-sm mx-1'>
                                            <FontAwesomeIcon icon={faEdit} className='text-success'/>
                                        </button>
                                        <button
                                            className='btn btn-sm mx-1'
                                        >
                                            <FontAwesomeIcon icon={faTrash} className='text-danger'/>
                                        </button>
                                    </>
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

        <Footer/>
    </div>
    </div>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Ticket</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
        <div className='row mt-3'>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-body'>
                        <form>
                            <div className='mb-3'>
                                <label htmlFor="id">ID</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder=''
                                    name='id'
                                    
                                />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor="title">Title</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder=''
                                    name='title'
                                    
                                />
                            </div>
                           
                            <div className='mb-3'>
                                <label htmlFor="priority">Priority</label>
                                <Form.Select aria-label="Default select example">
                                    <option>Select Priority</option>
                                    <option value="Low">Low</option>
                                    <option value="Medium">Medium</option>
                                    <option value="High">High</option>
                                </Form.Select>
                            </div>

                            <div className='mb-3'>
                                <label htmlFor="department">Department</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder=''
                                    name='department'
                                    
                                />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor="agent">Agent</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder=''
                                    name='agent'
                                    
                                />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor="date">Date</label>
                                <input
                                    type='date'
                                    className='form-control'
                                    placeholder='Date'
                                    name='date'
                                    
                                />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor="activity">Activity</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder=''
                                    name='activity'
                                    
                                />
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" className='btn-top'>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
