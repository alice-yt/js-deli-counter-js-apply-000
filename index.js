let katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`; 
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
    return katzDeliLine.shift();
  }
}
  
  function currentLine(katzDeliLine) {
    let str = 'The line is currently: ';
    if (katzDeliLine.length === 0) {
      return 'The line is currently empty.'
    } else {
      for (let i = 0; i < katzDeliLine.length; i++) {
        str += i + 1 + '. ' + katzDeliLine[i] + '.';
      }
    }
  }