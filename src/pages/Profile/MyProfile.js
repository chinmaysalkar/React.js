import React, {useState} from 'react'
import Header from '../../layouts/Header'
import Footer from '../../layouts/Footer'
import Sidebar from '../../layouts/Sidebar'
import img1 from '../../assets/images/avatar1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faSkype, } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import Calender from '../../components/Profile/Calender';
import Profile from '../../components/Profile/Timeline';
import Timeline from '../../components/Profile/Timeline';
import Blog from '../../components/Profile/Blog';
import Modal from 'react-bootstrap/Modal';


export default function MyProfile() {


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [formData, setFormData] = useState({
        img: img1,
        name: 'Sara Hopkins',
        role: 'Ui Developer',
        designation: 'Employee',
        department: 'Web Development',
        email: 'SaraHopkins@gmail.com',
        mobile: '+91 1234567890',
        employeeid: '12345',
        bio: 'Contrary to popular belief, Lorem Ipsum is not simply random. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
        socialLinks: [
            { type: 'Twitter', link: 'https://twitter.com' },
            { type: 'Facebook', link: 'https://facebook.com' },
            { type: 'Skype', link: 'https://skype.com' },
            { type: 'Phone', link: 'tel:1234567890' }
        ]
    });

   


    const handleChange = (e) => {
        const { id, value, files } = e.target;
        if (id === 'img') {
            // Handle image file
            const file = files[0];
            if (file) {
                // Convert image to base64 for preview (optional)
                const reader = new FileReader();
                reader.onloadend = () => {
                    setFormData({ ...formData, img: reader.result });
                };
                reader.readAsDataURL(file);
            }
        } else {
            // Handle other form fields
            setFormData({ ...formData, [id]: value });
        }
    };

   

    const handleSocialLinkChange = (index, value) => {
        const updatedSocialLinks = [...formData.socialLinks];
        updatedSocialLinks[index].link = value;
        setFormData({ ...formData, socialLinks: updatedSocialLinks });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission here
        console.log("Form submitted:", formData);
        setShow(false); 
    };



    
    const getIconByType = (type) => {
        switch (type) {
            case 'Twitter':
                return faTwitter;
            case 'Facebook':
                return faFacebook;
            case 'Skype':
                return faSkype;
            case 'Phone':
                return faPhone;
            default:
                return null;
        }
    };


    const [activeButton, setActiveButton] = useState('calender');

    const [currentComponent, setCurrentComponent] = useState('calender');

    const handleButtonClick = (componentName) => {
      setCurrentComponent(componentName);
      setActiveButton(componentName);
    };




  return (
    <>
        <div className='main d-flex'>
        <Sidebar/>

        <div className='pagewidth px-3'>
        <Header/>
        <div className='section-body'>
            <div className='container-fluid'>
                <div className='card mb-0 d-flex'>
                    <div className='card-body'>
                        <div className='row d-flex'>
                        <div className='col-md-12'>
                        <div className='profile-view mb-3 mx-3'>
                            <div className='profile-img-wrap'>
                            <img src={formData.img} alt="" className='card-profile-img rounded-circle'/>
                            </div>
                        </div>
                        <div className='profile-basic mx-3'>
                            <div className='row d-flex'>
                                <div className='col-md-5 mb-3'>
                                <h3>{formData.name}</h3>
                                <ul className='social-links list-inline mb-3 mt-2'>
                                    {formData.socialLinks.map((link, index) => (
                                        <li key={index} className='list-inline-item'>
                                            <a href={link.link}><FontAwesomeIcon icon={getIconByType(link.type)} /></a>
                                        </li>
                                    ))}
                                </ul>
                                <p className='mb-4'>{formData.bio}</p>
                                </div>

                                <div className='col-md-7 profile-basic1'>
                                    <h6 className='mb-3 '><span className='font-weight-bold'>Employee ID-</span> <span className='text-muted'>{formData.employeeid}</span></h6>
                                    <h6 className='mb-3'><span className='font-weight-bold'>Designation-</span> <span className='text-muted'>{formData.designation}</span></h6>
                                    <h6 className='mb-3'><span className='font-weight-bold'>Role-</span> <span className='text-muted'>{formData.role}</span></h6>
                                    <h6 className='mb-3'><span className='font-weight-bold'>Email-</span> <span className='text-muted'>{formData.email}</span></h6>  
                                    <h6><span className='font-weight-bold'>Mobile-</span> {formData.mobile}</h6>       
                                </div>
                            <div>
                                <button className="btn btn-outline-primary btn-sm"  onClick={handleShow}>
                                Edit Profile
                                </button>
                            </div>    
                            </div>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='section-body py-4'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        
                    <div className='d-flex justify-content-between top-change-btn'>
                      <div className='all-top'>
                        <button onClick={() => handleButtonClick('calender')} className={`top-bar-btn mx-2 ${activeButton === 'calender' ? 'text-secondary border-top-2' : ''}`}>Calender</button>
                        <button onClick={() => handleButtonClick('timeline')} className={`top-bar-btn mx-2 ${activeButton === 'timeline' ? 'text-secondary border-top-2' : ''}`}>Timeline</button>
                        <button onClick={() => handleButtonClick('profile')} className={`top-bar-btn mx-2 ${activeButton === 'profile' ? 'text-secondary border-top-2' : ''}`}>Profile</button>
                        <button onClick={() => handleButtonClick('blog')} className={`top-bar-btn mx-2 ${activeButton === 'blog' ? 'text-secondary border-top-2' : ''}`}>Blog</button>
                      </div> 

                     
                    </div>

                    <div>
                        {currentComponent === 'calender' && <Calender />}
                        {currentComponent === 'timeline' && <Timeline />}
                        {currentComponent === 'profile' && <Profile />}
                        {currentComponent === 'blog' && <Blog />}
                    </div>


                  </div>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
        </div>





        <Modal show={show} onHide={handleClose}>
            <div className="modal-content">
                <div className='card'>
                    <div className='p-3 mb-3'>
                    <h4>Edit Profile</h4>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group mb-3">
                            <label htmlFor="inputGroupFile01">Upload Image</label>
                            <input type="file" className="form-control" id="img" onChange={handleChange} />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" className='form-control' value={formData.name} onChange={handleChange} />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="role">Role</label>
                            <input type="text" id="role" className='form-control' value={formData.role} onChange={handleChange} />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="bio">Bio</label>
                            <textarea id="bio" value={formData.bio} className='form-control' onChange={handleChange}></textarea>
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="mobile">Mobile no</label>
                            <input id="mobile" value={formData.mobile} className='form-control' onChange={handleChange}></input>
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="email">Email</label>
                            <input id="email" value={formData.email} className='form-control' onChange={handleChange}></input>
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="department">Department</label>
                            <input id="department" value={formData.department} className='form-control' onChange={handleChange}></input>
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="designation">Designation</label>
                            <input id="designatyion" value={formData.designation} className='form-control' onChange={handleChange}></input>
                        </div>
                        <div className="form-group mb-3">
                            <label>Social Links</label>
                            {formData.socialLinks.map((link, index) => (
                                <div key={index} className='mb-3'>
                                    <input type="text" value={link.link} className='form-control' onChange={e => handleSocialLinkChange(index, e.target.value)} />
                                </div>
                            ))}
                        </div>

                        <button type="submit" className="btn btn-primary btn-top">Save</button>
                        <button type="close" className="btn btn-primary btn-top mx-2"onClick={handleClose}>Close</button>
                    </form>
                    </div>
                </div>
            </div>
        </Modal>
    </>
  )
}
