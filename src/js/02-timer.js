import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const startBtn = document.querySelector('[data-start]');
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');

startBtn.addEventListener('click', onStart);
startBtn.setAttribute('disabled', 'disabled');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) { 
    if ((selectedDates[0].getTime() - Date.now()) < 0) {
        Notiflix.Notify.failure('Please choose a date in the future');
        startBtn.setAttribute('disabled', 'disabled');
    } else {
      startBtn.removeAttribute('disabled');
    }
  },
};

let calendar = flatpickr('#datetime-picker', options);

function onStart() {
  setInterval(() => {
    if (calendar.selectedDates[0] - Date.now() >= 0) {
      let timeLeft = convertMs(calendar.selectedDates[0] - Date.now());
      dataDays.textContent = addLeadingZero(timeLeft.days);
      dataHours.textContent = addLeadingZero(timeLeft.hours);
      dataMinutes.textContent = addLeadingZero(timeLeft.minutes);
      dataSeconds.textContent = addLeadingZero(timeLeft.seconds);
    }
  }, 1000);
}

function addLeadingZero(value) {
     return value.toString().padStart(2, 0);   
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
