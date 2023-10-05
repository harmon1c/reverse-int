module.exports = function reverse (n) {
  const numStr = Math.abs(n).toString();
  let reversedString = "";
  for (let i = numStr.length - 1;  i >= 0; i--) {
    reversedString += numStr[i];
  }
  const strToNum = parseInt(reversedString, 10);
  return strToNum;
}
