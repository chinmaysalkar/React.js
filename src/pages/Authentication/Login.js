import React,{useState} from 'react'
import img1 from '../../assets/images/slider1.svg';
import img2 from '../../assets/images/slider2.svg';
import img3 from '../../assets/images/slider3.svg';
// import logo from '../../assets/images/command-symbol-svgrepo-com.svg'
import logo from '../../assets/images/logo1.png'
import { Link } from 'react-router-dom'; 
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faEyeSlash, faEye} from '@fortawesome/free-solid-svg-icons'; 


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword] = useState(false);
  const [passwordError, setPasswordError] = useState('');



  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordError(validatePassword(newPassword));
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  // const togglePasswordVisibility = () => {
  //   setShowPassword(!showPassword);
  // };


  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
  };


  const validatePassword = (password) => {
    const errors = [];

    if (password.length < 8 || password.length > 14) {
      errors.push("Password must be between 8 and 14 characters.");
    }

    if (!/[A-Z]/.test(password)) {
      errors.push("Password must contain at least one uppercase letter.");
    }

    if (!/[a-z]/.test(password)) {
      errors.push("Password must contain at least one lowercase letter.");
    }

    if (!/\d/.test(password)) {
      errors.push("Password must contain at least one number.");
    }

    if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) {
      errors.push("Password must contain at least one symbol.");
    }

    return errors.join(" ");
  };


  return (
    <div className='login-main'>
        <div className="loginpage">
            <div className="auth row">
                <div className="auth_left">
                    <div className="card">
                        <div className="text-center mb-2">
                            <Link className="header-brand" to="/">
                                <img src={logo} alt="" className='avatar-sml logo-login'/>
                            </Link>
                        </div>
                        <div className="card-body">
                            <div className="card-title">LOGIN TO YOUR ACCOUNT</div>
                            <form onSubmit={handleSubmit}>
                            <div className="form-group mb-3 mt-3">
                                <select className="form-select">
                                    <option>HR Dashboard</option>
                                    <option>Project Dashboard</option>
                                    <option>Job Portal</option>
                                </select>
                            </div>
                            <div className="form-group mb-3">
                                <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Enter email"
                                value={email}
                                onChange={handleEmailChange}
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label className="form-label d-flex justify-content-between">
                                Password
                                <Link className="float-right small text-secondary mx-2" to="/forgotpassword">
                                    I forgot password
                                </Link>
                                </label>
                                <div className="input-group">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        className={`form-control ${passwordError && "is-invalid"}`}
                                        id="exampleInputPassword"
                                        placeholder="Password"
                                        value={password}
                                        onChange={handlePasswordChange}
                                    />
                                    {/* <span className="input-group-text bg-white" onClick={togglePasswordVisibility}>
                                        {showPassword ? (
                                        <FontAwesomeIcon icon={faEyeSlash} />
                                        ) : (
                                        <FontAwesomeIcon icon={faEye} />
                                        )}
                                    </span> */}
                                    </div>
                                    {passwordError && <div className="invalid-feedback">{passwordError}</div>}
                            </div>
                            <div className="form-group mb-3">
                                <label className="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    checked={rememberMe}
                                    onChange={handleRememberMeChange}
                                />
                                <span className="custom-control-label mx-2">Remember me</span>
                                </label>
                            </div>
                            <Link to="/dashboard">
                                <div className="form-footer d-grid">
                                    <button type="submit" className="btn btn-primary btn-block btn-top">
                                    Click to login
                                    </button>
                                </div>
                            </Link>
                            </form>
                        </div>
                        <div className="text-center text-muted">
                            Don't have an account yet? <Link to="/register">Sign Up</Link>
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
    </div>
  )
}
