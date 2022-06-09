function getNumberFromInterval(startInterval, endInterval) {
  if(endInterval !== startInterval) {
    return Math.floor(Math.random() * (endInterval - startInterval + 1) + startInterval);
  }

  return endInterval;
}

getNumberFromInterval(0, 17);


function checkLengthString(yourString, lengthString){
  if(yourString.length >= lengthString) {
    return false;
  }

  return true;
}

checkLengthString('Nord Wing has not An-2', 66);
