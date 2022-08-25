function logout(){
        localStorage.mail = ''
        location.replace('login.php')
}
$(document).ready(function () {
    var mail = localStorage.mail
    if (mail==null || mail== undefined || mail ==''){
        logout()
    }
    else {
        $("#signprompt").addClass("d-none")  
        $("#signoutprompt").removeClass("d-none")        
    }
    if(localStorage.isAdmin==0){
        if (((location.href.split('/').pop()) == 'adminview.php') || ((location.href.split('/').pop()) == 'add-service.php') || ((location.href.split('/').pop()) == 'add-place.php') || ((location.href.split('/').pop()) == 'association.php') || ((location.href.split('/').pop()) == 'dashboard.php')) {
            logout()
        }
    }
    
});