(() => {
  const refs = {
    openModalBtn: document.querySelector('[conacts-franchise-data-modal-open]'),
    closeModalBtn: document.querySelector('[conacts-franchise-data-modal-close]'),
    modal: document.querySelector('[conacts-franchise-data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();