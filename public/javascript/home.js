function showPassword() {
    
    var key_attr = $('#key').attr('type');
    
    if(key_attr != 'text') {
        
        $('.checkbox').addClass('show');
        $('#key').attr('type', 'text');
        
    } else {
        
        $('.checkbox').removeClass('show');
        $('#key').attr('type', 'password');
        
    }
    
}

function postLogin(userCredentials){
    $.post("/login", userCredentials,
    function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
    });
}

$("#btn-login").on("click", function(){
   var email = $("#email").val();
   var password = $("#key").val();

   var userCredentials = {
       email: email,
       password: password
   }

   postLogin(userCredentials)
 
})
