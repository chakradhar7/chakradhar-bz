$(document).ready(function(){
    $.getJSON("/data",function(d){
        $("#name").text(d.name);
        $("#rollno").text(d.rollno);
        $("#college").text(d.college);
    })
})