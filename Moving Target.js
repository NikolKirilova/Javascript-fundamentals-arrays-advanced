function solve(input) {
    let sequence = input.shift().split(' ').map(Number);
    let commands = input.shift();

    while (commands !== 'End') {
        commands= commands.split(' ');
        let command = commands.shift();
        let index = Number(commands.shift());
        let value = Number(commands.shift());
        if (command === 'Shoot') {
            if (index < sequence.length && index>=0) {
                sequence[index] -= value;
                if (sequence[index] <= 0) {
                    sequence.splice(index, 1);
                }
            }

        } else if (command === 'Add') {
            if (index < sequence.length && index >=0) {
                sequence.splice(index,0,value);
            } else {
                console.log(`Invalid placement!`);

            }
        } else if (command === 'Strike') {
            let startStrike = index - value;
            let endStrike = index + value;
            let totalRadius = value * 2 + 1;
            if (startStrike >= 0 && endStrike < sequence.length) {
                sequence.splice(startStrike, totalRadius);
            }else{
                console.log(`Strike missed!`);
                
            }
        }
        commands = input.shift();
    }

    console.log(sequence.join('|'));

}
solve(["47 55 85 78 99 20",
    "Shoot 1 55",
    "Shoot 8 15",
    "Strike 2 3",
    "Add 0 22",
    "Add 2 40",
    "Add 2 50",
    'End'
])