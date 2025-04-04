export default class TelegramForm {
    constructor(token, chatId) {
        this.botToken = token; // Токен вашего бота
        this.chatId = chatId;  // Chat ID, куда будут отправляться сообщения
        this.apiUrl = `https://api.telegram.org/bot${this.botToken}/sendMessage`;
        this.init();
    }

    init() {
        const form = document.getElementById('feedbackForm');
        form.addEventListener('submit', (event) => {
            event.preventDefault(); // Предотвращаем стандартное поведение формы
            this.handleSubmit(form); // Обрабатываем отправку формы
        });
    }

    handleSubmit(form) {
        const name = form['name'].value;
        const phone = form['phone'].value;
        const arrivalDate = form['arrivalDate'].value;
        const departureDate = form['departureDate'].value;
        const apartments = form['select-apartments'];
        const selectedApartmentText = apartments.options[apartments.selectedIndex].text; // Получаем текст выбранного варианта
        const carPresence = form.querySelector('.checkbox__input').checked ? 'Да' : 'Нет';

        const message = `
Новый запрос на подбор номера:

👤  <b>Ф.И.О: </b> ${name}
☎️  <b>Телефон: </b> ${phone}
🗓  <b>Дата заезда: </b> ${arrivalDate}
🗓  <b>Дата выезда: </b> ${departureDate}
🏠  <b>Номер: </b> ${selectedApartmentText}
🚘  <b>Наличие автомобиля: </b> ${carPresence}
        `;

        this.sendMessage(message).then(() => {
            alert('Заявка отправлена!');
            form.reset(); // Сбросить форму

            // Сделать свое модальное окно
        });
    }

    sendMessage(message) {
        const data = {
            chat_id: this.chatId,
            text: message,
            parse_mode: 'HTML'
        };

        return fetch(this.apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка при отправке сообщения в Telegram');
            }
            return response.json();
        })
        .catch(error => {
            console.error(error);
        });
    }
}
