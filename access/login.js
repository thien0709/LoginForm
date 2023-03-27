const change = document.querySelectorAll("#box h6");
const change1 = document.querySelector(".change");
for(let i =0;i<change.length;i++){
    change[i].onclick = function(){
        change1.classList.toggle("active");
    }
}
// Save value in storage
 //Get element login
 const nameLogin =document.querySelector("#login .name");
 const passLogin = document.querySelector("#login .pass");
 const loginBtn = document.querySelector("#login button");
 //Get element register
 const emailRegister = document.querySelector("#register .email");
 const userRegister = document.querySelector("#register .username");
 const passRegister = document.querySelector("#register .pass");
 const registerBtn = document.querySelector("#register button");
 //Save value in storage
 loginBtn.addEventListener("click", function(){
    if(nameLogin.value === '' || passLogin.value === ''){
        window.focus();
        passLogin.focus();
    }
    localStorage.setItem('username', nameLogin.value.trim());
    localStorage.setItem('password', passLogin.value.trim());
 });
 registerBtn.addEventListener("click",function(){
    localStorage.setItem('userRegister', userRegister.value.trim());
    localStorage.setItem('passRegister' , passRegister.value.trim());
    localStorage.setItem('emailRegister',emailRegister.value.trim());
 })
 