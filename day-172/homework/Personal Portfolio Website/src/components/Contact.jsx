
const Contact = () => {

   const handleSubmit = e => {
    e.preventDefault();
    alert("Succesfully sent info")
   }

  return (
    <form onSubmit={handleSubmit}>
        <h2>Conatct Me</h2>
  
        <input type="text" placeholder="Enter Name" required />
        <input type="email" placeholder="Enter Email" required />
        <input type="password" placeholder="Enter Passsword" required />
        <button type='submit'>Submit</button>
    </form>
  )
}

export default Contact
