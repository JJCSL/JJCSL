function login() {
    var em=document.forms["myform"]["email"].value;
    var ps=document.forms["myform"]["password"].value;

    if(em=="jerseyjiggs20@gmail.com" && ps=="jjcsl20"){
        /*alert("login successful");*/
        return true;
        /*document.getElementById("hiddenmessage").style.display = 'block';*/
    }
    else{
        /*alert("incorrect email or password")*/
        return false;
    }
}

function reveal(){
    document.getElementById("hiddenmessage").style.display = 'block';

}