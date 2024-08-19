function validForm(){

var fname = document.signin_form.fname
var lname = document.signin_form.lname
var email = document.signin_form.email
var phn = document.signin_form.phn


if(fname.value===""){
    fname.nextElementSibling.style.display = "block";
    fname.style.border ="1px solid #f00";
    return false
}
else{
     fname.nextElementSibling.style.display="none";
    fname.style.border="1px solid transparent"
}

if(lname.value===""){
    lname.nextElementSibling.style.display = "block";
    lname.style.border ="1px solid #f00";
    return false
}
else{
     lname.nextElementSibling.style.display="none";
    lname.style.border="1px solid transparent"
}

if(!email.value.match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)||email.value===""){
    email.nextElementSibling.style.display = "block";
    email.style.border ="1px solid #f00";
    return false
}
else{
     email.nextElementSibling.style.display="none";
     email.style.border="1px solid transparent"
}

if(!phn.value.match(/^\(?([0-9]{1})\)?([0-9]{9})$/) ||phn.value===""){
    phn.nextElementSibling.style.display = "block";
    phn.style.border ="1px solid #f00";
    return false
}
else{
     phn.nextElementSibling.style.display="none";
     phn.style.border="1px solid transparent"
}
alert("Thank you for signing in! Your login was successful.")
}
