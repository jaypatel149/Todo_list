console.log("Hey i am jaypatel");

let uName = localStorage.getItem("Name")?localStorage.getItem("Name"):"";
if(uName != ""){
  setTimeout(function(){
    window.location.href = "../todopage/todo.html";
  },2000);

};


function pageLogin() {
    event.preventDefault()
    
    let userEmail = document.getElementById("email").value;
    let userPass = document.getElementById("pwd").value;


    let usersRegard = new Array();
    usersRegard = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : []
    if (usersRegard.some((e) => {
        return (e.username == userEmail || e.email == userEmail) && e.password == userPass;
    })) {
        let currentUser = usersRegard.filter((v)=>{
          return (v.username == userEmail || v.email == userEmail) && v.password == userPass
        })[0];
        localStorage.setItem("Name", currentUser.username)
        localStorage.setItem("Email", currentUser.email)
        alert(`You Have Login Successfully`);
        localStorage.setItem(
          "user",
          true)
        setTimeout(function () {
          window.location.href = "../todopage/todo.html"
      }, 2000);
    }
    else if (usersRegard.some((e) => {
        return e.email == userEmail && e.password != userPass;
    })) {
        alert("Password is Incorrect ");
    }
    else if (usersRegard.some((e) => {
        return e.email != userEmail;
    })) {
        alert("Email is not valid");
    }
    else {
        alert('Account is not exist,Register First');
    }

  if (userEmail == "") {
    document.getElementById("email").innerHTML = "*please fill emailName .";
    return true;
  }
  if (userEmail.indexOf("@") <= 0) {
    document.getElementById("email").innerHTML = "*@  Invalid Position.";
    return false;
  }
  if (
    userEmail.charAt(userEmail.length - 4) != "." &&
    userEmail.charAt(userEmail.length - 3) != "."
  ) {
    
    document.getElementById("userpass").innerHTML = "*.  Invalid Position.";
    return false;
  }
  if (userPass == "") {
    document.getElementById("userpass").innerHTML = "*please fill userpassword.";
    
    return false;
  }
  if (userPass.length <= 5 || userPass.length > 20) {
    document.getElementById("userpass").innerHTML ="*userpassword lengths  must be 2 and 20 .";
    return false;
  }
  
  

}


