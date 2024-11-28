import React from 'react';
import ProfileList from './components/ProfileList.jsx';

const App = () => {

  const data = [
    {
      name: 'Ariel Freedman', 
      age: '34', 
      occupation: 'Arduino Club',
      pfp: "https://media.licdn.com/dms/image/v2/C4E03AQFhn5PvWyviYA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1524938707028?e=2147483647&v=beta&t=iA9aDtA-ZIYo0c_5Gv_-AGIK0rvS4-rX2z6j5u_XTc8"
    },

    {
      name: 'Bill Gates', 
      age: '70', 
      occupation: 'Microsoft',
      pfp: "https://www.rankred.com/wp-content/uploads/2019/07/Bill-Gates.jpg"
    },

    {
      name: 'Brian Kernighan', 
      age: '82', 
      occupation: 'Bell Labs',
      pfp: "https://www.rankred.com/wp-content/uploads/2019/07/Brian-Kernighan.jpg"
    }, 
  
    {
      name: 'Ken Thompson', 
      age: '81', 
      occupation: 'Google',
      pfp: "https://www.rankred.com/wp-content/uploads/2019/07/Ken-Thompson.jpg"
    }
  ];

  return (
    <div>
      <h1>Profiles</h1>
      <ProfileList data={data} />
    </div>
  )
}

export default App