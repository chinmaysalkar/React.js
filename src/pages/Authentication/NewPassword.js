import React,{useState} from 'react'
import img1 from '../../assets/images/slider1.svg'
import img2 from '../../assets/images/slider2.svg'
import img3 from '../../assets/images/slider3.svg'
// import logo from '../../assets/images/command-symbol-svgrepo-com.svg'
import logo from '../../assets/images/logo1.png'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEyeSlash, faEye} from '@fortawesome/free-solid-svg-icons'; 


import { useFormik } from 'formik';
import * as Yup from 'yup';
// import OtpInput from 'react-otp-input';




const validationSchema = Yup.object({
    newPassword: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .max(14, 'Password must not exceed 14 characters')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
        'Password must contain at least one uppercase letter, one lowercase letter, one symbol, and one number'
      )
      .required('Required *'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
      .required('Required *'),
  });
  
export default function NewPassword() {
    // const [otp, setOtp] = useState('');

    const [showPassword, setShowPassword] = useState(false);
    const [showPassword1, setShowPassword1] = useState(false);

    const formik = useFormik({
        initialValues: {
          newPassword: '',
          confirmPassword: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
          // Handle form submission logic here
          console.log(values);
        },
      });

      const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };

      const togglePasswordVisibility1 = () => {
        setShowPassword1(!showPassword1);
      };
    

  return (
    <div className='login-main'>
        <div className="auth">
            <div className="auth_left">
            <div className="card">
                <div className="text-center mb-2">
                    <div className="header-brand">
                    <img src={logo} alt="" className='avatar-sml logo-login'/>
                    </div>
                </div>
                <div className="card-body">
                <form onSubmit={formik.handleSubmit}>
                <div className="card-title mb-4">Reset Password</div>

                <div className="form-group mb-5">
                  <label className="form-label" htmlFor="newPassword">
                    New Password<span className="text-danger"> *</span>
                  </label>
                  <div className="input-group mb-1">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      className="form-control"
                      id="newPassword"
                      name="newPassword"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.newPassword}
                    />
                    <span className="input-group-text bg-white" onClick={togglePasswordVisibility}>
                      {showPassword ? (
                        <FontAwesomeIcon icon={faEyeSlash}/>
                      ) : (
                        <FontAwesomeIcon icon={faEye}/>
                      )}
                    </span>
                  </div>
                  {formik.touched.newPassword && formik.errors.newPassword ? (
                    <div className="error text-danger">{formik.errors.newPassword}</div>
                  ) : null}
                </div>

                <div className="form-group mb-5 mt-5">
                  <label className="form-label" htmlFor="confirmPassword">
                    Confirm Password<span className="text-danger"> *</span>
                  </label>
                <div className='input-group'>
                <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    name="confirmPassword"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.confirmPassword}
                  />
                    <span className="input-group-text bg-white" onClick={togglePasswordVisibility1}>
                      {showPassword ? (
                        <FontAwesomeIcon icon={faEyeSlash}/>
                      ) : (
                        <FontAwesomeIcon icon={faEye}/>
                      )}
                    </span>
                </div>
                  {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                    <div className="error text-danger">{formik.errors.confirmPassword}</div>
                  ) : null}
                </div>
              </form>
                </div>
                  

                    {/* <div className='mx-4'>
                        <OtpInput
                            value={otp}
                            onChange={setOtp}
                            numInputs={4}
                            renderSeparator={<span>-</span>}
                            renderInput={(props) => <input {...props} className="otp-input"/>}
                        
                        />
                    </div> */}
                    
                <div className="form-footer d-grid mt-3 mb-3">
                    <button className="btn btn-top btn-primary btn-block">
                        Confirm
                    </button>
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







