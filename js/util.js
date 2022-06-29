function checkLengthString(yourString, lengthString){
  if(yourString.length >= lengthString) {
    return false;
  }

  return true;
}

//Функция, получающая слуайное число из заданного интервала
function getNumberFromInterval(startInterval, endInterval) {
  if(endInterval !== startInterval) {
    const lower = Math.floor(Math.min(Math.abs(startInterval), Math.abs(endInterval)));
    const upper = Math.ceil(Math.max(Math.abs(startInterval), Math.abs(endInterval)));

    return Math.floor(Math.random() * (upper - lower + 1) + lower);
  }

  return endInterval;
}

export {checkLengthString, getNumberFromInterval}
