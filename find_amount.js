// const amount = 1000;
const arr = [500, 200, 100, 50, 10, 2, 2];
function sortAmountItems() {
  let temp;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
}
const sortamountItems = sortAmountItems();
console.log(sortamountItems, "helloworld");

//find repess total
function totalAmount(amount) {
  
  let temp = [];
 
  for (let i = 0; i < sortamountItems.length; i++) {
    if (amount >= sortamountItems[i]) {
      amount = amount - sortamountItems[i];
      temp.push(amount);
    }
  
  }
  temp.forEach((item) => {
    console.log(item, "item");
  });

  return temp; 

//   return result;
}

const totalamount = totalAmount(750);
console.log(totalamount, "totalamount");
