$(document).ready(function(){
    $('button').c(function(e){
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

$('#addBtn').on('click',function(){
    let cart = $('.cart');
    let imgdrag = $(this).parent('.card').find("img").eq(0);
    if(imgdrag){
        let imgclone = imgdrag.clone()
        .offset({
            top: imgdrag.offset().top,
            left: imgdrag.offset.left
        });
        css({
            'opacity':'0.8',
            'position':'absolute',
            'height':'150px',
            'width':'150px',
            'z-index':'100'
        });

        appendTo($('body'))
        .animate({
            'top': cart.offset().top + 10,
            'left': cart.offset.left + 10,
            'width': 70,
            'height': 70
        },1000,'easeInOutExpo');
        setTimeout(function(){
            cart.offset("shake",{
                times : 2
            },200);
        },1500);

        imgclone.animate({
            'width':0,
            'height':0,
        },function(){
            $(this).detach()
        });

    }
})