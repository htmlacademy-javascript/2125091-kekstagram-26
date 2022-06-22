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
const countPhoto = 25;
const minLike = 15;//Минимальное количество лайков
const maxLike = 200; //Максимальное количество лайков
let descriptions = [
  'СуперМега Фото',
  'Странная фотка',
  'Главное горзионт чтоб завалили',
  'Ну красота же',
  'У каждого такая фотка есть'
]
const names = [
  'Iak',
  'Kalir',
  'Wefor',
  'Gor',
  'Asa',
  'Posad'
]
const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
]


let arr = [];//Итоговый массив объектов


//Тут получаю массив объектов-комментов
function getComments(countOfComments) {
  let comments = [];//Массив для комментов
  for(let j = 0; j < countOfComments; j++) {
    comments[j] = {
      id: j,
      avatar: 'img/avatar' + getNumberFromInterval(1, 6) + '.svg',
      message: messages[getNumberFromInterval(0, messages.length-1)],
    }
  }
  return comments;
}

//Тут получаю итоговый массив объектов
for(let i = 1; i <= countPhoto; i++) {
  arr[i] = {
    id: i,
    url: "photos/" + i + '.jpg',
    description: descriptions[getNumberFromInterval(0, descriptions.length-1)],
    likes: getNumberFromInterval(minLike, maxLike),
    comment: getComments(getNumberFromInterval(1,5))
  }
}