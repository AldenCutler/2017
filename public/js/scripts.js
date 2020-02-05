console.clear;
var canvas = document.getElementById("myCanvas");
console.log(canvas.width, canvas.height);
var ctx = canvas.getContext("2d");


function updateTime() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var d = new Date();
    seconds = d.getSeconds();
    ctx.font = "35px Bahnschrift";
    ctx.fillText(seconds, 175, 50);
    ctx.fillRect(175, 200, 40, seconds * -2);

    minutes = d.getMinutes();
    ctx.font = "35px Bahnschrift";
    ctx.fillText(minutes, 100, 50);
    ctx.fillRect(100, 200, 40, minutes * -2);

    hours = d.getHours();
    hours = ((hours + 11) % 12 + 1)
    ctx.font = "35px Bahnschrift";
    ctx.fillText(hours, 30, 50);
    ctx.fillRect(25, 200, 40, hours * -12);
}

updateTime();
setInterval(updateTime, 1)