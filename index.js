let katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`; 
  }
}

function nowServing(katzDeliLine) {
  while (katzDeliLine.length !== 0) {
    return 'katzDeliLine[i]';
    katzDeliLine = katzDeliLine.slice(1); 
    } else {
      if (katzDeliLine.length === 0) {
        return 'There is nobody waiting to be served!'
      }
    }
}
  
  function currentLine(katzDeliLine) {
    let str = 'The line is currently: ';
    if (katzDeliLine.length === 0) {
      return 'The line is currently empty.'
    } else {
      for (let i = 0; i < katzDeliLine.length; i++) {
        str += 'i + 1.' + 'katzDeliLine[i] ';
      }
    }
  }