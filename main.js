console.log("Hello, world! -- dom-manipulation");

document.addEventListener('DOMContentLoaded', function() {
  let displayPromptButton = document.getElementById('displayPromptButton');
  displayPromptButton.addEventListener('click', function() {
    console.log('clicked!');
  });
});
