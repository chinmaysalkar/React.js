import React, { useState } from 'react';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import avatar1 from '../../assets/images/avatar1.jpg';
import avatar2 from '../../assets/images/avatar2.jpg';
import Sidebar from '../../layouts/Sidebar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function TodoList() {
  const [todoItems, setTodoItems] = useState([
    {
      id: 1,
      task: 'Report Panel Usage',
      dueDate: 'Feb 12-2019',
      priority: 'HIGH',
      imgname:'NG',
      checked: true,
    },
    {
      id: 2,
      task: 'Report Panel Usage',
      dueDate: 'Feb 18-2019',
      priority: 'MED',
      img: avatar1,
      checked: false,
    },
    {
      id: 3,
      task: 'New logo design for Angular Admin',
      dueDate: 'March 02-2019',
      priority: 'high',
      img: avatar2,
      checked: true,
    },
    {
      id: 4,
      task: 'New logo design for Angular Admin',
      dueDate: 'March 02-2019',
      priority: 'high',
      img: avatar2,
      checked: false,
    },
    {
      id: 5,
      task: 'New logo design for Angular Admin',
      dueDate: 'March 02-2019',
      priority: 'high',
      imgname:'NG',
      checked: true,
    },
    {
      id: 6,
      task: 'New logo design for Angular Admin',
      dueDate: 'March 02-2019',
      priority: 'low',
      img: avatar2,
      checked: false,
    },
  ]);

  const getPriorityColor = (priority) => {
    const lowerCasePriority = priority.toLowerCase();

    switch (lowerCasePriority) {
      case 'high':
        return '#DF84A4';

      case 'med':
      case 'medium':
        return '#F9F511';


      case 'low':
        return '#62ee7a ';

      default:
        return '#ffffff';
        
          
          
        
    }
  };

  const handleCheckboxChange = (itemId) => {
    const updatedTodoItems = todoItems.map((item) =>
      item.id === itemId ? { ...item, checked: !item.checked } : item
    );
    setTodoItems(updatedTodoItems);
  };




  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <div className='main d-flex'>
        <Sidebar />
        <div className='pagewidth px-3'>
          <Header />

          <div className='section mt-4'>
            <div className='container-fluid'>
              <div className='row d-flex flex-wrap'>
                <div className='col-12'>
                  <div className='card d-flex flex-column'>
                    <div className='card-body'>
                      <div className="table-responsive todo_list">
                        <table className="table table-striped table-vcenter mb-0">
                          <thead>
                            <tr>
                              <th>
                                <button className="btn btn-info btn-sm" onClick={handleShow}>
                                  Add New
                                </button>
                              </th>
                              <th className=" text-right">Due</th>
                              <th>Priority</th>
                              <th>
                                <div className='mx-2'><FontAwesomeIcon icon={faUser} /></div>
                              </th>
                            </tr>
                          </thead>

                          <tbody>
                            {todoItems.map((item) => (
                              <tr key={item.id}>
                                <td>
                                  <label className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      name={`example-checkbox${item.id}`}
                                      value={`option${item.id}`}
                                      checked={item.checked}
                                      onChange={() => handleCheckboxChange(item.id)}
                                    />
                                    <span className={`custom-control-label mx-2 ${item.checked ? 'completed' : ''}`}>
                                      {item.task}
                                    </span>
                                  </label>
                                </td>
                                <td className="text-right">{item.dueDate}</td>
                                <td>
                                  <span
                                    className='ml-0 mr-0'
                                    style={{
                                      backgroundColor: getPriorityColor(item.priority),
                                      padding: '4px',
                                      borderRadius: '5px',
                                      color: 'white',
                                    }}>
                                    <small>{item.priority}</small>
                                  </span>
                                </td>
                                <td>
                                  {item.img ? (
                                    <img
                                      src={item.img}
                                      alt=""
                                      className="avatar rounded-circle avatar-sml"
                                    />
                                  ) : (
                                    <span className="avatar rounded-circle avatar-sml">{item.imgname}</span>
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
            </div>
          </div>

          <Footer />
        </div>
      </div>




      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create New TODO</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="mb-3">
            <label htmlFor="task" className="form-label">Task</label>
            <input type="text" className="form-control" id="task" placeholder=""/>
            </div>

            <div className="mb-3">
            <label htmlFor="due" className="form-label">Due Date</label>
            <input type="date" class="form-control" id="due" placeholder="Date "/>
            </div>

            <div class="mb-3">
                <label htmlFor="priority" class="form-label">Priority</label>
                <select class="form-select" id="priority">
                    <option value="High" className='text-danger'>High</option>
                    <option value="Low" className='text-scucess'>Low</option>
                    <option value="Med" className='text-warning'>Medium</option>
                </select>
            </div>

            <div className="mb-3">
            <label htmlFor="userid" className="form-label">User Id</label>
            <input type="text" className="form-control" id="userid" placeholder=""/>
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
  );
}
