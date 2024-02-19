import React, {useState} from 'react'
import img1 from '../../assets/images/slider1.svg'
import img2 from '../../assets/images/slider2.svg'
import img3 from '../../assets/images/slider3.svg'
// import logo from '../../assets/images/command-symbol-svgrepo-com.svg'
import logo from '../../assets/images/logo1.png'
import { Link } from 'react-router-dom'

export default function Register() {
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [agreeTerms, setAgreeTerms] = useState(false);

    const handleFirstNameChange = (e) => setFirstName(e.target.value);
    const handleLastNameChange = (e) => setLastName(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleAgreeTermsChange = () => setAgreeTerms(!agreeTerms);

    const handleSubmit = (e) => {
        e.preventDefault();
        
    };
  return (
    <div className='login-main'>
        <div className="auth">
            <div className="auth_left">
                <div className="card">
                <div className="text-center mb-2">
                    <Link className="header-brand" to="/">
                    <img src={logo} alt="" className='avatar-sml logo-login'/>
                    </Link>
                </div>
                <div className="card-body">
                    <div className="card-title mb-2">CREATE NEW ACCOUNT</div>
                    <form onSubmit={handleSubmit}>

                        <div className='row'>
                            <div className='col-lg-6 col-sm-12'>
                                <div className="form-group mb-3">
                                    <label className="form-label">First Name <span className='text-danger'>*</span></label>
                                    <input
                                    type="text"
                                    className="form-control"
                                    placeholder="First name"
                                    value={firstname}
                                    onChange={handleFirstNameChange}
                                    />
                                </div>
                            </div>

                            <div className='col-lg-6 col-sm-12'>
                                <div className="form-group mb-3">
                                    <label className="form-label">Last Name <span className='text-danger'>*</span></label>
                                    <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Last name"
                                    value={lastname}
                                    onChange={handleLastNameChange}
                                    />
                                </div>
                            </div>
                        </div>
                    
                    

                    <div className="form-group mb-3">
                        <label className="form-label">Email address <span className='text-danger'>*</span></label>
                        <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        value={email}
                        onChange={handleEmailChange}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label className="form-label">Password <span className='text-danger'>*</span></label>
                        <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label className="custom-control custom-checkbox">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            checked={agreeTerms}
                            onChange={handleAgreeTermsChange}
                        />
                        <span className="custom-control-label mx-2">
                            Agree the <a href="/#">terms and policy</a>
                        </span>
                        </label>
                    </div>
                    
                    <Link to="/verifyemail">
                    <div className="form-footer d-grid">
                        <button type="submit" className="btn btn-primary btn-block btn-top">
                        Click new account
                        </button>
                    </div>
                    </Link>
                    
                    </form>
                </div>
                <div className="text-center text-muted">
                    Already have an account? <Link to="/">Sign In</Link>
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
