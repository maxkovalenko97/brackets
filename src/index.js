function check(str, bracketsConfig) {

  const OPEN_BRACKETS = bracketsConfig.map((item) => item[0]);
  const arr = bracketsConfig.map(item => item);
  const reverseArr = bracketsConfig.map(item => item.slice(0).reverse());
  const arr3 = arr.concat(reverseArr);
  const BRACKETS_PAIR = Object.fromEntries(arr3);
  const same = ['|', '7', '8', '9'];

  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];
    if (OPEN_BRACKETS.includes(currentSymbol)) {
      if (stack[stack.length - 1] === currentSymbol && same.includes(currentSymbol)) {
        stack.pop();
        continue;
      }
      stack.push(currentSymbol);
    } else {
      if (stack.length === 0) {
        return false;
      }
      let topElement = stack[stack.length - 1];

      if (BRACKETS_PAIR[currentSymbol] === topElement) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return (stack.length === 0);
}

module.exports = check;


const config1 = [['(', ')']];
const config2 = [['(', ')'], ['[', ']']];
const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
const config4 = [['|', '|']];
const config5 = [['(', ')'], ['|', '|']];
const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];
check('111115611111111222288888822225577877778775555666677777777776622222', config6);
// check('111115611111111222288888822225577877778775555666677777777776622222', config6)
// check('|()|', config5);
// check('||', config4);
// check('([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])((([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])))', config7);