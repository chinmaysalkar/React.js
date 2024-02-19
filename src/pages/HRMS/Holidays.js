import React, {useState} from 'react'
import Header from '../../layouts/Header'
import Footer from '../../layouts/Footer'
import Sidebar from '../../layouts/Sidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Holidays() {
    
    const holidaysData = [
        { day: 'Tuesday', date: 'Jan 01, 2019', holiday: "New Year's Day", action: '' },
        { day: 'Monday', date: 'Jan 14, 2019', holiday: 'Makar Sankranti / Pongal', action: '' },
        { day: 'Saturday', date: 'Jan 26, 2019', holiday: 'Republic Day', action: '' },
        { day: 'Monday', date: 'Mar 04, 2019', holiday: 'Maha Shivaratri', action: '' },
        { day: 'Thursday', date: 'Mar 21, 2019', holiday: 'Holi', action: '' },
        { day: 'Friday', date: 'Apr 19, 2019', holiday: 'Good Friday', action: '' },
        { day: 'Wednesday', date: 'Jun 05, 2019', holiday: 'Eid-ul-Fitar', action: '' },
        { day: 'Thursday', date: 'Aug 15, 2019', holiday: 'Independence Day', action: '' },
        { day: 'Wednesday', date: 'Oct 02, 2019', holiday: 'Mathatma Gandhi Jayanti', action: '' },
        { day: 'Wednesday', date: 'Dec 25, 2019', holiday: 'Christmas', action: '' }
      ];



      const handleEdit = (index) => {
        console.log("Edit holiday at index:", index);
      };
    
      const handleDelete = (index) => {
        console.log("Delete holiday at index:", index);
      };


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


  return (
    <>
    <div className='main d-flex'>
    <Sidebar/>
    <div className='holiday-main px-3'>

        <div>
        <Header/>
        </div>

        <div className='d-flex justify-content-end mx-3'>
            <Button variant="primary" className='btn-top' onClick={handleShow}>
              +  Add Holiday
            </Button>
        </div>

        <div className='holidays card p-4 mt-4 mx-3 table-responsive'>
            <table className="table table_custom spacing5 table-hover">
                <thead>
                <tr>
                    <th scope="col">DAY</th>
                    <th scope="col">DATE</th>
                    <th scope="col">HOLIDAY</th>
                    <th scope="col">ACTION</th>
                </tr>
                </thead>
                <tbody>
                {holidaysData.map((holiday, index) => (
                    <tr key={index}>
                    <td>{holiday.day}</td>
                    <td>{holiday.date}</td>
                    <td>{holiday.holiday}</td>
                    <td>
                        <button className='btn btn-sm mx-1' onClick={() => handleEdit(index)}>
                            <FontAwesomeIcon icon={faEdit} className='text-success'/>
                        </button>

                        <button className='btn btn-sm mx-1' onClick={() => handleDelete(index)}>
                            <FontAwesomeIcon icon={faTrash} className='text-danger'/>
                        </button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
        
        <div>
        <Footer/>
        </div>  
    </div>
    </div>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Holiday</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <div>
            <div className="mb-3">
            <label htmlFor="holidayname" className="form-label">Holiday Name</label>
            <input type="text" className="form-control" id="holidayname" placeholder=""/>
            </div>

            <div className="mb-3">
            <label htmlFor="holidaydate" className="form-label">Holiday Date</label>
            <input type="date" className="form-control" id="holidaydate" placeholder=""/>
            </div>

            <div className="mb-3">
            <label htmlFor="holidayday" className="form-label">Holiday Day</label>
            <input type="text" className="form-control" id="holiday" placeholder=""/>
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
