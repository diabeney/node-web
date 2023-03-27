const readline = require('readline');

const rl = readline.createInterface(process.stdin,process.stdout);
rl.setPrompt('>> ');
rl.prompt();

const logs = [];

function addLog(qtn, ans) {
    const data = {question: qtn, answer: ans,timestamp: new Date().toLocaleDateString()};
    logs.push(data);
}

function askQuestion(qtn) {
    rl.question(`${qtn}: `, (answer) => {
        console.log('Your answer is: ', answer);
        addLog(qtn, answer);
        rl.setPrompt('>> ');
        rl.prompt();
    })
}

function closeInterface() {
    rl.close();
    console.log('leaving readline');
}

rl.on('line', (cmd) => {
    const args = cmd.split(' ');
    const command = args.shift();
    const message = args.join(' ');
    switch(command) {
        case '.leave':
            closeInterface();
            return;
        case 'ask':
            askQuestion(message);
            return;
        case 'list':
            console.log('Logs today: ', logs);
            rl.prompt();
            return;
        default:
            console.log('Usage: ask|.leave [question]');
            rl.prompt();
            return;
    }
});

rl.on('close' , () => {
    closeInterface();
})