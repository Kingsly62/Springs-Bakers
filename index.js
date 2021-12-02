$(document).ready(function(){
    $('#contact').click(function(e){
        e.preventDefault();
        var name = 
        $('#name').val();
        var email = 
        $('#email').val();
        var message = 
        $('#message').val();

        $('.error').remove();

        if(name.length<1){
            $('#name').after('<span class="error">Kindly type in your name</span>')
            alert("Provide your name")
        }

        if(email.length<1) {
            $('#email').after('<span class="error">Please type in your email</span>')
            alert('Provide your email')
        }
        if(message.length<1){
            $('#message').after('<span class="error">Type in your email kindly</span>')
            alert("Provide your comment in the section  below to continue")
        }else{
                alert("Form submitted successfully");
                return true;
            
        
        }
    })
})

