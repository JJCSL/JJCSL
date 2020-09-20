function login() {
    var em=document.forms["myform"]["email"].value;
    var ps=document.forms["myform"]["password"].value;

    if(em=="jerseyjiggs20@gmail.com" && ps=="jjcsl20"){
        alert("login successful");
        return true;
    }
    else{
        alert("incorrect email or password")
        return false;
    }
}

function reveal(){
    document.getElementById("hiddenmessage").style.display = 'block';

}

function newItem(){
    var item = document.getElementById("input").value;
    var ul = document.getElementById("list");
    var li = document.createElementById("li");

    li.appendChild(document.createTextNode("-"+ item));
    ul.appendChild(li);
    document.getElementById("input").value = "";
    li.onclick = removeitem;
}

document.body.onkeyup = function(e){
    if (e.keyCode == 13){
        newItem();
    }
}

function removeItem(){
    e.target.parentElement.removeChild(e.target);
}