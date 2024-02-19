import React, {useState} from 'react'
import { Form } from 'react-bootstrap';
import avatar2 from '../../../assets/images/avatar2.jpg'
import avatar1 from '../../../assets/images/avatar1.jpg'
import avatar3 from '../../../assets/images/avatar3.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown, faEllipsisVertical, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import Dropdown from 'react-bootstrap/Dropdown';




export default function OnGoing() {
    const projectData = [
        {
          title: "New Admin Design",
          tag: "Web Design",
          description: "Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis temporibus!",
          created: "09 Jun 2019 11:32AM",
          creator: "Nathan Guerrero",
          question: 23,
          comments: 32,
          bug: 5,
          team: [avatar1, avatar2, avatar1, avatar1, avatar3],
          progress: 15,
          progressColor: "bg-red"
        },
        {
          title: "Job Portal Web App",
          tag: "Angular",
          description: "Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis temporibus!",
          created: "09 Jun 2019 11:32AM",
          creator: "Nathan Guerrero",
          question: 55,
          comments: 43,
          bug: 5,
          team: [avatar1, avatar2, avatar1, avatar1, avatar3],
          progress: 75,
          progressColor: "bg-green"
        },
    
        {
            title: "App Design and Development",           
            tag: "Android",
            description: "Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis temporibus!",
            created: "09 Jun 2019 11:32AM",
            creator: "Nathan Guerrero",
            question: 55,
            comments: 43,
            bug: 5,
            team: [avatar1, avatar2, avatar1, avatar1, avatar3],
            progress: 75,
            progressColor: "bg-green"
          },
    
          {
            title: "One  Page Landing",
            tag: "Wordpress",
            description: "Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis temporibus!",
            created: "09 Jun 2019 11:32AM",
            creator: "Nathan Guerrero",
            question: 55,
            comments: 43,
            bug: 5,
            team: [avatar1, avatar2, avatar1, avatar1, avatar3],
            progress: 75,
            progressColor: "bg-green"
          },
    
          {
            title: "Job Portal Web App",
            tag: "iOS App",
            description: "Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis temporibus!",
            created: "09 Jun 2019 11:32AM",
            creator: "Nathan Guerrero",
            question: 55,
            comments: 43,
            bug: 5,
            team: [avatar1, avatar2, avatar1, avatar1, avatar3],
            progress: 85,
            progressColor: "bg-green"
          },
      ];
    
      const getTechColor = (tag) => {
        switch (tag.toLowerCase()) {
          case 'web design':
            return '#3C4087';
          case 'angular':
            return '#DF84A4';
          case 'android':
            return '#B5E850';

          case 'wordpress':
            return ' #72c4f7 ';

          case 'ios app':
              return ' #383a3b ';

          default:
            return '#ffffff';
        }
      };

      

      const [isCardCollapsed, setCardCollapsed] = useState(Array(projectData.length).fill(false));

      // Function to toggle the collapse state of a card at a given index
      const toggleCardCollapse = (index) => {
        setCardCollapsed(prevState => {
          const newState = [...prevState];
          newState[index] = !newState[index];
          return newState;
        });
      };


      const [isOpenDropdown, setIsOpenDropdown] = useState(Array(projectData.length).fill(false));

      const toggleDropdown = (index) => {
          const newDropdownState = [...isOpenDropdown];
          newDropdownState[index] = !newDropdownState[index];
          setIsOpenDropdown(newDropdownState);
      };

  return (
    <div className='pagewidth'> 
        <div className="row mt-3 mx-1">
        {projectData.map((project, index) => (
          <div key={index} className="col-lg-3 col-md-4 col-sm-12">
            <div className="card mb-3">
              <div className="card-header d-flex justify-content-between bg-white border-0 mt-3">
                <h6 className="card-title">{project.title}</h6>
                <div className="card-options d-flex">
                    <Form.Check
                        type="switch"
                        id="custom-switch"         
                    />
                  <span
                    className="card-options-collapse mx-2"
                    onClick={() => toggleCardCollapse(index)}
                    style={{ cursor: 'pointer' }}
                  >
                    {isCardCollapsed[index] ? (
                      <FontAwesomeIcon icon={faChevronDown} />
                    ) : (
                      <FontAwesomeIcon icon={faChevronUp} />
                    )}
                  </span>

                  <div style={{ position: 'relative', display: 'inline-block' }}>
                    <FontAwesomeIcon icon={faEllipsisVertical} onClick={() => toggleDropdown(index)} style={{ cursor: 'pointer', zIndex: '1' }} />
                    {isOpenDropdown[index] && (
                        <div className='p-4 mx-2 d-flex' style={{ position: 'absolute', top: '100%', left: '100%', transform: 'translateX(-100%)', zIndex: '1' }}>
                            <Dropdown.Item href="" className='mb-2 mx-2'><FontAwesomeIcon icon={faEdit} className='mx-1' /></Dropdown.Item>
                            <Dropdown.Item href="" className='mb-2'><FontAwesomeIcon icon={faTrash} className='mx-1' /></Dropdown.Item>
                        </div>
                    )}
                  </div>

                </div>
              </div>

              {!isCardCollapsed[index] && (
                <>
                <div className="card-body">

                <small> <span className='px-2' style={{
                          backgroundColor: getTechColor(project.tag),
                          padding: '3px',
                          borderRadius: '5px',
                          color: 'white',
                        }}>{project.tag}</span>
                </small>

                <p className='mt-4'>{project.description}</p>
                <div className="row">


                  {/* ... (other project details) */}

                  <div className=""><strong>Created:</strong>
                  <p className='text-secondary'>{project.created}</p>
                  </div>
                  <div className=""><strong>Creator:</strong>
                  <p className='text-secondary'>{project.creator}</p>
                  </div>
                  {/* <div className=""><strong>Questions:</strong><h5>{project.question}</h5></div>
                  <div className=""><strong>Comments:</strong><h5>{project.comments}</h5></div>
                  <div className=""><strong>Bug:</strong><h5>{project.bug}</h5></div> */}


                  <div className="py-1"><strong>Team:</strong></div>
                  <div className="col-7 py-1">

                  {/* <div className="avatar-list avatar-list-stacked avatar-marg">
                    {project.team.map((avatar, avatarIndex) => (
                      <img
                        key={avatarIndex}
                        className="avatar avatar-sm"
                        src={avatar}
                        style={{ zIndex: project.team.length - avatarIndex }}
                        data-toggle="tooltip"
                        data-original-title="Avatar Name"
                        alt={`Avatar ${avatarIndex}`}
                      />
                    ))}
                    <span className="avatar avatar-sm">{`+${project.team.length}`}</span>
                  </div> */}


                    <div class="avatar-container d-flex">
                        {project.team.slice(0, 3).map((avatar, avatarIndex) => (
                            <img
                            key={avatarIndex}
                            class="img-thumbnail rounded-circle avatar-sml avatar-img-stack"
                            src={avatar}
                            alt={`Team member ${avatarIndex + 1}`}
                            />
                        ))}
                        {project.team.length > 3 && (
                          <span class="remaining-count">{project.team.length - 3} more</span>
                        )}
                    </div>
                  </div>
                </div>
                </div>

                <div className="card-footer bg-white mb-3">
                <div className="d-flex justify-content-between">
                  <div className=""><strong>{project.progress}%</strong></div>
                  <div className=""><small className="text-muted">Progress</small></div>
                </div>
                <div className="progress progress-xs">
                  <div className={`progress-bar ${project.progressColor}`} role="progressbar" aria-valuenow={project.progress} aria-valuemin="0" aria-valuemax="100" style={{ width: `${project.progress}%` }}></div>
                </div>
                </div>
                </>
              
              )}
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}
