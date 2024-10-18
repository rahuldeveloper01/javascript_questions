let arr = [0, 1, 2, 4, 5, 6, 7];
let b = 4;
let arrayA = [];
let arrayB = [];
for (let i = b; i <= arr.length; i++) {
  arrayA.push(i);
}

for (let i = 0; i < arr.length - b; i++) {
  arrayB.push(i);
}

for (let i = 0; i < arrayB.length; i++) {
  arrayA[arrayA.length] = arrayB[i];
}
let array_3 = arrayA;

function findCharacter() {
  for (let i = 0; i < array_3.length; i++) {
    if (array_3[i] == b) {
      return i;
    } else {
      return -1;
    }
  }
}
const result = findCharacter();
console.log(result);
