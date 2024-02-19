import React from 'react'
import Header from '../../layouts/Header'
import Footer from '../../layouts/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faFolder, faFilePdf,faFileWord } from '@fortawesome/free-solid-svg-icons';
import avatar1 from '../../assets/images/avatar1.jpg'
import avatar2 from '../../assets/images/avatar2.jpg'
import avatar3 from '../../assets/images/avatar3.jpg'
import Sidebar from '../../layouts/Sidebar';

export default function FileManager() {
  const fileData = [
    {
      type: 'folder',
      name: 'Work',
      shareWith: [avatar1, avatar2, avatar3],
      owner: 'Me',
      lastUpdate: 'Oct 7, 2018',
      fileSize: '-'
    },
    {
      type: 'folder',
      name: 'Family',
      shareWith: [],
      owner: 'Me',
      lastUpdate: 'Oct 17, 2018',
      fileSize: '-'
    },

    {
      type: 'folder',
      name: 'Holidays',
      shareWith: [],
      owner: 'John',
      lastUpdate: 'Oct 17, 2018',
      fileSize: '50MB'
    },

    {
      type: 'folder',
      name: 'Mobile Work',
      shareWith: [],
      owner: 'Me',
      lastUpdate: 'Oct 17, 2018',
      fileSize: '1GB'
    },

    {
      type: 'folder',
      name: 'Photoshop Data',
      shareWith: [avatar1, avatar2],
      owner: 'Andrew',
      lastUpdate: 'Oct 17, 2018',
      fileSize: '-'
    },

    {
      type: 'folder',
      name: 'Holidays',
      shareWith: [avatar1, avatar2, avatar3,],
      owner: 'Me',
      lastUpdate: 'Oct 17, 2018',
      fileSize: '-'
    },

    {
      type: 'word',
      name: 'new timesheet.xlsx',
      shareWith: [],
      owner: 'Me',
      lastUpdate: 'Oct 17, 2018',
      fileSize: '-'
    },


    {
      type: 'word',
      name: 'new project.doc',
      shareWith: [],
      owner: 'Me',
      lastUpdate: 'Oct 17, 2018',
      fileSize: '152kb'
    },

    {
      type: 'pdf',
      name: 'report.pdf',
      shareWith: [],
      owner: 'Me',
      lastUpdate: 'Oct 17, 2018',
      fileSize: '814kb'
    },

    {
      type: 'pdf',
      name: 'report-2018.pdf',
      shareWith: [],
      owner: 'Me',
      lastUpdate: 'Oct 17, 2018',
      fileSize: '514kb'
    },
    
  ];
  return (
   <>
   <div className='main d-flex'>
    <Sidebar/>
    <div className='main-sidebar-pages px-3'>
        <Header/>

        <div className="card mt-3 mx-3">
          <div className="card-header bg-white d-flex justify-content-between border-0 mx-3 px-2 mt-3">
            <h5 className="card-title">Recently Accessed Files</h5>
            <div className="card-options">              
              <FontAwesomeIcon icon={faPlus} data-toggle="tooltip" title="Upload New"/>            
            </div>
          </div>
          <div className="card-body">
            <div className=" d-flex flex-wrap justify-content-start px-3 mb-2">
              <div className='file-folder col-lg-2 col-md-3 col-sm-4 mb-2'>
                <a href="/#" className='d-flex'>
                  <div className="icon mx-2 mt-2">
                  <FontAwesomeIcon icon={faFolder} className='file-icon'/>
                    <i className="fa fa-folder text-success"></i>
                  </div>
                  <div className="file-name mt-2 text-secondary">
                    <p className="mb-0 text-muted">Family</p>
                    <small>3 File, 1.2GB</small>
                  </div>
                </a>
              </div>
              
              <div className='file-folder col-lg-2 col-md-3 col-sm-4 mb-2'>
                <a href="/#" className='d-flex'>
                  <div className="icon mx-2 mt-2">
                  <FontAwesomeIcon icon={faFileWord}  className='file-icon'/>
                    <i className="fa fa-file-word-o text-primary"></i>
                  </div>
                  <div className="file-name mt-2 text-secondary">
                    <p className="mb-0 text-muted">Report2017.doc</p>
                    <small>Size: 68KB</small>
                  </div>
                </a>
              </div>

              <div className='file-folder col-lg-2 col-md-3 col-sm-4 mb-2'>
                <a href="/#" className='d-flex'>
                  <div className="icon mx-2 mt-2">
                  <FontAwesomeIcon icon={faFilePdf}  className='file-icon'/>
                    <i className="fa fa-file-pdf-o text-danger"></i>
                  </div>
                  <div className="file-name mt-2 text-secondary">
                    <p className="mb-0 text-muted">Report2017.pdf</p>
                    <small>Size: 68KB</small>
                  </div>
                </a>
              </div>
              
            </div>
          </div>
        </div>


        <div className="card bg-none b-none mt-3 mx-3">
          <div className="card-body pt-0">
            <div className="table-responsive">
              <table className="table table-hover table-vcenter  text-nowrap mb-0">
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Share With</th>
                    <th>Owner</th>
                    <th>Last Update</th>
                    <th>File Size</th>
                  </tr>
                </thead>
                <tbody>
                  {fileData.map((item, index) => (
                    <tr key={index}>
                      <td>
                      <FontAwesomeIcon
                        icon={
                          item.type === 'folder'
                            ? faFolder
                            : item.type === 'word'
                            ? faFileWord
                            : item.type === 'pdf'
                            ? faFilePdf
                            : null 
                        }
                      />                 
                      </td>
                      <td>
                        <span className={item.isFolder ? 'folder-name' : ''}>{item.name}</span>
                      </td>
                      <td>
                        {item.shareWith && (
                          <div className="avatar-list avatar-list-stacked rounded-circle">
                            {item.shareWith.map((avatar, avatarIndex) => (
                              <img
                                key={avatarIndex}
                                className="avatar-file avatar-sml rounded-circle"
                                src={avatar}
                                alt={`Avatar ${avatarIndex + 1}`}
                              />
                            ))}
                          </div>
                        )}
                      </td>
                      <td className="width100">
                        <span>{item.owner}</span>
                      </td>
                      <td className="width100">
                        <span>{item.lastUpdate}</span>
                      </td>
                      <td className="width100 text-center">
                        <span className="size">{item.fileSize || '-'}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>





        <Footer/>
    </div>
   </div>
   </>
  )
}
