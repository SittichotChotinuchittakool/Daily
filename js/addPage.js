$(document).ready(function(){
    $( "#dateID" ).datepicker({
        dateFormat: 'yy-mm-dd',
        maxDate: "0"
    });
    var now = new Date();
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth()+1)).slice(-2);
    var today = now.getFullYear() + "-" + (month) + "-" + (day);
    $("#dateID").val(today);
    $("#addPage_submit_id").click(function(){
        addStory();
    });
    function addStory(){
        dateID = $("#dateID");
        subjectID = $("#subjectID");
        storyID = $("#storyID");
        // console.log(dateID + " : " + subjectID + " : " + storyID);
        $.ajax({
            type: "POST",
            url: "../control.php?req=addStory",
            data: {
                subject: subjectID.val(),
                date_story: dateID.val(),
                story_id: storyID.val()
            },
            dataType: "JSON",
            asyn: false,
            success: function (response) {
                // console.log(response.status.toUpperCase());
                if(response.status.toLowerCase() === "pass"){
                    subjectID.val("");
                    storyID.val("");
                    alert("Save Story Success.");
                }else{
                    alert("fail");
                }
            }
        });
    }
});