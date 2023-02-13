import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const form = document.querySelector('.form');

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  
  event.preventDefault();

  let delay = Number(form.elements.delay.value);
  let step = Number(form.elements.step.value);
  let amount = Number(form.elements.amount.value);

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay);
    delay += step;
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  setTimeout(() => {
    if (shouldResolve) {
      Promise.resolve({ position, delay }).then(({ position, delay }) =>
        //console.log(`✅ Fulfilled promise ${position} in ${delay}ms`)
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        )
      );
    } else {
      Promise.reject({ position, delay }).catch(({ position, delay }) =>
        //console.log(`❌ Rejected promise ${position} in ${delay}ms`)
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
      );
    }
  }, delay);
}
