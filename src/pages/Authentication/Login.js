import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import img1 from '../../assets/images/slider1.svg';
import img2 from '../../assets/images/slider2.svg';
import img3 from '../../assets/images/slider3.svg';
import logo from '../../assets/images/logo1.png';
import { useNavigate } from 'react-router-dom';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
});

export default function Login() {
  const navigate = useNavigate();

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
                <Formik
                  initialValues={{ email: '', password: '', rememberMe: false }}
                  validationSchema={LoginSchema}
                  onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                      console.log('Email:', values.email);
                      console.log('Password:', values.password);
                      console.log('Remember Me:', values.rememberMe);
                      console.log('Login successful');
                      navigate('/dashboard');
                      setSubmitting(false);
                    }, 400);
                  }}
                >
                  {({ isSubmitting, errors }) => (
                    <Form>
                      <div className="form-group mb-3 mt-3">
                        <select className="form-select">
                          <option>HR Dashboard</option>
                          <option>Project Dashboard</option>
                          <option>Job Portal</option>
                        </select>
                      </div>
                      <div className="form-group mb-3">
                        <Field
                          type="email"
                          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                          id="email"
                          name="email"
                          placeholder="Enter email"
                        />
                        <ErrorMessage name="email" component="div" className="invalid-feedback" />
                      </div>
                      <div className="form-group mb-3">
                        <label className="form-label d-flex justify-content-between">
                          Password
                          <Link className="float-right small text-secondary mx-2" to="/forgotpassword">
                            I forgot password
                          </Link>
                        </label>
                        <Field
                          type="password"
                          className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                          id="password"
                          name="password"
                          placeholder="Password"
                        />
                        <ErrorMessage name="password" component="div" className="invalid-feedback" />
                      </div>
                      <div className="form-group mb-3">
                        <label className="custom-control custom-checkbox">
                          <Field type="checkbox" className="form-check-input" name="rememberMe" />
                          <span className="custom-control-label mx-2">Remember me</span>
                        </label>
                      </div>
                      <div className="text-danger">
                        {(errors.email || errors.password) && 'Email and password are required fields.'}
                      </div>
                      <div className="form-footer d-grid">
                        <button type="submit" className="btn btn-primary btn-block btn-top" disabled={isSubmitting}>
                          {isSubmitting ? 'Logging in...' : 'Click to login'}
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
                <div className="text-center text-muted">
                  <small>Don't have an account yet? <Link to="/register">Sign Up</Link></small>
                </div>
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
