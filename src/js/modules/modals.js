const modals = () => {

    function modalShow(triggerSelector, modalSelector, closeSelector) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector);

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                document.body.style.overflow = 'hidden';
                modal.style.display = 'block';
            });
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = '';
            }
        });

        close.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        });
    }

    modalShow('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    modalShow('.phone_link', '.popup', '.popup .popup_close');

    function showAutoModal(modalSelector, time) {
        setTimeout(() => {
            document.querySelector(modalSelector).style.display = 'block';
            document.body.style.overflow = '';
        }, time);
    }

    // showAutoModal('.popup', 60000);

};

export default modals;