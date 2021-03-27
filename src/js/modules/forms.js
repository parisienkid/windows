const form = () => {

    const forms = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input'),
          inputsNumber = document.querySelectorAll('input[name="user_phone"]');

    const message = {
        waiting: 'Загрузка...',
        success: 'Все прошло успешно!',
        fail: 'Что-то пошло не так...',
    };

    inputsNumber.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '');
        });
    });

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.waiting;

        const res = await fetch(url, {
            method: 'POST',
            body: data,
        });

        return await res.text();
    };

    const resetInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
    };

    forms.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            const messageStatus = document.createElement('div');
            messageStatus.classList.add('status');

            item.appendChild(messageStatus);

            const formData = new FormData(item);

            postData('assets/server.php', formData)
                .then(res => {
                    messageStatus.textContent = message.success;
                    console.log(res);
                })
                .catch(() => {
                    messageStatus.textContent = message.fail;
                })
                .finally(() => {
                    resetInputs();
                    setTimeout(() => {
                        messageStatus.remove();
                    }, 5000);
                });
        });
    });
};

export default form;