// const arr = [1, 2, 3, 4, 5, 6, 7];

// function sum() {
//   let text = 0;
//   let result;

//   for (let i = 0; i < arr.length; i++) {
//     text = arr[i] + text;
//     result = text / arr.length;
//   }
//   console.log(text, "result", result);
//   return result;
// }

// const sumresult = sum();

///medium find program

const arrSort = [1, 1, 1, 4, 5, 6, 1, 1, 1, 1, 1, 1, 7, 7, 7, 7, 7, 7, 7, 7];
let temp;
let len = arrSort.length;
function sortElement() {
  for (let i = 0; i < arrSort.length; i++) {
    for (let j = i + 1; j < arrSort.length; j++) {
      if (arrSort[i] > arrSort[j]) {
        temp = arrSort[j];
        arrSort[j] = arrSort[i];
        arrSort[i] = temp;
      }
    }
  }

  return arrSort;
}

const sortItems = sortElement();
console.log(sortItems, "sortItems");

if (sortItems.length % 2 !== 0) {
  let midItem = sortItems.length - 1 / 2;
  console.log(sortItems[midItem], "even");
} else {
  let midItem = sortItems.length / 2;
  let nextItem = sortItems.length / 2 + 1;

  console.log(sortItems[nextItem]);
}

//mode find

function modeFind() {
  let count = 0;
  let pre_count = 0;
  let value = 0;
  for (let i = 0; i < sortItems.length; i++) {
    count = 0;
    for (let j = 0; j < sortItems.length; j++) {
      if (sortItems[i] === sortItems[j]) {
        count++;
        if (count > pre_count) {
          value = sortItems[i];
          pre_count = count;
        }
      }
    }
  }
  return value;
}
const modeItem = modeFind();
console.log(modeItem);

///find amoutn and notes

