function kustuta(){

    let t=document.getElementById("tahvel").getContext("2d");
    t.clearRect(0, 0, 300, 200);
}
function joon(){
    let t=document.getElementById("tahvel").getContext("2d");
    t.beginPath();
    t.lineWidth="5";
    t.strokeStyle="black";
    t.moveTo(50, 50);
    t.lineTo(100, 50);
    t.lineTo(150, 60);
    t.lineTo(150, 100);
    t.lineTo(50, 50);
    t.stroke();
    t.fillStyle="yellow";
    t.fill();
}
function ring(){

    let t = document.getElementById("tahvel").getContext("2d");
    t.beginPath();
    t.strokeStyle = "green";
    t.arc(100, 45, 20, 0, 2 * Math.PI, true);
    t.stroke();
    t.fill();
}
function ristkyylik(){
    let t=document.getElementById("tahvel").getContext("2d");
    t.fillStyle="black";
    t.fillRect(20, 20, 30, 20);
    t.fillText("Tere Hommikust", 100, 50);
}