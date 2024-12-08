const myform = document.getElementById("myform");
const data = JSON.parse(localStorage.getItem("accounts")) || [];

myform.addEventListener("submit", (e) => {
  if (data.some(value => value.email === myform.email.value)) {
    e.preventDefault();
    alert("Email you entered already exists");
    console.log(data);
  } else {
    e.preventDefault();
    const email = myform.email.value;
    const pass = myform.pass.value;
    data.push({email, pass});
    localStorage.setItem("accounts", JSON.stringify(data));
    console.log(data);
  }
})