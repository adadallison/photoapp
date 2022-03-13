function validateFormUP(){

    var username = document.forms["myformUP"]["Username"].value;
    var email = document.forms["myformUP"]["Email"].value;
    var password = document.forms["myformUP"]["Password"].value;
    var cpassword = document.forms["myformUP"]["cPassword"].value;
    var chars = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{6,16}$/;



    if (username.length < 3) {
        alert("Please enter valid username");
        return false;
    } else {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        if (password.length >= 8) {
            if (password !== cpassword) {
                alert("Passwords should match");
                return false;
            } else {
                if (!chars.test(password)) {
                    alert("Password should contain at least one number, one special character, an uppercase letter, and lowercase letter");
                    return false;
                }
            }
        } else {
            alert("Password must be at least 8 characters, Please Try Again");
            return false;
        }
    } else {
            alert("You have entered an invalid email address!");
            return false;
        }
}


    var myObj = '{"uname" : '+ username +', "pwd" : '+ password +'}';
    var myJSON=JSON.stringify(myObj);

    console.log(myJSON);
    // sleep(10000);        //Sleep method is going to make sure that output on console log will be there on it for a while

}
