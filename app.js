function getHour() {
    const date = new Date();

    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();

    let rotateSec = seconds * 6 + 90;
    let rotateMin = minutes * 6 + 90;
    let rotateHou = hours * 30 + 90;

    let secondsElt = document.querySelector(".seconds");
    secondsElt.style.transform = `translate(-50%, -50%) rotate(${rotateSec}deg)`;

    let minutesElt = document.querySelector(".minutes");
    minutesElt.style.transform = `translate(-50%, -50%) rotate(${rotateMin}deg)`;

    let hoursElt = document.querySelector(".hours");
    hoursElt.style.transform = `translate(-50%, -50%) rotate(${rotateHou}deg)`;
}

window.setInterval(getHour, 1000);