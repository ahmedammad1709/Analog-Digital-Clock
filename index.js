//For Analog
setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();

    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;

}, 1000);

//For switching bw Analog and Digital
function showAnalog() {
    document.getElementById("clockcontainer").style.display = "block";
    document.getElementById("digitalClock").style.display = "none";
}

function showDigital(){
    document.getElementById("clockcontainer").style.display = "none";
    document.getElementById("digitalClock").style.display = "block";
}

//For Digital

setInterval(() => {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Add leading zeros if needed
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("time").innerText = hours + ":" + minutes + ":" + seconds;


}, 1000)
