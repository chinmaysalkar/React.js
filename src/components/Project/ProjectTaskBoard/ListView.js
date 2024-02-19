import React from 'react'
import avatar1 from '../../../assets/images/avatar1.jpg'
// import avatar2 from '../../../assets/images/avatar2.jpg'
// import avatar3 from '../../../assets/images/avatar3.jpg'




export default function ListView() {

    

    const tasks = [
        {
          id: '01',
          task: 'New code Update on github',
          team: [avatar1, avatar1, avatar1, avatar1,avatar1],
          start: '3 Jun 2019',
          end: '15 Jun 2019',
          status: 'Planned',
          progress: 0,
        },

        {
            id: '02',
            task: 'New code Update on github',
            team: [avatar1],
            start: '3 Jun 2019',
            end: '15 Jun 2019',
            status: 'Completed',
            progress: 100,
          },

          {
            id: '03',
            task: 'New code Update on github',
            team: [avatar1],
            start: '3 Jun 2019',
            end: '15 Jun 2019',
            status: 'In progress',
            progress: 35,
          },
        
      ];



      const getStatusColor = (status) => {
        switch (status.toLowerCase()) {
          case 'planned':
            return '#18BFE0';
          case 'completed':
            return '#B5E850';
          case 'in progress':
            return '#DF84A4';
            default:
              return '#ffffff';
        }
      };
  return (
    <>
    <div className='pagewidth'>
        
        <div className="table-responsive mx-3 mt-3">
            <table className="table table-hover table-vcenter mb-0 table_custom spacing8 text-nowrap ">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Task</th>
                    <th>Team</th>
                    <th>Duration</th>
                    <th>Action</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {tasks.map((task, index) => (
                    <tr key={task.id}>
                    <td><div className='mt-2'>{index + 1}</div></td>
                    <td>
                        <h6 className="mb-0">{task.task}</h6>
                        <span>It is a long established fact that a reader will be distracted...</span>
                    </td>
                    <td class="avatar-container d-flex">
                        {task.team.slice(0, 1).map((avatar, avatarIndex) => (
                            <img
                            key={avatarIndex}
                            class="img-thumbnail rounded-circle avatar-sml avatar-img-stack"
                            src={avatar}
                            alt={`Team member ${avatarIndex + 1}`}
                            />
                        ))}
                        {task.team.length > 1 && (
                            <span class="remaining-count">{task.team.length - 3} more</span>
                        )}
                    </td>
                    <td>
                        <div className="text-black">Start: {task.start}</div>
                        <div className="text-danger">End: {task.end}</div>
                    </td>
                    <td>
                        <span style={{
                          backgroundColor: getStatusColor(task.status),
                          padding: '3px',
                          borderRadius: '5px',
                          color: 'white',
                        }}>
                        {task.status}
                        </span>
                    </td>
                    <td>
                        <div className="clearfix">
                        <div className="float-start">
                            <strong>{task.progress}%</strong>
                        </div>
                        <div className="float-end">
                            <small className="text-muted">Progress</small>
                        </div>
                        </div>
                        <div className="progress progress-xs">
                        <div
                            className='progress-bar'
                            role="progressbar"
                            aria-valuenow="42"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: `${task.progress}%` }}
                        ></div>
                        </div>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
        
    </div>


      
    </>
  )
}
