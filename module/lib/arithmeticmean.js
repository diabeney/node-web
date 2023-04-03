function armean(...data) {
    return data.reduce((prev, curr) => prev + curr) / data.length;
}

function barmean(...data) {
    return data.reduce((prev, curr) => prev + curr);
}

module.exports = barmean;
