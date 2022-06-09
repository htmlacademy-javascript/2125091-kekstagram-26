function getNumberFromInterval(startInterval, endInterval) {
  if((endInterval > startInterval) && (startInterval !== 0) && (endInterval !== 0)) {
    console.log(Math.floor(Math.random() * (endInterval - startInterval + 1) + startInterval));
  }
}

getNumberFromInterval(7, 17);


function checkLengthString(yourString, lengthString){
  yourString = String(yourString);
  lengthString = +lengthString;

  if(yourString.length >= lengthString) {
    return false;
  }

  return true;
}

checkLengthString('Nord Wing has not An-2', 66);
