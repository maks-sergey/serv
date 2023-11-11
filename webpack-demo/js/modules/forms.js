import {closeModal, openModal} from './modal';
import {postData} from '../services/services';


function forms(formSelector, modalTimerID) {
        
                //Forms / Отправка на сервер


                const forms = document.querySelectorAll(formSelector);

                const message = {
                        loading: 'Загрузка',
                        success: 'Спасибо, скоро мы свяжемся с вами',
                        failure: 'Что то пошло не так...'
                };

                forms.forEach(item => {
                        bindPostData(item);
                });

                function bindPostData(form) {
                        form.addEventListener('submit', (e) => {
                                e.preventDefault();

                                const statusMessage = document.createElement('div');
                                statusMessage.classList.add('status');
                                statusMessage.textContent = message.loading;
                                form.append(statusMessage);

                                const formData = new FormData(form);

                                const json = JSON.stringify(Object.fromEntries(formData.entries()));


                        postData('http://localhost:3000/requests', json)
                                .then(data => {
                                        console.log(data);
                                        showThanksModal(message.success);
                                        statusMessage.remove();
                                }).catch(() => {
                                        showThanksModal(message.failure);    
                                }).finally(() => {
                                        form.reset();
                                })

                        })
                }


                function showThanksModal(message) {
                      const prevModalDialog = document.querySelector('.modal__dialog');
                      
                      prevModalDialog.style.display = 'none';
                      
                      openModal('.modal', modalTimerID);
                      
                      const thanksModal = document.createElement('div');
                                thanksModal.classList.add('modal__dialog');
                                thanksModal.innerHTML = `
                                <div class="modal__content">
                                <div class="modal__close" data-close>×</div>
                                <div class="modal__title">${message}</div>
                                </div>
                                `;
        document.querySelector('.modal').append(thanksModal);

                      setTimeout(() => {
                        thanksModal.remove();
                        prevModalDialog.style.display = 'block';
                        closeModal('.modal');
                      }, 4000);
                }

                fetch('http://localhost:3000/menu')
                        .then(data => data.json())
                        .then(res => console.log(res));
}

export default forms;