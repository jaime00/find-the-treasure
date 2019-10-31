let getRandomNumber = size => {
    return parseInt(Math.random() * size);
};

let getDistance = (e, target) => {
    let diffX = e.offsetX - target.x;
    let diffY = e.offsetY - target.y;
    return Math.sqrt(diffX * diffX + diffY * diffY);
};

let getDistanceHint = distance => {
    if (distance <= 30) {
        return "Boiling Hot 🥵";
    } else if (distance <= 40) {
        return "Really Hot 🔥";
    } else if (distance <= 100) {
        return "Warm 😮";
    } else if (distance <= 180) {
        return "Cold 🙄";
    } else if (distance <= 360) {
        return "Really Cold 😓";
    } else {
        return "Freezing! 🥶 ";
    }
};
