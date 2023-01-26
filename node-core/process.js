process.stdin.setEncoding('utf-8');

process.stdin.on('readable', () => {
    const input = process.stdin.read();

    if(input !== null) {
        process.stdout.write(input);
        const command = input.trim() //remove whitespaces from the string;
        if(command === 'exit') {
            process.exit(0)
        }
    }
})