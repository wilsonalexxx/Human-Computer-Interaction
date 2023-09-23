function validation(){
    let username = document.getElementById('username').value;
    let pass = document.querySelector('#pass').value;
    let confpass = document.querySelector('#confpass').value;
    let check = document.querySelector('.check');
    let status_user = document.querySelector('#error_user');
    let status_pass = document.querySelector('#error_pass');
    let status_conf = document.querySelector('#error_conf');
    let status_check = document.querySelector('#error_check');


    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(username == ""){
        status_user.innerHTML = "Please enter your email.";
        status_user.style.color = "red";
    }else if(!username.match(mailformat)){
        status_user.innerHTML = "You have entered an invalid email address!";
        status_user.style.color = "red";
    }else{
        status_user.innerHTML = "";
    }

    if(pass == ""){
        status_pass.innerHTML = "Please enter your password.";
        status_pass.style.color = "red";
    }else{
        status_pass.innerHTML = "";
    }

    
    if(!confpass.match(pass)){
        status_conf.innerHTML = "Password is not same.";
        status_conf.style.color = "red";
    }else{
        status_conf.innerHTML = "";
    }

    if(confpass == ""){
        status_conf.innerHTML = "Please enter your password.";
        status_conf.style.color = "red";
    }

    if(!check.checked){
        status_check.innerHTML = "Check the box first.";
        status_check.style.color = "red";
    }else{
        status_check.innerHTML = "";
    }

}