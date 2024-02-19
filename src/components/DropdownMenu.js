import React, {useState} from 'react'
import Dropdown from 'react-bootstrap/Dropdown';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faTrash, faEdit, faFilePdf, faFolder,faEye, faShare, faDownload } from '@fortawesome/free-solid-svg-icons';



export default function DropdownMenu() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
  return (
    <>
        <div style={{ position: 'relative', display: 'inline-block' }}>
        <FontAwesomeIcon icon={faEllipsisVertical} onClick={toggleDropdown} style={{ cursor: 'pointer', zIndex:'1' }} />

        {isDropdownOpen && (
            <div className='card p-4 mx-2' style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-100%)', zIndex:'1' }}>
                <Dropdown.Item href="#/action-1" className='mb-2'><FontAwesomeIcon icon={faEye}  className='mx-1'/> View Details</Dropdown.Item>
                <Dropdown.Item href="#/action-1" className='mb-2'><FontAwesomeIcon icon={faShare} className='mx-1'/> Share</Dropdown.Item>
                <Dropdown.Item href="#/action-1" className='mb-2'><FontAwesomeIcon icon={faDownload} className='mx-1'/> Download</Dropdown.Item>
                <hr />
                <Dropdown.Item href="#/action-1" className='mb-2'><FontAwesomeIcon icon={faFilePdf} className='mx-1'/> Copy to</Dropdown.Item>
                <Dropdown.Item href="#/action-1" className='mb-2'><FontAwesomeIcon icon={faFolder} className='mx-1'/> Move to</Dropdown.Item>
                <Dropdown.Item href="#/action-1" className='mb-2'><FontAwesomeIcon icon={faEdit} className='mx-1'/> Edit</Dropdown.Item>
                <Dropdown.Item href="#/action-1" className='mb-2'><FontAwesomeIcon icon={faTrash} className='mx-1'/> Delete</Dropdown.Item>
            </div>
        )}
        </div>
    </>
  )
}
