const readline = require('readline/promises');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const addNote = async function() {
    const noteTitle = await rl.question('What is your name? ');
    const noteBody = await rl.question('What programme do you study? ');
    console.log({
        title: noteTitle,
        body: noteBody,
    })
}

addNote();