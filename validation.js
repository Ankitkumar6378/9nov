function valid() {
    try{
        verify_Null()
        validation_Name()
        validation_Pass()
    }
    catch (error)
    {
        document.getElementById('console').innerHTML = 
        "<h3 style='color:red'> Warning: </h3>" + error.message;
    }

}


function verify_Null(){

    var isValid = true;
    if(!document.getElementById('username').value.trim().length){
         isValid = false;
         throw new Error("Please fill the username!!!");
    }
    else if(!document.getElementById('password').value.trim().length){
         isValid = false;
         throw new Error("Please fill the password!!!");
    }
   return isValid;
}


function validation_Name()
{
    var user = document.getElementById('username').value.trim();

    var isValid = true;
    var illegalChars = /\W/; // allow letters, numbers, and underscores

    if ((user.length < 5) || (user.length > 15)) {
        isValid = false;
        throw new Error("The username is the wrong length.\n");

    } else if (illegalChars.test(user)) {
        isValid = false;
        throw new Error("illegal characters not allowed in username.\n");

    }
    return isValid;
}



//    <-------------PASSWORD VALIDATION---------------------->


 function validation_Pass(){
    var isValid = true;
    var pass = document.getElementById("password").value.trim();

     if ((pass.length < 5) || (pass.length > 25)) {
        isValid = false;
        throw new Error("The password is the wrong length.\n");

    }

    else if (!/[A-Z]/.test(pass)) {
        isValid = false;
        throw new Error( "password must contain one capital letter\n");

    }

    else if (!/[a-z]/.test(pass)) {
        isValid = false;
        throw new Error( "password must contain one small letter\n");

    }

    else if (!/[0-9]/.test(pass)) {
        isValid = false;
        throw new Error("password must contain one numeric\n");

    }

    else if (!/\W/.test(pass)) {
        isValid = false;
        throw new Error("password must contain one special character\n");

    }
    // document.getElementById('console').innerHTML = "<h3 style='color:green'> User Name is: </h3>"+ user ;
    return isValid;

}