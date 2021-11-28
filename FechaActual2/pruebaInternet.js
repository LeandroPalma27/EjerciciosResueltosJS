function parseDate(str) {
    var mdy = str.split('/');
    return new Date(mdy[2], mdy[0]-1, mdy[1]);
}

function datediff(first, second) {
    return Math.round((second-first)/(1000*60*60*24));
}

console.log(datediff(parseDate("12/31/2000"), parseDate("1/1/2001")));