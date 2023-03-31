function printError(err) {
    if(err instanceof Error) {
        return `Error: ${err.message}`
    } else {
        return `Error: ${err}`
    }
}

function execute(err) {
    return printError(err)
}

test('should print Error', () => { 
    expect(execute(new Error('An error'))).toBe('Error: An error')
})
test('should print Error', () => { 
    expect(execute('Error')).toBe('Error: Error')
})