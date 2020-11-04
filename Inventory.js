function solve(input) {
    let journal = input.shift().split(', ');
    let commands = input.shift();
    while (commands !== 'Craft!') {
        commands = commands.split(' - ');
        let command = commands.shift();
        let item = commands.shift();

        if (command === "Collect") {
            if (!journal.includes(item)) {
                journal.push(item);
            }
        } else if (command === "Drop") {
            if (journal.includes(item)) {
                let index = journal.indexOf(item);
                journal.splice(index, 1);
            }
        } else if (command === 'Combine Items') {
            item = item.split(':');
            let first = item.shift();
            let second = item.shift();
            if (journal.includes(first)) {
                let index = journal.indexOf(first);
                journal.splice(index + 1, 0, second);
            }
        } else if (command === 'Renew') {
            if (journal.includes(item)) {
                let index = journal.indexOf(item);
                journal.splice(index,1);
                journal.push(item);
            }
        }
        commands = input.shift()
    }
    console.log(journal.join(', '));

}
solve([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ]
  )