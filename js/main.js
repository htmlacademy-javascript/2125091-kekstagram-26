import {PHOTO_COUNT, MIN_LIKE, MAX_LIKE, DESCRIPTIONS, NAMES, MESSAGES} from './data.js';

import {getNumberFromInterval} from './util.js';


const arrayOfPhotoObjects = [];//Итоговый массив объектов

//Тут получаю массив объектов-комментов
function getComments(countOfComments) {
  const comments = [];//Массив для комментов
  for(let j = 0; j < countOfComments; j++) {
    comments[j] = {
      id: j,
      avatar: `img/avatar${getNumberFromInterval(1, 6)}.svg`,
      message: MESSAGES[getNumberFromInterval(0, MESSAGES.length-1)],
      name: NAMES[getNumberFromInterval(0, NAMES.length - 1)]
    };
  }
  return comments;
}

//Тут получаю итоговый массив объектов
for(let i = 1; i <= PHOTO_COUNT; i++) {
  arrayOfPhotoObjects[i] = {
    id: i,
    url: `photos/${i}.jpg`,
    description: DESCRIPTIONS[getNumberFromInterval(0, DESCRIPTIONS.length-1)],
    likes: getNumberFromInterval(MIN_LIKE, MAX_LIKE),
    comment: getComments(getNumberFromInterval(1,5))
  };
  console.log(arrayOfPhotoObjects);
}
