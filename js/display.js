import {createPhotoObjects, PHOTO_COUNT} from './data.js';

const elementTemplate = document.querySelector('#picture').content.querySelector('.picture');

const elementTarget = document.querySelector('.pictures');

const arrayOfPhotos = createPhotoObjects(PHOTO_COUNT);

const elementFragment = document.createDocumentFragment();

arrayOfPhotos.forEach(({url, likes, comment}) => {
  const photoElement = elementTemplate.cloneNode(true);
  photoElement.querySelector('.picture__img').src = url;
  photoElement.querySelector('.picture__comments').textContent = comment.length;
  photoElement.querySelector('.picture__likes').textContent = likes;
  elementFragment.appendChild(photoElement);
})

elementTarget.appendChild(elementFragment);
