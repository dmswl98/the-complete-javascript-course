const $showModalBtn = document.querySelectorAll('.show-modal');
const $closeModalBtn = document.querySelector('.close-modal');
const $modal = document.querySelector('.modal');
const $overlay = document.querySelector('.overlay');

const toggleModal = function () {
  $modal.classList.toggle('hidden');
  $overlay.classList.toggle('hidden');
};

$showModalBtn.forEach((btn) => {
  btn.addEventListener('click', toggleModal);
});

$closeModalBtn.addEventListener('click', toggleModal);
$overlay.addEventListener('click', toggleModal);

document.addEventListener('keydown', (e) => {
  const opened = !$modal.classList.contains('hidden');
  if ((e.key = 'Escape' && opened)) toggleModal();
});
