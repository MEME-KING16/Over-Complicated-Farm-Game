let Achievements = {
    "The Welcoming Wheat":0,
    "Dedicated Wheat Harvester":0
}

function Grant(Achievement) {
    if (Achievements[Achievement] != undefined) {
        Achievements[Achievement] = 1
        new Toast({
            message: 'Achievement unlocked: '+Achievement+"!",
            type: 'success'
          });
    } else {
        new Err(`Achievement:${Achievement} doest exist`).throw()
    }
}