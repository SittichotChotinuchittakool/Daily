$(document).ready(function(){
    const correctSign = "&#9989;";
    const incorrectSign = "&#10060;";
    console.log("Register is ready.");
    $("#usernameID").on("keyup", function(){
        val1 = $("#usernameID");
        checkUsername(val1.val());
    });
    $("#passwordID").on("change", function(){
        if(checkPassword($(this).val())){
            setBorderCorrect($(this));
            $(this).prop('title', "");
        }else{
            setBorderIncorrect($(this));
            $(this).prop('title', "Please, Enter password length 6 - 12.")
        }
        $("#confirmPasswordID").val("");
    });
    $("#emailID").on("keyup", function(){
        checkEmail();
    });
    $("#confirmPasswordID").on('change', function(){
        if(checkConfirmPassword($("#passwordID").val(), $("#confirmPasswordID").val())){
            setBorderCorrect($(this));
        }else{
            setBorderIncorrect($(this));
        }
    });
    function checkUsername(val1){
        if((val1.length >= 6 && val1.length <= 12) && (val1 == onlyAlphabetAndNumeric(val1)) ){
            $.ajax({
                method: "POST",
                url: "../control.php?req=checkUsername",
                data: {
                    username: val1
                },
                success: function(data){
                    // console.log(data.status);
                    checkUsernameID = $("#checkUsernameID");
                    if(data.status === "pass"){
                        checkUsernameID.html(correctSign);
                        setBorderCorrect($("#usernameID"));
                        $("#usernameID").prop('title', "");
                    }else if(data.status === "fail"){
                        checkUsernameID.html(incorrectSign);
                        setBorderIncorrect($("#usernameID"));
                        $("#usernameID").prop('title', "This username is already.");
                    }
                }
            });
        }else{
            $("#checkUsernameID").html("");
            setBorderToDefault($("#usernameID"));
            $("#usernameID").prop('title', "");
        }
    }
    function setBorderCorrect(val1){
        val1.css('border', '2px solid green');
    }
    function setBorderIncorrect(val1){
        val1.css('border', '2px solid red');
    }
    function setBorderToDefault(val1){
        val1.css('border', '');
    }
    function onlyAlphabetAndNumeric(text){
        return text.match(/^[a-zA-Z0-9]+$/);
    }
    function checkPassword(val1){
        if(val1.length >= 6 && val1.length <= 12){
            return true;
        }else{
            return false;
        }
    }
    function checkConfirmPassword(val1, val2){
        if(val1 === val2){
            return true;
        }else{
            return false;
        }
    }
    $("#regissssterID").on("click", function(){
        console.log("dddxd");
        $.post("../php/register.php", {
            username : $("#usernameID").val(),
            password : $("#passwordID").val(),
            email : $("#emailID").val(),
            fname : $("#firstNameID").val(),
            lname : $("#lastNameID").val()
        }).done(function(data){
            console.log("Data : " + data);
        });
//        return false;
    });
    $("#formRegisterID").submit(function(event){
        console.log("dddd");
        event.preventDefault();
        if($("#passwordID").val() === $("#confirmPasswordID").val()){
            $.ajax({
                url: "../control.php?req=register",
                method: "POST",
                data: {
                    username : $("#usernameID").val(),
                    password : $("#passwordID").val(),
                    email : $("#emailID").val(),
                    fname : $("#firstNameID").val(),
                    lname : $("#lastNameID").val()
                },
                success: function(data){
                    if(data['status'] === "pass"){
                        window.location.href = "registerSuccess.html";
                    }else if(data['status'] === "fail"){
                        alert("Please check your input, Register Fail.");
                    }else{
                        alert(data);
                    }
                }
            });
        }else{
            alert("Password and Confirm Password must be same.");
        }
    });
    function checkBeforeRegister(){

    }
    function checkField(){
        username = $("#usernameID").val();
        password = $("#passwordID").val();
        confirmPassword = $("#confirmPasswordID").val();
        email = $("#emailID").val();
        fname = $("#firstNameID").val();
        lname = $("#lastNameID").val();
        if(username.length > 0 && password.length > 0 && 
          confirmPassword.length > 0 && email.length > 0 &&
          fname.length > 0 && lname.length > 0){
            console.log("Pass");
        }else{
            console.log("Fail");
        }
    }
    function checkEmail(){
        email = $("#emailID");
        if(email.val() != "" && email.val().indexOf("@") != -1){
            $.ajax({
                url: "../control.php?req=checkEmail",
                data: {
                    email: email.val(),
                },
                method: "POST",
                success: function(data){
                    if(data === "pass"){
                        setBorderCorrect($("#emailID"));
                    }else{
                        setBorderIncorrect($("#emailID"));
                    }
                }
            });
        }else{
            setBorderToDefault($("#emailID"));
        }
    }
    function isValidEmailAddress(emailAddress) {
        var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
        return pattern.test(emailAddress);
    }
});