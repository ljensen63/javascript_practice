const para = document.createElement('p');
const h3 = document.createElement('h3');
const div = document.createElement('div');
const h1 = document.createElement('h1');
const para2 = document.createElement('p');
document.body.appendChild(para);
document.body.appendChild(h3);
div.appendChild(h1);
div.appendChild(para2);
document.body.appendChild(div);
para.textContent = 'Hey! I\'m red';
para.style.color = 'red';
h3.textContent = 'I\'m a blue h3!'
h3.style.color = 'blue';
div.style.border = '1px solid black';
div.style.backgroundColor = 'pink';
h1.textContent = 'I\'m in a div';
para2.textContent = 'ME TOO!';
const btn = document.querySelector('#btn');
btn.addEventListener('click', function (e) {
    console.log(e.target);
  });
  btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });
  
  const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});