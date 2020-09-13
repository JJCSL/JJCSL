function revealmessage() {
    document.getElementById("hiddenmessage").style.display = 'block';



}

function countDown(){
    var currentVal = document.getElementById("CountDownButton").innerHTML;
    var NewVal = 0;
    if (currentVal > 0){
        NewVal = currentVal - 1; 
    }
    document.getElementById("CountDownButton").innerHTML = NewVal;
}