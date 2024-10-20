
// orobiti warmoeba

function numB(num) {

  let machineNum = '';
  
  while (num > 0) {
    if (num % 2 === 0) {
      machineNum += '0';
    } else {
      machineNum += '1';
    }
    num = Math.floor(num / 2);
  }
  return machineNum || '0';
}

console.log(numB(10000));