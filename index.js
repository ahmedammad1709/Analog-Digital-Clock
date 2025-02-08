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
   restartProgressBar();
}

function showDigital(){
    document.getElementById("clockcontainer").style.display = "none";
    document.getElementById("digitalClock").style.display = "block";
    restartProgressBar();
}

//For Progress bar
function restartProgressBar() {
    let progressBar = document.querySelector(".progressbar");

    progressBar.style.width = "0"; 
    progressBar.style.animation = "none"; 
    progressBar.offsetWidth; // Trigger reflow

    // Reapply animation after a short delay
    setTimeout(() => {
        progressBar.style.animation = "load 0.5s ease-in-out forwards";
    }, 10);
}

//For Digital
setInterval(() => {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Adding leading zeros 
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("time").innerText = hours + ":" + minutes + ":" + seconds;


}, 1000)
