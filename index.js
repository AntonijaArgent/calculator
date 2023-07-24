let a = prompt("Please write a first number");
while (isNaN(parseFloat(a))) {
  a = prompt("Thats not a valid number. Please write a number");
}
let b = prompt("Which operation would You like to do?");
while (b !== "+" && b !== "-" && b !== "*" && b !== "/") {
  b = prompt("Thats not a valid operation. Please write: +,-,* or /");
}
let c = prompt("Please write a second number");
while (isNaN(parseFloat(c))) {
  c = prompt("Thats not a valid number. Please write a number");
}
let result;
function doMath(a, b, c) {
  switch (b) {
    case "+":
      result = parseFloat(a) + parseFloat(c);
      break;
    case "-":
      result = parseFloat(a) - parseFloat(c);
      break;
    case "*":
      result = parseFloat(a) * parseFloat(c);
      break;
    case "/":
      result = parseFloat(a) / parseFloat(c);
      break;
  }
}
doMath(a, b, c);
try {
  if (result === Infinity || result === -Infinity) {
    throw new Error("You cant divide by 0");
  }
  alert("Result is " + result);
} catch (er) {
  alert(er.message);
}
