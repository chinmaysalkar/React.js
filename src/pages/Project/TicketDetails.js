import React from 'react'
import Header from '../../layouts/Header'
import Footer from '../../layouts/Footer'
import avatar1 from '../../assets/images/avatar1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faSlack } from '@fortawesome/free-brands-svg-icons';
import { faX, faHeart, faComments } from '@fortawesome/free-solid-svg-icons';
import DropdownMenu from '../../components/DropdownMenu';
import img1 from '../../assets/images/1.jpg'
import img2 from '../../assets/images/2.jpg'
import EditorComponent from '../../components/Editor';
import { Link } from 'react-router-dom';
import Sidebar from '../../layouts/Sidebar';


export default function TicketDetails() {
    

    
  return (
    <>
    <div className='main d-flex'>
        <Sidebar/>
        <div className='pagewidth px-3'>
        <Header/>
        <div className='section-body mt-3'>
            <div className='container-fluid'>
                <div className='row d-flex flex-wrap'>
                    <div className='col-lg-4 col-md-12'>
                        <div className='card c_grid c_yellow d-flex flex-column'>
                            <div className="card-body text-center">
                                <div className="circle">
                                    <img className="rounded-circle" src={avatar1} alt="fake_url" />
                                </div>
                                <h6 className="mt-3 mb-0">Michelle Green</h6>
                                <span>jason-porter@info.com</span>
                                <ul className="mt-3 list-unstyled d-flex justify-content-center">
                                    <li><Link className="p-3" target="_blank" to="/#"><FontAwesomeIcon icon={faFacebook} /></Link></li>
                                    <li><Link className="p-3" target="_blank" to="/#"><FontAwesomeIcon icon={faSlack} /></Link></li>
                                    <li><Link className="p-3" target="_blank" to="/#"><FontAwesomeIcon icon={faLinkedin} /></Link></li>
                                </ul>
                                <button className="btn btn-default btn-sm border">Follow</button>
                                <button className="btn btn-default btn-sm border mx-1">Message</button>
                            </div>
                        </div>

                        <div className="card mt-3 d-flex">
                            <div className="card-header bg-white border-0 d-flex justify-content-between p-3">
                                <h6 className="card-title">TICKET DETAILS</h6>
                                <div className="card-options d-flex">
                                    <span className="card-options-remove mx-2" data-toggle="card-remove">
                                    <FontAwesomeIcon icon={faX} />    
                                    </span>
                                    <DropdownMenu/>     
                                </div>
                            </div>

                            <div className="card-body">
                                <span>
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It
                                has roots in a piece of classical Latin literature from 45 BC, making
                                it over 2000 years old. Richard McClintock, a Latin professor at
                                Hampden-Sydney College in Virginia
                                </span>
                            </div>
                        </div>

                        <div className="card mt-3 d-flex">
                            <div className="card-header bg-white border-0 d-flex justify-content-between p-3">
                                <h6 className="card-title">TICKET INFO</h6>
                                <div className="card-options d-flex">
                                <span className="card-options-remove mx-2" data-toggle="card-remove">
                                <FontAwesomeIcon icon={faX} /> 
                                </span>
                                <DropdownMenu/>
                                </div>
                            </div>

                            <div className="card-body">
                                <ul className="list-group">
                                <li className="list-group-item">
                                    <small className="text-muted">Title: </small>
                                    <p className="mb-0">Oculux Admin Template</p>
                                </li>
                                <li className="list-group-item">
                                    <small className="text-muted">Department: </small>
                                    <p className="mb-0">Pre-Sales</p>
                                </li>
                                <li className="list-group-item">
                                    <small className="text-muted">Product: </small>
                                    <p className="mb-0">Oculux Side Menu Open OnClick</p>
                                </li>
                                <li className="list-group-item">
                                    <small className="text-muted">Date: </small>
                                    <p className="mb-0">07 Feb 2019</p>
                                </li>
                                <li className="list-group-item">
                                    <div>In Progress</div>
                                    <div className="progress progress-xs mb-0">
                                    <div className="progress-bar bg-info" style={{ width: '58%' }}></div>
                                    </div>
                                </li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    <div className='col-lg-8 col-md-12'>
                        
                        <div className='card d-flex flex-column'>
                            <div className='card-body'>
                            <EditorComponent/>
                            </div>
                        </div>

                        <div className='card mt-2'>
                            <div className="card-header bg-white border-0 d-flex justify-content-between p-3">
                                <h6 className="card-title">TICKET REPLIES</h6>
                                <div className="card-options d-flex">
                                <span className="card-options-remove mx-2" data-toggle="card-remove">
                                <FontAwesomeIcon icon={faX} /> 
                                </span>
                                <DropdownMenu/>
                                </div>
                            </div>

                            <div className='card-body'>
                                <div className="timeline-item">
                                    <div className='d-flex'>
                                        <img className="tl_avatar rounded-circle avatar-sml" src={avatar1} alt="" />
                                        <div className='mx-2'>
                                            <span>
                                            <a href="fake_url">Elisse Joson</a> San Francisco, CA{' '}
                                            <small className=" d-flex justify-content-end">20-April-2019 - Today</small>
                                            </span>
                                            <h6 className="font600">Hello, 'I'm a single div responsive timeline without media Queries!</h6>
                                            <div className="msg">
                                                <p>
                                                I'm speaking with myself, number one, because I have a very good brain and I've said a lot
                                                of things. I write the best placeholder text, and I'm the biggest developer on the web
                                                card she has is the Lorem card.
                                                </p>
                                                <a href="fake_url" className="mr-20 text-muted">
                                                <FontAwesomeIcon icon={faHeart} className='text-pink mx-2' />
                                                12 Love
                                                </a>
                                                <a
                                                className="text-muted mx-2"
                                                role="button"
                                                data-toggle="collapse"
                                                href="#collapseExample"
                                                aria-expanded="false"
                                                aria-controls="collapseExample"
                                                >
                                                <FontAwesomeIcon icon={faComments} className='mx-2'/> 1 Comment
                                                </a>
                                                <div className="collapse p-4 section-gray mt-2" id="collapseExample">
                                                <form className="well">
                                                    <div className="form-group">
                                                    <textarea
                                                        rows="2"
                                                        className="form-control no-resize"
                                                        placeholder="Enter here for tweet..."
                                                    ></textarea>
                                                    </div>
                                                    <button className="btn btn-primary">Submit</button>
                                                </form>
                                                <ul className="recent_comments list-unstyled mt-4 mb-0">
                                                    <li>
                                                    <div className="avatar_img">
                                                        <img
                                                        className="rounded img-fluid"
                                                        src="../assets/images/xs/avatar4.jpg"
                                                        alt="fake_url"
                                                        />
                                                    </div>
                                                    <div className="comment_body">
                                                        <h6>
                                                        Donald Gardner <small className="float-right font-14">Just now</small>
                                                        </h6>
                                                        <p>Lorem ipsum Veniam aliquip culpa laboris minim tempor</p>
                                                    </div>
                                                    </li>
                                                </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                
                                    
                                </div>
                        
                                <div className="timeline-item">
                                    <div className='d-flex'>
                                        <img className="tl_avatar rounded-circle avatar-sml" src={avatar1} alt="" />
                                        <div className='mx-2'>
                                            <span>
                                            <a href="fake_url">Dessie Park</a> Oakland, CA{' '}
                                            <small className=" d-flex justify-content-end">20-April-2019 - Yesterday</small>
                                            </span>
                                            <h6 className="font600">Oeehhh, that's awesome.. Me too!</h6>
                                            <div className="msg">
                                                <p>
                                                I'm speaking with myself, number one, because I have a very good brain and I've said a lot
                                                of things. I write the best placeholder text, and I'm the biggest developer on the web
                                                card she has is the Lorem card.
                                                </p>

                                                <div className='timeline-img mb-5 d-flex'>
                                                <img src={img1} alt="" />
                                                <img src={img2} alt="" />
                                                </div>
                                                <a href="fake_url" className="mr-20 text-muted">
                                                <FontAwesomeIcon icon={faHeart} className='text-pink mx-2' />
                                                23 Love
                                                </a>
                                                <a
                                                className="text-muted mx-2"
                                                role="button"
                                                data-toggle="collapse"
                                                href="#collapseExample"
                                                aria-expanded="false"
                                                aria-controls="collapseExample"
                                                >
                                                <FontAwesomeIcon icon={faComments} className='mx-2'/> 1 Comment
                                                </a>
                                                <div className="collapse p-4 section-gray mt-2" id="collapseExample">
                                                <form className="well">
                                                    <div className="form-group">
                                                    <textarea
                                                        rows="2"
                                                        className="form-control no-resize"
                                                        placeholder="Enter here for tweet..."
                                                    ></textarea>
                                                    </div>
                                                    <button className="btn btn-primary">Submit</button>
                                                </form>
                                                <ul className="recent_comments list-unstyled mt-4 mb-0">
                                                    <li>
                                                    <div className="avatar_img">
                                                        <img
                                                        className="rounded img-fluid"
                                                        src="../assets/images/xs/avatar4.jpg"
                                                        alt="fake_url"
                                                        />
                                                    </div>
                                                    <div className="comment_body">
                                                        <h6>
                                                        Donald Gardner <small className="float-right font-14">Just now</small>
                                                        </h6>
                                                        <p>Lorem ipsum Veniam aliquip culpa laboris minim tempor</p>
                                                    </div>
                                                    </li>
                                                </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                

                                <div className="timeline-item">
                                    <div className='d-flex'>
                                        <img className="tl_avatar rounded-circle avatar-sml" src={avatar1} alt="" />
                                        <div className='mx-2'>
                                            <span>
                                        <a href="fake_url">Rochelle Barton</a> San Francisco, CA{' '}
                                        <small className=" d-flex justify-content-end">20-April-2019</small>
                                            </span>
                                            <h6 className="font600">An Engineer Explains Why You Should Always Order the Larger Pizza</h6>
                                            <div className="msg">
                                                <p>
                                                I'm speaking with myself, number one, because I have a very good brain and I've said a lot
                                                of things. I write the best placeholder text, and I'm the biggest developer on the web
                                                card she has is the Lorem card.
                                                </p>
                                                <a href="fake_url" className="mr-20 text-muted">
                                                <FontAwesomeIcon icon={faHeart} className='text-pink mx-2' />
                                                7 Love
                                                </a>
                                                <a
                                                className="text-muted mx-2"
                                                role="button"
                                                data-toggle="collapse"
                                                href="#collapseExample"
                                                aria-expanded="false"
                                                aria-controls="collapseExample"
                                                >
                                                <FontAwesomeIcon icon={faComments} className='mx-2'/> 1 Comment
                                                </a>
                                                <div className="collapse p-4 section-gray mt-2" id="collapseExample">
                                                <form className="well">
                                                    <div className="form-group">
                                                    <textarea
                                                        rows="2"
                                                        className="form-control no-resize"
                                                        placeholder="Enter here for tweet..."
                                                    ></textarea>
                                                    </div>
                                                    <button className="btn btn-primary">Submit</button>
                                                </form>
                                                <ul className="recent_comments list-unstyled mt-4 mb-0">
                                                    <li>
                                                    <div className="avatar_img">
                                                        <img
                                                        className="rounded img-fluid"
                                                        src="../assets/images/xs/avatar4.jpg"
                                                        alt="fake_url"
                                                        />
                                                    </div>
                                                    <div className="comment_body">
                                                        <h6>
                                                        Donald Gardner <small className="float-right font-14">Just now</small>
                                                        </h6>
                                                        <p>Lorem ipsum Veniam aliquip culpa laboris minim tempor</p>
                                                    </div>
                                                    </li>
                                                </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                
                                
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </div>               
            </div>
        </div>



        <Footer/>
        </div>
    </div>
    </>
  )
}

