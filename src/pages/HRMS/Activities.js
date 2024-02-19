import React from 'react'
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import EditorComponent from '../../components/Editor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComments } from '@fortawesome/free-solid-svg-icons';
import Sidebar from '../../layouts/Sidebar';
import img from '../../assets/images/avatar1.jpg'

export default function Activities() {
  return (
   <>
   <div className='main d-flex'>
    <Sidebar/>
    <div className='activities-main px-3'>
        <Header/>

        <div className='card mt-3 activites-card mx-3'>
          <div className='card-header bg-white border-0'>
            <small className='card-title'>TIMELINE ACTIVITY</small>
          </div>
          <div className='card-body'>
            <div className='summernote'>
              <div className='mb-3'>
                <div className='p10'>
                  <div id='cke-editor2'>
                  <EditorComponent/>
                  </div>
                </div>
              </div>
              "Hello there,"
              <p>The toolbar can be customized and it also supports various callbacks such as <code>oninit</code>, <code>onfocus</code>, <code>onpaste</code> and many more.</p>
              <p>Please try <b>paste some texts</b> here</p>
            </div>

            <div className="timeline-item">
              <img className="tl_avatar rounded-circle" src={img} alt="" />
              <span className='mx-1'>
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
                <FontAwesomeIcon icon={faHeart} className='text-danger mx-2' />
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
             
            <div className="timeline-item">
              <img className="tl_avatar rounded-circle" src={img} alt="" />
              <span className='mx-1'>
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

                <div className='timeline-img mb-5'>
                  <img src="" alt="" />
                  <img src="" alt="" />
                </div>
                <a href="fake_url" className="mr-20 text-muted">
                <FontAwesomeIcon icon={faHeart} className='text-danger mx-2' />
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

            <div className="timeline-item">
              <img className="tl_avatar rounded-circle" src={img} alt="" />
              <span className='mx-1'>
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
                <FontAwesomeIcon icon={faHeart} className='text-danger mx-2' />
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
        <div>
      <Footer/>
      </div>  
    </div>
   </div>
   </>
  )
}
