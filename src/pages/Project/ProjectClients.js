import React, {useState} from 'react'
import Header from '../../layouts/Header'
import Footer from '../../layouts/Footer'
import { Link } from 'react-router-dom';
import Sidebar from '../../layouts/Sidebar';
import Clients from '../../components/Project/ProjectClients/Clients';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



export default function ProjectClients() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



  return (
    <>
    <div className='main d-flex'>
        <Sidebar/>
        <div className='pagewidth px-3'>
        <Header/>

        <div className='container-fluid'>
            <div className='row mt-3'>
                <div className='col-12'>
                    <div className='card'>
                        <div className='card-body'>
                            <div className="row">
                                
                                <div className="col-lg-4 col-md-4 col-sm-6  mb-2">
                                    <div className="input-group mx-2">
                                    <input type="text" className="form-control" placeholder="Client Name" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6 mb-2">
                                    <div className="input-group mx-2">
                                    <input type="text" className="form-control" placeholder="Project" />
                                    </div>
                                </div>
                            
                                <div className="col-lg-4 col-md-4 col-sm-6">
                                    <Link to="" className="btn btn-sm btn-primary btn-block btn-top mx-2">
                                    Search
                                    </Link>
                                    
                                    <Link to="" className="btn btn-sm btn-primary btn-block btn-top" onClick={handleShow}>
                                    Add New
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <Clients/>

            </div>           
        </div>

       

        <Footer/>
    </div>
    </div>


        {/* Modal For Add Clients */}

     
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-center'>Add Client</Modal.Title>
        </Modal.Header>


        <Modal.Body>
            <form >

                <div className="form-group mb-3">
                    <label htmlFor="inputGroupFile01">Upload Image</label>
                    <input type="file" className="form-control" id="clientimg" />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" className='form-control'  />
                </div>
                
            

                <div className="form-group mb-3">
                    <label htmlFor="email">Email</label>
                    <input id="email"  className='form-control'></input>
                </div>

               
                <div className="form-group mb-3">
                    <label htmlFor="companyname">Company Name</label>
                    <input id="companyname" className='form-control'></input>
                </div>


                <div className="form-group mb-3">
                    <label>Social Links</label>
                    <div class="mb-3 mt-1">
                    <input type="email" class="form-control" id="facebook" placeholder="Facebook "/>
                    </div>
                    <div class="mb-3">
                    <input type="email" class="form-control" id="twitter" placeholder="Twitter "/>
                    </div>
                    <div class="mb-3">
                    <input type="email" class="form-control" id="linkedin" placeholder="Linkedin"/>
                    </div>
                    <div class="mb-3">
                    <input type="email" class="form-control" id="instagram" placeholder="Instagram"/>
                    </div>
                </div>
                   
            </form>
        </Modal.Body>


        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type='submit' variant="primary" className='btn-top'>
            Add
          </Button>
        </Modal.Footer>
        </Modal> 
    </>
  )
}
