import {createPhotoObjects, PHOTO_COUNT} from './data.js';
import {bigBlock, bigPhoto, countLikesOfBigPhoto, countVisibleCommentOfBigPhoto, descriptionOfBigPhoto, commentsOfBigPhoto, countAllCommentOfBigPhoto, commentsLoader, createComment } from'./display_big.js';

const elementTemplate = document.querySelector('#picture').content.querySelector('.picture');

const elementTarget = document.querySelector('.pictures');

const arrayOfPhotos = createPhotoObjects(PHOTO_COUNT);

const elementFragment = document.createDocumentFragment();

arrayOfPhotos.forEach(({url, likes, comment, description}) => {
  const photoElement = elementTemplate.cloneNode(true);
  photoElement.querySelector('.picture__img').src = url;
  photoElement.querySelector('.picture__comments').textContent = comment.length;
  photoElement.querySelector('.picture__likes').textContent = likes;
  photoElement.addEventListener('click', function () {
    bigBlock.classList.remove('hidden');
    bigPhoto.src = url;
    countLikesOfBigPhoto.textContent = likes;
    countVisibleCommentOfBigPhoto.textContent = comment.length;
    descriptionOfBigPhoto.textContent = description;
    document.body.classList.add('modal-open');
    commentsOfBigPhoto.innerHTML ='';
    countAllCommentOfBigPhoto.classList.add('hidden');
    commentsLoader.classList.add('hidden');


    for(let i = 0; i < comment.length; i++) {
      createComment(comment[i]);
    }
  });
  elementFragment.appendChild(photoElement);
});

elementTarget.appendChild(elementFragment);

export {elementTarget};
