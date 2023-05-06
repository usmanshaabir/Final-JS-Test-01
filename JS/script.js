
function fliedId(){
   Math.random().toString(36).slice(2)
}

handleSubmit = () => {
    event.preventDefault();

    let fullName=document.getElementById('fullName').value;
    let Email=document.getElementById('email').value;
    let Password=document.getElementById('password').value;
    let confirmPassword=document.getElementById('conFirm').value;

    fullName=fullName.trim();
    Email=Email.trim();
    Password=Password.trim();
    confirmPassword=confirmPassword.trim();

    const formObject ={fullName,Email,Password,confirmPassword}
   
    let getData=JSON.parse(localStorage.getItem("users")) || [];


    getData.push(formObject);
    console.log(getData);

    localStorage.setItem("users",JSON.stringify(getData))
emptyFlied()
} 

emptyFlied =()=>{
   document.getElementById('fullName').value="";
    document.getElementById('email').value="";
   document.getElementById('password').value="";
    document.getElementById('conFirm').value="";
}



login = () => {
    event.preventDefault();

    let email=document.getElementById('email').value;
    let password=document.getElementById('password').value;
    

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const authenticatedUser = users.find(user => user.Email === email && user.Password === password);

    if (authenticatedUser) {
        // user is authenticated, proceed to next step
        console.log("User authenticated!");
        alert("User authenticated!");
        location.href = "./home.html";
        return
        // redirect to next page or show next step
    } else {
        // invalid email or password, show error message
        console.log("Invalid email or password");
        alert("Invalid email or password")
        return
        // show error message to user
    }
}
