const WIDTH = 400;
const HEIGH = 400;

let target = {
    x: getRandomNumber(WIDTH),
    y: getRandomNumber(HEIGH)
};

let $map = document.getElementById("map");
let $distance = document.getElementById("distance");
let $clicks = document.getElementById("clicks");
let clicks = 0;

$map.addEventListener("click", e => {
    clicks++;
    $clicks.innerHTML = `Clicks: ${clicks}`;
    let distance = getDistance(e, target);
    let distanceHint = getDistanceHint(distance);
    $distance.innerHTML = distanceHint;

    if (distance <= 20) {
        alert(`YOU WIN! 😎💪\nYou found the treasure in ${clicks} clicks`);
        location.reload();
    }
});
// console.log(target);
