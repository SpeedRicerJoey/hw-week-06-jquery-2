$(document).ready(function(){
    
    $("#clicker").text("Click me to toggle a hidden secret!");

    $("#clicker").click(function(){        
        $("#secret").fadeToggle("fast");
    });

    $("#clicky").click(function(){
        $(".secret").slideUp("slow");
    });

    $("#clickster").click(function(){
        $(".superGirl").hide();
        $(".highFive").show();
    });
});