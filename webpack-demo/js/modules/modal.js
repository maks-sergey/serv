function closeModal(modalSelector) {
  const modal = document.querySelector(modalSelector);
  modal.style.display = 'none';
  document.body.style.overflow = '';
}


function openModal(modalSelector, modalTimerID) {
  const modal = document.querySelector(modalSelector);
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
  console.log(modalTimerID);
  if (modalTimerID) {
    clearInterval(modalTimerID);
  }
  
  }


function modal(triggerSelector, modalSelector, modalTimerID) {
            // Modal


            const modalTrigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector);

            modalTrigger.forEach(btn => {
              btn.addEventListener('click', () => openModal(modalSelector, modalTimerID));
            });          

            modal.addEventListener('click', (e) => {
              if (e.target === modal || e.target.getAttribute('data-close') == "") {
                    closeModal(modalSelector);
              }
            });

            document.addEventListener('keydown', (e) => {
              if (e.code === 'Escape' && modal.style.display === 'block') {
                      closeModal(modalSelector);
              }
            });



         

            function showModalByScroll() {
                       if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
                              openModal(modalSelector, modalTimerID);
                              window.removeEventListener('scroll', showModalByScroll);
                      }
              }

            window.addEventListener('scroll', showModalByScroll);





}

export default modal;

export {closeModal};
export {openModal};