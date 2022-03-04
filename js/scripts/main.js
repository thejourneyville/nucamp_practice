const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

document.querySelector('h1').addEventListener('click', function() {
    alert('Ouch! Stop poking me!');
  });