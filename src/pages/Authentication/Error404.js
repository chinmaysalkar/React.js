import React from 'react'
import img1 from '../../assets/images/slider1.svg'
import img2 from '../../assets/images/slider2.svg'
import img3 from '../../assets/images/slider3.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function Error404() {
  return (
    <div className='login-main'>
        <div className="auth">
            <div className="auth_left">
                <div className="card">
                    <div className="card-body">
                        <div className="display-3 text-muted mb-5">
                        <i className="si si-exclamation"></i> 404
                        </div>
                        <h1 className="h3 mb-3">Oops.. You just found an error page..</h1>
                        <p className="h6 text-muted font-weight-normal mb-3">
                        We are sorry but our service is currently not available…
                        </p>
                        <a className="btn btn-primary btn-top" href="/">
                        <FontAwesomeIcon icon={faArrowLeft} className='mx-2' />Go back
                        </a>
                    </div>
                </div>
            </div>
            <div className="auth_right">
                <div className="carousel slide" data-ride="carousel" data-interval="3000">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src={img1} className="img-fluid" alt="login page" />
                        <div className="px-4 mt-4">
                            <h4>Fully Responsive</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                        </div>
                        <div className="carousel-item">
                        <img src={img2} className="img-fluid" alt="login page" />
                        <div className="px-4 mt-4">
                            <h4>Quality Code and Easy Customizability</h4>
                            <p>There are many variations of passages of Lorem Ipsum available.</p>
                        </div>
                        </div>
                        <div className="carousel-item">
                        <img src={img3} className="img-fluid" alt="login page" />
                        <div className="px-4 mt-4">
                            <h4>Cross Browser Compatibility</h4>
                            <p>Overview We're a group of women who want to learn JavaScript.</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}
