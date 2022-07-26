const bigBlock = document.querySelector('.big-picture');

const bigPhoto = bigBlock.querySelector('.big-picture__img img');

const countLikesOfBigPhoto = bigBlock.querySelector('.likes-count');

const countVisibleCommentOfBigPhoto = bigBlock.querySelector('.comments-count');

const descriptionOfBigPhoto = bigBlock.querySelector('.social__caption');

const commentsOfBigPhoto = bigBlock.querySelector('.social__comments');

const commentsLoader = bigBlock.querySelector('.comments-loader');

const countAllCommentOfBigPhoto = bigBlock.querySelector('.social__comment-count');

function closePopup() {
  bigBlock.classList.add('hidden');
  document.body.classList.remove('modal-open');
}

const cross = bigBlock.querySelector('.big-picture__cancel');
cross.addEventListener('click', function () {
  closePopup();
});

document.addEventListener('keydown', function (evt) {
  if(evt.keyCode === 27) {
    closePopup();
  }
});

function createComment(dataAsObject) {
  let elLi = document.createElement('li');
  elLi.classList.add('social__comment');

  let elImg = document.createElement('img');
  elImg.classList.add('social__picture');
  elImg.src = dataAsObject.avatar;
  elImg.alt = dataAsObject.name;
  elImg.setAttribute('width', '35');
  elImg.setAttribute('height', '35');
  elLi.appendChild(elImg);

  let elP = document.createElement('p');
  elP.classList.add('social__text');
  elP.textContent = dataAsObject.message;
  elLi.appendChild(elP);

  commentsOfBigPhoto.appendChild(elLi);

  return commentsOfBigPhoto;
}


export  {bigBlock, bigPhoto, countLikesOfBigPhoto, countVisibleCommentOfBigPhoto, descriptionOfBigPhoto, commentsOfBigPhoto, countAllCommentOfBigPhoto, commentsLoader, createComment }

