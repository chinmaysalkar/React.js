import React from 'react'
import Header from '../../layouts/Header'
import Footer from '../../layouts/Footer'
import { Card, InputGroup, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList,faPlus, faTrash, faEnvelope, faPhone, faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import avatar1 from '../../assets/images/avatar1.jpg'
import Sidebar from '../../layouts/Sidebar';

export default function Contact() {
    const contactData = [
        { imageSrc: avatar1, name: 'John Smith', phone: '+264-625-2583', email: 'johnsmith@info.com', address: '455 S. Airport St. Moncks Corner, SC 29461' },
        { imageSrc: avatar1, name: 'Merri Diamond', phone: '+264-625-2583', email: 'johnsmith@info.com', address: '455 S. Airport St. Moncks Corner, SC 29461' },
        { imageSrc: avatar1, name: 'Sara Hopkins', phone: '+264-625-2583', email: 'johnsmith@info.com', address: '455 S. Airport St. Moncks Corner, SC 29461' },
        { imageSrc: avatar1, name: 'Andrew Patrick', phone: '+264-625-2583', email: 'johnsmith@info.com', address: '455 S. Airport St. Moncks Corner, SC 29461' },
        { imageSrc: avatar1, name: 'Claire Peters', phone: '+264-625-2583', email: 'johnsmith@info.com', address: '455 S. Airport St. Moncks Corner, SC 29461' },
        { imageSrc: avatar1, name: 'Allen Collins', phone: '+264-625-2583', email: 'johnsmith@info.com', address: '455 S. Airport St. Moncks Corner, SC 29461' },
        { imageSrc: avatar1, name: 'John Smith', phone: '+264-625-2583', email: 'johnsmith@info.com', address: '455 S. Airport St. Moncks Corner, SC 29461' },
        { imageSrc: avatar1, name: 'John Smith', phone: '+264-625-2583', email: 'johnsmith@info.com', address: '455 S. Airport St. Moncks Corner, SC 29461' },
        
      ];

      
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
                        <div className="d-flex justify-content-between top-change-btn">
                       
                        <div className='contact-gridtop mb-2 '>
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

                        <div className="d-flex align-items-center sort_stat">
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


        <div className='tab-pane fade active show mx-3   mt-3' id='list' role='tabpanel'>
            <div className='table-responsive'>
            <table className="table table-hover table-vcenter text-nowrap table_custom border-style list">
        <tbody>
        {contactData.map((contact) => (
          <tr key={contact.id}>
            <td className="width35 hidden-xs">
              <a href="/#;" className="mail-star">
              <FontAwesomeIcon icon={faStar} className='mt-3'/>
              </a>
            </td>
            <td className="text-center width40">
              <div className="avatar d-block">
              <img className="img-thumbnail rounded-circle avatar-sml" src={contact.imageSrc} alt=''/>
              </div>
            </td>
            <td>
              <div>
                <a href="/#;">{contact.name}</a>
              </div>
              <div className="text-muted">{contact.phone}</div>
            </td>
            <td className="hidden-xs">
              <div className="text-muted">{contact.email}</div>
            </td>
            <td className="hidden-sm">
              <div className="text-muted">{contact.address}</div>
            </td>

            <td className="text-end ">
              <a className="btn btn-sm btn-link" href="/#" data-toggle="tooltip" title="Phone">
              <FontAwesomeIcon icon={faPhone} className='mt-3'/>
              </a>
              <a className="btn btn-sm btn-link" href="/#" data-toggle="tooltip" title="Mail">
              <FontAwesomeIcon icon={faEnvelope} className='mt-3'/>            
              </a>
              <a className="btn btn-sm btn-link hidden-xs js-sweetalert" data-type="confirm" href="/#" data-toggle="tooltip" title="Delete">
              <FontAwesomeIcon icon={faTrash} className='mt-3' />              
              </a>
            </td>

          </tr>
        ))}
      </tbody>
    </table>

            </div>
            
        </div>


        



        <Footer/>
    </div>
    </div>
    </>
  )
}
