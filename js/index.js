$(document).ready(function(){
    console.log("Index.html is Ready1");
    $("input").addClass("form-control");
    $("#registerID").click(function(){
        window.location.href = "html/register.html";
    });
    $("#loginID").submit(function(e){
        e.preventDefault();
        user = $("#usernameID").val();
        pass = $("#passwordID").val();
        if(user.length > 0 && pass.length > 0){
            $.post("control.php?req=login", {
                username : $("#usernameID").val(),
                password : $("#passwordID").val()
            }).done(function(data){
                console.log(data);
                if(data === "pass"){
                //    alert("Username or Password is Correct.");
                    window.location.href = "html/mainPage.html";
                }else if(data === "fail"){
                    alert("Username or Password is Incorrect.");
                }else{
                    alert(data);
                }
            });
        }
    });
});