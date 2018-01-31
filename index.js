var katzDeli = [];
var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return(`Welcome, ${name}. You are number ${katzDeliLine.length} in line`)
};

function nowServing() {
if (katzDeliLine.length > 0) {
  console.log(`Currently serving ${katzDeliLine[0]}`);
  katzDeliLine.shift();
} else {
  console.log("There is nobody waiting to be served!");
  }
};

function currentLine(katzDeliLine) {
  var line = [];
  if (katzDeliLine.length === 0) {
   return "The line is currently empty.";
 } else {
   var i = 0;
    while (i < katzDeliLine.length) {
      line.push(`${i + 1}. ${katzDeliLine[i]}`)
      i++;
    }
  }
  console.log(`The line is currently: ${line.join(', ')}`);
};
