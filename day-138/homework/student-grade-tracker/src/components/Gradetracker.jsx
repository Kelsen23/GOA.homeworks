import React, { useState } from 'react'

const GradeTracker = () => {

  const [studentData, setStudentData] = useState([]);
  const [studentName, setStudentName] = useState('');
  const [grade, setGrade] = useState('2');
  const [avgGrade, setAvgGrade] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    setStudentData(prevData => {
      const newStudentData = [...prevData, {name: studentName, grade: grade}];
      const gradeSum = newStudentData.reduce((accumulator, student) => accumulator + Number(student.grade), 0)
      setAvgGrade(Math.round(gradeSum / newStudentData.length));

      return newStudentData;
    });
    setStudentName('');
  }

  const deleteStudent = (index) => {
    setStudentData((prevData) => {
      const newStudentData = prevData.filter((_, i) => i !== index);
      
      if (newStudentData.length > 0) {
        const gradeSum = newStudentData.reduce((accumulator, student) => accumulator + Number(student.grade), 0);
        setAvgGrade(Math.round(gradeSum / newStudentData.length));
      } else {
        setAvgGrade(0);
      }

      return newStudentData;
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Student' Name" value={studentName} onChange={(e) => setStudentName(e.target.value)} required />
        <select onChange={(e) => setGrade(e.target.value)} required>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <button type='submit'>Submit</button>
    </form>

      {studentData.map((value, index) => {
        return (
          <div key={index}>
            <h2>{value.name}</h2>
            <p>Grade: {value.grade}</p>
            <button onClick={() => deleteStudent(index)}>Delete</button>
          </div>
        )
      })}

      <div>
        Average Grade: {avgGrade}
      </div>
    </div>
    
  )
}

export default GradeTracker