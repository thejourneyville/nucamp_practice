const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
const para = document.querySelector('p');


document.querySelector('h1').addEventListener('click', function() {
    const useThis = document.createTextNode(`OMG `)
    para.appendChild(useThis);
  });