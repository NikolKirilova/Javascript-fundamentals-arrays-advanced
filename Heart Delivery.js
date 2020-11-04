function solve(input) {
    let sequence = input.shift().split('@').map(Number);
    let command = input.shift();
    let currentIndex = 0;
    while (command !== 'Love!') {
        command = command.split(' ');
        let jump = command.shift();
        let length = Number(command.shift());
        currentIndex += length;
        if (currentIndex >= sequence.length) {
            currentIndex = 0;
        }

        if (sequence[currentIndex] >= 2) {
            sequence[currentIndex] -= 2;
            if (sequence[currentIndex] < 1) {
                console.log(`Place ${currentIndex} has Valentine's day.`);

            }
        } else {
            console.log(`Place ${currentIndex} already had Valentine's day.`);
        }

        command = input.shift();
    }
    console.log(`Cupid's last position was ${currentIndex}.`);
    let mission = sequence.filter(n => n !== 0);
    if (mission.length === 0) {
        console.log(`Mission was successful.`);
    } else {
        console.log(`Cupid has failed ${mission.length} places.`);

    }
}
solve(["2@4@2",
    "Jump 2",
    "Jump 2",
    "Jump 8",
    "Jump 3",
    "Jump 1",
    "Love!"

])