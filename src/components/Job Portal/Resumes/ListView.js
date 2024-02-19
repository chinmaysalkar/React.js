import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar, faStar as regularStar } from '@fortawesome/free-solid-svg-icons';
import Dropdown from '../../Job Portal/Resumes/Dropdown'

export default function ListView() {
  const data = [
    { name: 'Michelle Green', designation: 'Web Developer', address: '123 6th St. Melbourne, FL 32904', rate: '$34 per hour', experience: '2+ Year', review: [1, 1, 1, 0, 0] },
    { name: 'Jason Porter', designation: 'UI UX Designer', address: '123 6th St. Melbourne, FL 32904', rate: '$61 per hour', experience: '5+ Year', review: [1, 1, 1, 1, 0] },
    { name: 'David Wallace', designation: 'Java Developer', address: '123 6th St. Melbourne, FL 32904', rate: '$76 per hour', experience: '7+ Year', review: [1, 1, 1, 1, 1] },
    { name: 'Another Developer', designation: 'Frontend Developer', address: '456 7th St. Orlando, FL 32801', rate: '$50 per hour', experience: '3+ Year', review: [1, 1, 0, 0, 0] },
    { name: 'John Doe', designation: 'Backend Developer', address: '789 8th St. Miami, FL 33101', rate: '$45 per hour', experience: '4+ Year', review: [1, 1, 1, 1, 0] },
    
  ];

  const Rating = ({ review }) => {
    const maxRating = 5;
    const rating = review.reduce((acc, curr) => acc + curr, 0);

    return (
      <div className="rating">
        {[...Array(maxRating)].map((_, index) => (
          <FontAwesomeIcon
            key={index}
            icon={index < rating ? solidStar : regularStar}
            className="text-warning"
          />
        ))}
      </div>
    );
  };

  return (
    <>
    <div className='section-body mt-3'>
      <div>
        <div className="table-responsive">
        <table className="table table-vcenter table_custom spacing5 border-style mb-0">
          <thead>
            <tr>
              <th className="w40 ">#</th>
              <th>Name</th>
              <th>Designation</th>  
              <th>Address</th>
              <th>Rate</th>
              <th>Experience</th>
              <th>Review</th>
              <th className="w40"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{row.name}</td>
                <td>{row.designation}</td>
                <td>{row.address}</td>
                <td>{row.rate}</td>
                <td>{row.experience}</td>
                <td><Rating review={row.review} /></td>               
                <td>
                  <Dropdown/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
    </>
  )
}
