$(document).ready(function(){

    $('#myForm').submit(function(e){
    e.preventDefault();
    
    var name = $('#name').val();
    var email = $('#email').val();
    var comment = $('#comment').val();
    var myform =$('#myForm')
    
    $(".error").remove();
    
    if(name.length<1){
        alert("Provide your valid official fullnames");
    }
    if(email.length<1){
        alert("Provide your valid email to continue");
    }
    if(comment.length<1){
        alert("Provide your comment kindly to submit");
    }else{
        
        
        alert('We have received your message successfully.We value you alot.Continue trading with our platform Thanks!!!!');
        return true
    }
    });
    });