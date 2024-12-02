import React from 'react';
import './ProfileList.css';

const ProfileList = ({data}) => {
  return (
    <div className='profiles-container'>
        {data.map((value, index) => {
          return (
            <div className='profile-card' key={index}>
              <h2>{value.name}</h2>
              <p className='age'>{value.age}</p>
              <p>{value.occupation}</p>
              <img className='pfp' src={value.pfp} />
            </div>
          )
        })}
    </div>
  )
}

export default ProfileList