let katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${i} in line.`; 
  }
}

function nowServing(katzDeliLine) {
    if (katzDeliLine.length === 0) {
      return 'There is nobody waiting to be served!'
    } else {
      while (katzDeliLine.length !== 0) {
       return 'katzDeliLine[i]';
       katzDeliLine = katzDeliLine.slice(1); 
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