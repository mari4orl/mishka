var cartIconElems = document.querySelectorAll('.order'); // Название переменной во множественном числе, нам массив елементов возвращается
var modalElem = document.querySelector('.modal');
var overlayElem = document.querySelector('.modal__overlay');
var addBtnElem = document.querySelector('.modal__add');

var ESC_KEYCODE = 27


function onEscKeyDown(e) {
  if(e.keyCode === ESC_KEYCODE) {
    modalElem.classList.add('modal--closed');
  }
}

function openModal() {
  if (modalElem.classList.contains('modal--closed')) {
    modalElem.classList.remove('modal--closed');
    document.addEventListener('keydown', onEscKeyDown)
  }
}

function closeModal() {
  if (!modalElem.classList.contains('modal--closed')) {
    modalElem.classList.add('modal--closed');
    document.removeEventListener('keydown', onEscKeyDown)
  }
}


for (var i = 0; i < cartIconElems.length; i++) {
  var cartIconElem = cartIconElems[i];
  cartIconElem.addEventListener('click', function(evt) {
  evt.preventDefault();
  openModal();
  });
}

addBtnElem.addEventListener('click', closeModal);
overlayElem.addEventListener('click', closeModal);
