$(document).ready(function(){
    console.log("main Page ready");
    $("#addID").load("../html/addPage.html");
    $("#viewID").load("../html/viewPage.html", function(){
        $( "#viewPage_dateID" ).datepicker({
            dateFormat: 'yy-mm-dd',
            maxDate: "0"
        });
        getRecord();
    });
    $("#viewID").hide();
    $("#addBtnID").removeClass("btn btn-outline-primary").addClass("btn btn-primary");
    function checkLogin(){
        console.log("ddd");
        $.ajax({
            type: "POST",
            url: "../control.php?req=checkLogin",
            data: {},
            async: false,
            dataType: "JSON",
            success: function (response) {
                console.log("Response : " + JSON.stringify(response));
                if(response['status'] === "pass"){
                    $("#userID").html(response.user);
                }else if(response['status'] === "fail"){
                    window.location.href = "../index.html";
                }else{
                    console.log("Error");
                }
            },
            error: function (xhr, status, error) {
                console.log(xhr.responseText);
            }
        });
    }
    checkLogin();
    $("#addBtnID").click(function(){
        $("#viewID").hide("slow",function(){
            $("#addID").show("slow");
            $("#addBtnID").removeClass("btn btn-outline-primary").addClass("btn btn-primary");
        });
        $("#addBtnID").removeClass("btn btn-outline-primary").addClass("btn btn-primary");
        $("#viewBtnID").removeClass("btn btn-primary").addClass("btn btn-outline-primary");
        
    });
    function getRecord(){
        $.ajax({
            type: "POST",
            url: "../control.php?req=getRecord",
            data: {
    
            },
            dataType: "JSON",
            success: function (response) {
                console.log(response);
                addRecord(response);
            }
        });
    }
    function addRecord(data){
        $("#tableID").html(function(){
            count = 0;
            text = "";
            $.each(data, function (indexInArray, valueOfElement) { 
                text += "<tr class='table-Default' id='" + valueOfElement.story_id + "'>";
                text += "<td style='text-align: center'>" + (++count) + "</td>";
                text += "<td style='text-align: left'>"  +  valueOfElement.story_subject + "</td>";
                text += "<td style='text-align: right'>"  +  valueOfElement.story_date_story + "</td>";
                text += "</tr>";
            });

            return text;
        });
    }
    $("#refreshID").click(function (e) { 
        getRecord();
        e.preventDefault();
    });
    $("#viewBtnID").click(function(){
        $("#addID").hide("slow", function(){
            $("#viewID").show("slow");
            getRecord();
        });
        $("#viewBtnID").removeClass("btn btn-outline-primary").addClass("btn btn-primary");
        $("#addBtnID").removeClass("btn btn-primary").addClass("btn btn-outline-primary");
    });
    function logOut(){
        $.ajax({
            type: "POST",
            url: "../control.php?req=logout",
            data: {},
            dataType: "JSON",
            success: function (response) {
                if(response['status'] === "pass"){
                    window.location.href = "../index.html";
                }else{
                    
                }
            }
        });
    }
    $("#logoutID").click(function(){
        logOut();
    });
    $("#iconID").click(function(){
        // window.location.href = "../index.html";
    });
    function getData(idStory){
        $.ajax({
            type: "POST",
            url: "../control.php?req=getData",
            data: {
                id_Story: idStory
            },
            dataType: "JSON",
            success: function (response) {
                console.log(response);
                $("#modal-title-ID").html(response.story_subject);
                $("#text_date_id").html(response.story_date_story);
                $("#text_story_id").html(response.story_story);
            },
            error: function (xhr, status, error) {
                alert(xhr.responseText);
            }
        });
    }
    $(document).on('click', "#tableID tr", function(e){
        idStory = this.id;
        console.log("A : " + idStory);
        getData(idStory);
        $("#modal-title-ID").html(idStory);
        $("#myModal").modal();
    });
});