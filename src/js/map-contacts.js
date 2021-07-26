(() => {
  const refs = {
    openModalBtn: document.querySelector('[conacts-data-modal-open]'),
    closeModalBtn: document.querySelector('[conacts-data-modal-close]'),
    modal: document.querySelector('[conacts-data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();