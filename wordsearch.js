const transpose = function(matrix) {
  let result = [];
  const outerArrayLength = matrix[0].length;

  for (let outer = 0; outer < outerArrayLength; outer++) {
    let emptyArray = [];
    for (let inner = 0; inner < matrix.length; inner++) {
      emptyArray.push(matrix[inner][outer]);
    }
    result.push(emptyArray);
  }
  return result;
};

// // Do not edit this function.
// const printMatrix = (matrix) => {
//   for (const row of matrix) {
//     for (const el of row) {
//       process.stdout.write(el + " ");
//     }
//     process.stdout.write("\n");
//   }
// };


const wordSearch = (letters, word) => {

  if(letters.length === 0) {
    return false;
  }
  
  const transPosedLetters = transpose(letters);
  for (let letter of transPosedLetters) {
    letters.push(letter);
  }

  const horizontalJoin = letters.map(ls => ls.join(''));
  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  return false;
};

module.exports = wordSearch;