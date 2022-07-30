const bigBlock = document.querySelector('.big-picture');

const bigPhoto = bigBlock.querySelector('.big-picture__img img');

const countLikesOfBigPhoto = bigBlock.querySelector('.likes-count');

const countVisibleCommentOfBigPhoto = bigBlock.querySelector('.comments-count');

const descriptionOfBigPhoto = bigBlock.querySelector('.social__caption');

const commentsOfBigPhoto = bigBlock.querySelector('.social__comments');

const elLi = commentsOfBigPhoto.querySelectorAll('.social__comment')[0].cloneNode(true);

const commentsLoader = bigBlock.querySelector('.comments-loader');

const countAllCommentOfBigPhoto = bigBlock.querySelector('.social__comment-count');

commentsOfBigPhoto.innerHTML = '';

function closePopup() {
  bigBlock.classList.add('hidden');
  document.body.classList.remove('modal-open');
}

const cross = bigBlock.querySelector('.big-picture__cancel');
cross.addEventListener('click', () => {
  closePopup();
});

document.addEventListener('keydown', (evt) => {
  if(evt.keyCode === 'Escape') {
    closePopup();
  }
});

function createComment(dataAsObject) {
  const elImg = elLi.querySelector('.social__picture');
  elImg.src = dataAsObject.avatar;
  elImg.alt = dataAsObject.name;

  const elP = elLi.querySelector('.social__text');
  elP.textContent = dataAsObject.message;

  commentsOfBigPhoto.appendChild(elLi);

  return commentsOfBigPhoto;
}


export  {bigBlock, bigPhoto, countLikesOfBigPhoto, countVisibleCommentOfBigPhoto, descriptionOfBigPhoto, commentsOfBigPhoto, countAllCommentOfBigPhoto, commentsLoader, createComment };

