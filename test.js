$(document).ready(function(){
    console.log("Ready");
    $("#formID").submit(function(event){
        console.log("dwqdw");
        alert( "Handler for .submit() called." );
        event.preventDefault();
    });
});