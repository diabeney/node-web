const fs = require('fs');
const path = require('path');

const args = process.argv.splice(2);
const command = args.shift();
const taskdescription = args.join(' ');
const file = path.join(process.cwd(), './tasks');

function listFile(file) {console.log('all files ', file)};
function addFile(file, description) {console.log(`"${description}" added to files into directory ${file}`)};

switch(command) {
    case 'list':
        listFile(file);
        break;
    case 'add':
        addFile(file, taskdescription);
        break;
    default:
        console.log('Usage: ' + process.argv[0] + ' list|add [taskdescription]');
}


console.log('')