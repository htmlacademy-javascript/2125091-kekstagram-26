function checkLengthString(yourString, lengthString){
  if(yourString.length >= lengthString) {
    return false;
  }

  return true;
}

checkLengthString('Nord Wing has not An-2', 66);


//Функция, получающая слуайное число из заданного интервала
function getNumberFromInterval(startInterval, endInterval) {
  if(endInterval !== startInterval) {
    const lower = Math.floor(Math.min(Math.abs(startInterval), Math.abs(endInterval)));
    const upper = Math.ceil(Math.max(Math.abs(startInterval), Math.abs(endInterval)));

    return Math.floor(Math.random() * (upper - lower + 1) + lower);
  }

  return endInterval;
}

//Вводные данные
const PHOTO_COUNT = 25;
const MIN_LIKE = 15;//Минимальное количество лайков
const MAX_LIKE = 200; //Максимальное количество лайков
const DESCRIPTIONS = [
  'СуперМега Фото',
  'Странная фотка',
  'Главное горзионт чтоб завалили',
  'Ну красота же',
  'У каждого такая фотка есть'
];
const NAMES = [
  'Iak',
  'Kalir',
  'Wefor',
  'Gor',
  'Asa',
  'Posad'
];
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];


const arrayOfPhotoObjects = [];//Итоговый массив объектов


//Тут получаю массив объектов-комментов
function getComments(countOfComments) {
  const comments = [];//Массив для комментов
  for(let j = 0; j < countOfComments; j++) {
    comments[j] = {
      id: j,
      avatar: 'img/avatar' + getNumberFromInterval(1, 6) + '.svg',
      message: MESSAGES[getNumberFromInterval(0, MESSAGES.length-1)],
      name: NAMES[getNumberFromInterval(0, NAMES.length - 1)]
    }
  }
  return comments;
}

//Тут получаю итоговый массив объектов
for(let i = 1; i <= PHOTO_COUNT; i++) {
  arrayOfPhotoObjects[i] = {
    id: i,
    url: "photos/" + i + '.jpg',
    description: DESCRIPTIONS[getNumberFromInterval(0, DESCRIPTIONS.length-1)],
    likes: getNumberFromInterval(MIN_LIKE, MAX_LIKE),
    comment: getComments(getNumberFromInterval(1,5))
  }
}
