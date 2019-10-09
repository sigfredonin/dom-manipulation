console.log("Hello, world! -- dom-manipulation");

document.addEventListener('DOMContentLoaded', function() {
  let displayPromptButton = document.getElementById('displayPromptButton');
  let view = document.getElementById('color');
  displayPromptButton.addEventListener('click', function() {
    console.log('clicked!');
    let input = prompt('What is your favorite color?');
    console.log('input is ', input);
    view.innerHTML = input;
  });
});
