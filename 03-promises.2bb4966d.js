const e=document.querySelector(".form");function o(e,o){const t=Math.random()>.3;return new Promise(((n,i)=>{setTimeout((()=>{t?n({position:e,delay:o}):i({position:e,delay:o})}),o)}))}e.addEventListener("submit",(function(t){t.preventDefault();let n=Number(e.delay.value);const i=Number(e.step.value),l=e.amount.value;for(let e=1;e<=l;e+=1)o(e,n).then((({position:e,delay:o})=>{console.log(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{console.log(`❌ Rejected promise ${e} in ${o}ms`)})),n+=i}));
//# sourceMappingURL=03-promises.2bb4966d.js.map
