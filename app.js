function getHour() {
    const date = new Date();

    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();

    let rotateSec = seconds * 6 + 90;
    let rotateMin = minutes * 6 + 90;
    let rotateHou = (hours * 30 + 90) + (minutes / 360 * 30);

    mouveHand(".seconds", rotateSec);
    mouveHand(".minutes", rotateMin);
    mouveHand(".hours", rotateHou);

    function mouveHand(div, rotation) {
        let divElt = document.querySelector(div);
        divElt.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
    }
}

window.setInterval(getHour, 1000);