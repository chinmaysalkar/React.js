import React, {useState} from 'react'
import { Button, Form } from 'react-bootstrap'




export default function AddProfile() {


    

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
        <div className='mx-3  mt-3'>
        <div className='card p-3'>

            <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                <div className="mb-3">
                <label htmlFor="employeeid" className="form-label">Employee ID <span className='text-danger'>*</span></label>
                <input type="text" className="form-control" id="employeeid" placeholder=""/>
                </div>
                </div>

                <div className='col-lg-6 col-md-6 col-sm-12'>
                <div className="mb-3">
                <label htmlFor="email" className="form-label">Email ID <span className='text-danger'>*</span></label>
                <input type="text" className="form-control" id="email" placeholder=""/>
                </div>
                </div>
            </div>

            <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                <div className="mb-3">
                <label htmlFor="firstname" className="form-label">First Name <span className='text-danger'>*</span></label>
                <input type="text" className="form-control" id="firstname" placeholder=""/>
                </div>
                </div>
                    
                <div className='col-lg-6 col-md-6 col-sm-12'>
                <div className="mb-3">
                <label htmlFor="lastname" className="form-label">Last Name <span className='text-danger'>*</span></label>
                <input type="text" className="form-control" id="lastname" placeholder=""/>
                </div>
                </div>
            </div>

            <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-6'>
                    <div className="mb-3">
                    <label htmlFor="mobileno" className="form-label">Mobile No</label>
                    <input type="text" className="form-control" id="mobileno" placeholder=""/>
                    </div>
                </div>

                <div className='col-lg-6 col-md-6 col-sm-6 mb-3'>
                <label htmlFor="mobileno" className="form-label">Role</label>
                    <Form.Select aria-label="Default select example">
                        <option value="1">Super Admin</option>
                        <option value="2">Admin</option>
                        <option value="3">Employee</option>
                    </Form.Select>
                </div>
            </div> 

            <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-6'>
                    <div className="mb-3">
                    <label htmlFor="username" className="form-label">User Name</label>
                    <input type="text" className="form-control" id="userbname" placeholder=""/>
                    </div>
                </div>

                <div className='col-lg-6 col-md-6 col-sm-6'>
                    <div className="mb-3">
                    <label htmlFor="date" className="form-label">Date</label>
                    <input type="date" className="form-control" id="date" placeholder=""/>
                    </div>
                </div> 
            </div>

            <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-6'>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="date" className="form-control" id="password" placeholder=""/>
                    </div>
                </div>

                <div className='col-lg-6 col-md-6 col-sm-6'>
                    <div className="mb-3">
                    <label htmlFor="confirmpassword" className="form-label">Confirm Password</label>
                    <input type="date" className="form-control" id="confirmpassword" placeholder=""/>
                    </div>  
                </div>
            </div> 


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

            <div className='mt-2'>
            <Button variant="primary" className='btn-top'>
                Add
            </Button>
            </div>
        </div>
    </>
  )
}
