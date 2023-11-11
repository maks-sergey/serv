                     import tabs from './modules/tabs';
                     import modal from './modules/modal';
                     import timer from './modules/timer';
                     import cards from './modules/cards';
                     import calc from './modules/calc';
                     import slider from './modules/slider';
                     import forms from './modules/forms';
                     import {openModal} from './modules/modal';



window.addEventListener('DOMContentLoaded', () => {  
      const modalTimerID = setTimeout(() => openModal('.modal', modalTimerID), 50000);    
        tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
        modal('[data-modal]', '.modal', modalTimerID);
        timer('.timer', '2024-01-01');
        cards();
        calc();
        slider({
            container: '.offer__slider',
            nextArrow: '.offer__slider-next',
            prevArrow: '.offer__slider-prev',
            totalCounter: '#total',
            currentCounter: '#current',
            wrapper: '.offer__slider-wrapper',
            field: '.offer__slider-inner',
            slide: '.offer__slide'
        });
        forms('form', modalTimerID);
});
