const form = document.querySelector('.form');
form.addEventListener('submit', oNsubmitForm);

function oNsubmitForm(event) {
  event.preventDefault();
  let delay = Number(form.delay.value);
  const step = Number(form.step.value)
  const amount = form.amount.value;

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay).then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    }).catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
    
    delay += step;
  }

}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
      

    }, delay);
  });
};