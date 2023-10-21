function pass(){
    document.getElementById("password-from").addEventListener("submit",function(event){
        event.preventDefault();
    })
    var retypepassword=document.getElementById("retype-password").value;
    var newpassword=document.getElementById("new-password").value;
    if(newpassword==retypepassword)
    {
        window.location.href="passmesage.html";
    }
    else{
        alert("wrong password");
    }
}