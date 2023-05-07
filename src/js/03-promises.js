
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

const form = document.querySelector('.form');

function onSubmitCreatePromises(e) {
  e.preventDefault();
  const firstDelay = e.currentTarget.elements.delay.value;
  const stepDelay = e.currentTarget.elements.step.value;
  const amount = e.currentTarget.elements.amount.value;

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay).then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    }).catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
    
    delay += step;
  }

  form.reset();
}
