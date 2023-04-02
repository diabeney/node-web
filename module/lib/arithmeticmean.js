function armean(...data) {
    return data.reduce((prev, curr) => prev + curr) / data.length;
}

module.exports = armean;
