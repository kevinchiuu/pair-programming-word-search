const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
     for (l of horizontalJoin) {
         if (l.includes(word)) {
             return true;
             continue;
         }
     }
   let newArr = [];
   for (let a = 0; a < letters[0].length; a++) {
     let newArr2 = [];
     for (let b = 0; b < letters.length; b++) {
       newArr2.push(letters[b][a])
     }
     newArr.push(newArr2);
     
   }
   const verticalJoin = newArr.map((val) => val.join(''));
   for (a of verticalJoin) {
     if (a.includes(word)) {
       return true;
       continue;
     }
   }
 
   return false;
 
 }
 

console.log(wordSearch([
  ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
  ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
  ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
  ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
  ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
  ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
  ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
], 'SEINFELD'));

module.exports = wordSearch;