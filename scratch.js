function recur(num) {
  if (num == 0){
    return num
  } else {
    console.log(`case: ${num}`);
    return num + (recur(num-1));
  }
}

function power(base, exp){
  if (exp == 0){
    return 1;
  } else {
    console.log(`base:${base} exp: ${exp}`);
    return base*power(base, (exp-1));
  }
}

function processString(str){
  if (str.length == 0) {
    return str
  } else {
    return (processString(str.substring(1))+str[0]);
  }
}

console.log(processString('apple'));
