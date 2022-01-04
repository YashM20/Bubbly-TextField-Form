function submit()
{
    var username = document.getElementById("user").value;
    var password = document.getElementById("pwd").value;
    
    $.post("action_page.php",{username:username,password:password});
}