import Header from "./Header.js";
import { MySwiper, MySwiperTwo, MySwiperReviews } from "./Slider.js";
import CircleText from './CircleText.js';
import LightboxHandler from "./LightboxHandler.js"; 
import TelegramForm from "./TelegramForm.js"; 


new Header()
new MySwiper();
new MySwiperTwo();
new MySwiperReviews();
// new TelegramForm('8189402166:AAFs4dwTUk_3cIJrRaBWXxqJccehBBAm81k', '5625082869');
new Datepicker('#arrivalDate');
new Datepicker('#departureDate');
new TelegramForm('8189402166:AAFs4dwTUk_3cIJrRaBWXxqJccehBBAm81k', '5625082869');
new CircleText('.circle__text', 'АРЕНДА ДОМИКОВ');
new LightboxHandler();

