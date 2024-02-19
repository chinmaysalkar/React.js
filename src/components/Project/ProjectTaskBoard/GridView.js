import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown, faX, faEye ,faEllipsisVertical, faTrash, faEdit,faShare, faDownload, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import avatar1 from '../../../assets/images/avatar1.jpg'
import Dropdown from 'react-bootstrap/Dropdown';

export default function GridView() {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);

    const toggleDropdown2 = () => {
        setIsDropdownOpen2(!isDropdownOpen2);
    };


    const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);

    const toggleDropdown3 = () => {
        setIsDropdownOpen3(!isDropdownOpen3);
    };


// Card Collaspe Function

    const [isCardCollapsed, setCardCollapsed] = useState(false);

    const toggleCardCollapse = () => {
        setCardCollapsed(!isCardCollapsed);
    };

    const [isCardCollapsed2, setCardCollapsed2] = useState(false);

    const toggleCardCollapse2 = () => {
        setCardCollapsed2(!isCardCollapsed2);
    };

    const [isCardCollapsed3, setCardCollapsed3] = useState(false);

    const toggleCardCollapse3 = () => {
        setCardCollapsed3(!isCardCollapsed3);
    };

// Card remove
    const [isCardBodyVisible, setCardBodyVisible] = useState(true);

    const handleRemoveCardBody = () => {
        setCardBodyVisible(false);
    };


    const [isCardBodyVisible2, setCardBodyVisible2] = useState(true);

    const handleRemoveCardBody2 = () => {
        setCardBodyVisible2(false);
    };


    const [isCardBodyVisible3, setCardBodyVisible3] = useState(true);

    const handleRemoveCardBody3 = () => {
        setCardBodyVisible3(false);
    };
    
  return (
    <div className='pagewidth'>
        <div className='row mx-2 mt-4'>
        {isCardBodyVisible && (
            <div className="col-lg-4 col-md-12 mb-2">
                <div className="card planned_task p-3">
                    <div className="card-header bg-white border-0 d-flex justify-content-between">
                        <h5 className="card-title">PLANNED</h5>
                        <div className="card-options d-flex flex-column">
                                <span className="card-options-collapse mx-2" data-toggle="card-collapse" onClick={toggleCardCollapse}>
                                    {isCardCollapsed ? (
                                        <FontAwesomeIcon icon={faChevronDown} />
                                    ) : (
                                        <FontAwesomeIcon icon={faChevronUp} />
                                    )}
                                </span>
                            <span className="card-options-remove mx-2" data-toggle="card-remove" onClick={handleRemoveCardBody}>
                                <FontAwesomeIcon icon={faX} />
                            </span>

                            <div style={{ position: 'relative', display: 'inline-block' }} className='mx-3'>
                                <FontAwesomeIcon icon={faEllipsisVertical} onClick={toggleDropdown} style={{ cursor: 'pointer', zIndex:'1' }} />

                                {isDropdownOpen && (
                                    <div className='card p-4 mx-2' style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-100%)', zIndex:'1' }}>
                                        <Dropdown.Item href="#/action-1" className='mb-2'><FontAwesomeIcon icon={faEye}  className='mx-1'/> View Details</Dropdown.Item>
                                        <Dropdown.Item href="#/action-1" className='mb-2'><FontAwesomeIcon icon={faShare} className='mx-1'/> Share</Dropdown.Item>
                                        <Dropdown.Item href="#/action-1" className='mb-2'><FontAwesomeIcon icon={faDownload} className='mx-1'/> Download</Dropdown.Item>
                                        <hr />
                                        <Dropdown.Item href="#/action-1" className='mb-2'><FontAwesomeIcon icon={faFilePdf} className='mx-1'/> Copy to</Dropdown.Item>
                                        <Dropdown.Item href="#/action-1" className='mb-2'><FontAwesomeIcon icon={faEdit} className='mx-1'/> Edit</Dropdown.Item>
                                        <Dropdown.Item href="#/action-1" className='mb-2'><FontAwesomeIcon icon={faTrash} className='mx-1'/> Delete</Dropdown.Item>
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>
                    {!isCardCollapsed && (
                    <div className="card-body">
                        <div className="dd" data-plugin="nestable">
                            <ol className="dd-list">
                            
                            <li className="dd-item" data-id="1">
                                <div className="dd-handle">
                                <h6>Dashbaord</h6>
                                <span className="time text-secondary">
                                    <span className='text-secondary'>Start: 5 Aug</span> to{' '}
                                    <span className='text-secondary'>Complete: 15 Aug</span>
                                </span>
                                <p className='text-secondary'>Lorem Ipsum is simply dummy text...</p>
                                <ul className="list-unstyled team-info"> 
                                    <li>
                                        <img
                                            src={avatar1}
                                            data-toggle="tooltip"
                                            data-placement="top"
                                            title="Avatar"
                                            alt="Avatar"
                                            className='avatar-sml rounded-circle'
                                        />
                                    </li>
                                    
                                </ul>
                                </div>
                            </li>

                            <li className="dd-item mt-3" data-id="2">
                                <div className="dd-handle">
                                <h6>New Project</h6>
                                <span className="time text-secondary">
                                    <span className="text-secondary">Start: 6 Aug</span> to{' '}
                                    <span className="text-secondary">Complete: 28  Aug</span>
                                </span>
                                <p className='text-secondary'>It is a long established fact that a reader will be distracted.</p>       
                                </div>
                            </li>

                            <li className="dd-item" data-id="3">
                                <div className="dd-handle">
                                <h6>Feed Details</h6>
                                <p className='text-secondary'>here are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                                </div>
                            </li>
                            
                            </ol>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        )}



        {isCardBodyVisible2 && (
            <div className="col-lg-4 col-md-12 mb-2">
                <div className="card planned_task p-3">
                    <div className="card-header bg-white border-0 d-flex justify-content-between">
                        <h5 className="card-title">IN PROGRESS</h5>
                        <div className="card-options d-flex">
                                <span className="card-options-collapse mx-1" data-toggle="card-collapse" onClick={toggleCardCollapse2}>
                                    {isCardCollapsed2 ? (
                                        <FontAwesomeIcon icon={faChevronDown} />
                                    ) : (
                                        <FontAwesomeIcon icon={faChevronUp} />
                                    )}
                                </span>
                            <span className="card-options-remove mx-2" data-toggle="card-remove" onClick={handleRemoveCardBody2}>
                                <FontAwesomeIcon icon={faX} />
                            </span>

                            <div style={{ position: 'relative', display: 'inline-block' }} className='mx-3'>
                                <FontAwesomeIcon icon={faEllipsisVertical} onClick={toggleDropdown2} style={{ cursor: 'pointer', zIndex:'1' }} />

                                {isDropdownOpen2 && (
                                    <div className='card p-4 mx-2' style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-100%)', zIndex:'1' }}>
                                        <Dropdown.Item href="#/action-1" className='mb-2'><FontAwesomeIcon icon={faEye}  className='mx-1'/> View Details</Dropdown.Item>
                                        <Dropdown.Item href="#/action-1" className='mb-2'><FontAwesomeIcon icon={faShare} className='mx-1'/> Share</Dropdown.Item>
                                        <Dropdown.Item href="#/action-1" className='mb-2'><FontAwesomeIcon icon={faDownload} className='mx-1'/> Download</Dropdown.Item>
                                        <hr />
                                        <Dropdown.Item href="#/action-1" className='mb-2'><FontAwesomeIcon icon={faFilePdf} className='mx-1'/> Copy to</Dropdown.Item>
                                        <Dropdown.Item href="#/action-1" className='mb-2'><FontAwesomeIcon icon={faEdit} className='mx-1'/> Edit</Dropdown.Item>
                                        <Dropdown.Item href="#/action-1" className='mb-2'><FontAwesomeIcon icon={faTrash} className='mx-1'/> Delete</Dropdown.Item>
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>
                    {!isCardCollapsed2 && (
                    <div className="card-body">
                        <div className="dd" data-plugin="nestable">
                            <ol className="dd-list">
                            
                            <li className="dd-item" data-id="1">
                                <div className="dd-handle">
                                <h6>New Code update</h6>
                                <p className='text-secondary'>Lorem Ipsum is simply dummy text...</p>
                                </div>
                            </li>

                            <li className="dd-item mt-3" data-id="2">
                                <div className="dd-handle">
                                <h6>Meeting</h6>
                                <span className="time text-secondary">
                                    <span className="text-secondary">Start: 6 Aug</span> to{' '}
                                    <span className="text-secondary">Complete: 28  Aug</span>
                                </span>
                                <p className='text-secondary'>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero</p> 
                                    <ul className="list-unstyled team-info"> 
                                        <li>
                                            <img
                                                src={avatar1}
                                                data-toggle="tooltip"
                                                data-placement="top"
                                                title="Avatar"
                                                alt="Avatar"
                                                className='avatar-sml rounded-circle'
                                            />
                                        </li>    
                                    </ul>      
                                </div>
                            </li>

                            <li className="dd-item mt-3" data-id="3">
                                <div className="dd-handle">
                                <h6>New Project</h6>
                                <p className='text-secondary'>It is a long established fact that a reader will be distracted.</p>
                                </div>
                            </li>

                            <li className="dd-item" data-id="3">
                                <div className="dd-handle">
                                <h6>Feed Details</h6>
                                <p className='text-secondary'>here are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                                </div>
                            </li>
                            
                            </ol>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        )}

        {isCardBodyVisible3 && (
            <div className="col-lg-4 col-md-12 mb-2">
                <div className="card planned_task p-3">
                    <div className="card-header bg-white border-0 d-flex justify-content-between">
                        <h5 className="card-title">COMPLETED</h5>
                        <div className="card-options d-flex">
                                <span className="card-options-collapse mx-1" data-toggle="card-collapse" onClick={toggleCardCollapse3}>
                                    {isCardCollapsed3 ? (
                                        <FontAwesomeIcon icon={faChevronDown} />
                                    ) : (
                                        <FontAwesomeIcon icon={faChevronUp} />
                                    )}
                                </span>     
                            <span className="card-options-remove mx-2" data-toggle="card-remove" onClick={handleRemoveCardBody3}>
                                <FontAwesomeIcon icon={faX} />
                            </span>

                            <div style={{ position: 'relative', display: 'inline-block' }} className='mx-3'>
                                <FontAwesomeIcon icon={faEllipsisVertical} onClick={toggleDropdown3} style={{ cursor: 'pointer', zIndex:'1' }} />

                                {isDropdownOpen3 && (
                                    <div className='card p-4 mx-2' style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-100%)', zIndex:'1' }}>
                                        <Dropdown.Item href="#/action-1" className='mb-2'><FontAwesomeIcon icon={faEye}  className='mx-1'/> View Details</Dropdown.Item>
                                        <Dropdown.Item href="#/action-1" className='mb-2'><FontAwesomeIcon icon={faShare} className='mx-1'/> Share</Dropdown.Item>
                                        <Dropdown.Item href="#/action-1" className='mb-2'><FontAwesomeIcon icon={faDownload} className='mx-1'/> Download</Dropdown.Item>
                                        <hr />
                                        <Dropdown.Item href="#/action-1" className='mb-2'><FontAwesomeIcon icon={faFilePdf} className='mx-1'/> Copy to</Dropdown.Item>
                                        <Dropdown.Item href="#/action-1" className='mb-2'><FontAwesomeIcon icon={faEdit} className='mx-1'/> Edit</Dropdown.Item>
                                        <Dropdown.Item href="#/action-1" className='mb-2'><FontAwesomeIcon icon={faTrash} className='mx-1'/> Delete</Dropdown.Item>
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>
                    {!isCardCollapsed3 && (
                    <div className="card-body">
                        <div className="dd" data-plugin="nestable">
                            <ol className="dd-list">
                            
                            <li className="dd-item" data-id="1">
                                <div className="dd-handle">
                                <h6>Job title</h6>                                
                                <p className='text-secondary'>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                                <ul className="list-unstyled team-info"> 
                                    <li>
                                        <img
                                            src={avatar1}
                                            data-toggle="tooltip"
                                            data-placement="top"
                                            title="Avatar"
                                            alt="Avatar"
                                            className='avatar-sml rounded-circle'
                                        />
                                    </li>
                                    
                                </ul>
                                </div>
                            </li>

                            <li className="dd-item mt-3" data-id="2">
                                <div className="dd-handle">
                                <h6>Event Done</h6>
                                <p className='text-secondary'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical</p>       
                                </div>
                            </li>

                            <li className="dd-item" data-id="3">
                                <div className="dd-handle">
                                <h6>New Code Update</h6>
                                <p className='text-secondary'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </li>
                            
                            </ol>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        )}
        </div>
    </div>
  )
}
