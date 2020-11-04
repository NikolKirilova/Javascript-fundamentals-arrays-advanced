function solve(input) {
    let collection = input.shift().split('&');
    let commands = input.shift();
    while (commands !== "Done") {
        commands = commands.split(' | ');
        let action = commands.shift();
        let book = commands.shift();
        action = action.split(' ').shift();
        if (action === 'Add') {
            if (!collection.includes(book)) {
                collection.unshift(book);
            }
        } else if (action === 'Take') {
            if (collection.includes(book)) {
                let index = collection.indexOf(book);
                collection.splice(index, 1);
            }
        } else if (action === 'Swap') {
            let bookTWo = commands.shift();
            if (collection.includes(book) && collection.includes(bookTWo)) {
                let indexOne = collection.indexOf(book);
                let indexTwo = collection.indexOf(bookTWo);
                collection[indexOne] = bookTWo;
                collection[indexTwo] = book;
            }
        } else if (action === 'Insert') {
            collection.push(book);
        } else if (action === 'Check') {
            if (book>=0 && book <collection.length) {
                console.log(`${collection[book]}`);

            }
        }
        commands = input.shift();
    }
    console.log(collection.join(', '));


} solve([
    "Don Quixote&The Great Gatsby&Moby Dick&Hamlet",
    "Add Book | The Odyssey",
    "Take Book | Don Quixote",
    "Insert Book | Alice's Adventures in Wonderland",
    "Check Book | 3",
    "Done"

])