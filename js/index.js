// Your code goes here
const tripTitle1 = document.querySelector("body > div > section.content-pick > div:nth-child(1) > h4");
const buttonPress1 = document.querySelector("body > div > section.content-pick > div:nth-child(1) > div");
buttonPress1.addEventListener('click', function(event){
  buttonPress1.textContent = `Thank you!`;
  console.log(event);
  tripTitle1.style.backgroundColor = '#EBDA91';
});

const buttonPress2 = document.querySelector("body > div > section.content-pick > div:nth-child(2) > div");
const tripTitle2 = document.querySelector("body > div > section.content-pick > div:nth-child(2) > h4");
buttonPress2.addEventListener('click', function(event){
  buttonPress2.textContent = `Thank you!`;
  console.log(event);
  tripTitle2.style.backgroundColor = '#EBDA91';
});

const buttonPress3 = document.querySelector("body > div > section.content-pick > div:nth-child(3) > div");
const tripTitle3 = document.querySelector("body > div > section.content-pick > div:nth-child(3) > h4");
buttonPress3.addEventListener('click', function(event){
  buttonPress3.textContent = `Thank you!`;
  console.log(event);
  tripTitle3.style.backgroundColor = '#EBDA91';
});

const navLinks = document.querySelector('.nav');
navLinks.addEventListener('mouseover', function(event){
  event.target.style.color = 'pink';
});

const navNorm = document.querySelector('.nav');
navNorm.addEventListener('mouseout', function(event){
  event.target.style.color = 'black';
});
// const headerVanish = document.querySelector("header");
// headerVanish.addEventListener('onscroll', function(event){
// event.target.style.display = 'none';
// console.log(event);
// })
const textReveal = document.querySelector("body > div > section:nth-child(2) > div.text-content > h2");
const hiddenInfo1 = document.querySelector("body > div > section:nth-child(2) > div.text-content > p:nth-child(2)");
const hiddenInfo2 = document.querySelector("body > div > section:nth-child(2) > div.text-content > p:nth-child(3)")
textReveal.addEventListener('mouseover', function(event) {
  hiddenInfo1.classList.toggle('hidden');
  hiddenInfo2.classList.toggle('hidden');
});

const textReveal2 = document.querySelector("body > div > section.content-section.inverse-content > div.text-content > h2");
const hiddenInfo3 = document.querySelector("body > div > section.content-section.inverse-content > div.text-content > p:nth-child(2)");
const hiddenInfo4 = document.querySelector("body > div > section.content-section.inverse-content > div.text-content > p:nth-child(3)");
textReveal2.addEventListener('mouseover', function(event) {
  hiddenInfo3.classList.toggle('hidden');
  hiddenInfo4.classList.toggle('hidden');
});

