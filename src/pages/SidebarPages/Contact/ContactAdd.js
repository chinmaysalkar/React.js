import React from 'react'
import Header from '../../../layouts/Header'
import Footer from '../../../layouts/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList,faPlus} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Card, InputGroup, FormControl } from 'react-bootstrap';
import Sidebar from '../../../layouts/Sidebar';

export default function ContactAdd() {
  return (
  <>
  <div className='main d-flex'> 
    <Sidebar/>
    <div className='main-sidebar-pages px-3'>
      <Header/>
      <div className="section-body mt-3">
            <div className="container-fluid">
                <div className="row clearfix">
                <div className="col-lg-12">
                    <Card>
                    <Card.Body>
                        <div className="d-flex justify-content-between">
                       
                        <div className='contact-gridtop mb-2'>
                            <Link to='/contact' className='text-secondary mx-2'>
                            <FontAwesomeIcon icon={faList} className='mx-2' />
                                List 
                            </Link>

                            <Link to='/contactgrid' className='text-secondary mx-2'>
                            <FontAwesomeIcon icon={faList} className='mx-2' />
                                Grid </Link>

                            <Link to='/contactaddnew' className='text-secondary mx-2'>
                            <FontAwesomeIcon icon={faPlus} className='mx-2' />
                                Add New
                            </Link>                          
                        </div>

                        <div className="d-flex align-grids-center sort_stat">
                            <div className="d-flex">
                            <div className="ml-2">
                                <h6 className="mb-0 mx-3 text-secondary">MY INCOME</h6>
                                <h6 className="mb-0 mx-3">$5,510</h6>
                            </div>
                            </div>
                            <div className="d-flex ml-3">
                            <div className="ml-2">
                                <h6 className="mb-0 mx-3 text-secondary">SITE TRAFFIC</h6>
                                <h6 className="mb-0 mx-3">53% Up</h6>
                            </div>
                            </div>
                        </div>
                        </div>

                        <InputGroup className="mt-2">
                        <FormControl type="text" placeholder="Search..." />
                        </InputGroup>
                    </Card.Body>
                    </Card>
                </div>
                </div>
            </div>
        </div>

      <div className='card mx-3 mt-3 px-3'>
          <div className="mb-3 mt-3">
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Name"/>
          </div>
          <div className="mb-3 mt-3">
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Number"/>
          </div>
          <div className="mb-3 mt-3">
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Email"/>
          </div>
          <div className="mb-3">
            <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Enter Your Address" rows="3"></textarea>
          </div>

          <div className="mb-3">
          <input className="form-control" type="file" id="formFile"/>
          </div>
          <div className='mb-3'>
            <button type="button" className="btn btn-primary mx-2 btn-top">Add</button>
            <button type="button" className="btn btn-primary bg-white text-black border-black">Cancel</button>
          </div>
          

        </div>
        
      <Footer/>
    </div>
  </div>
  </>
  )
}
