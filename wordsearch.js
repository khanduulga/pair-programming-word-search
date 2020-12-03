const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (let l of horizontalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }
    
    const verticalArr= [];
    const columns = letters[0].length;
    const rows = letters.length;

    for (let i = 0; i < columns; i++) {
        verticalArr[i] = [];
        for (let j = 0; j < rows; j++) {
            verticalArr[i].push();
        }
    }
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            verticalArr[j][i] = letters[i][j];
        }
    }
    const verticalJoin = verticalArr.map(ls => ls.join(''))
    for (let l of verticalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }
    return false;
}

module.exports = wordSearch