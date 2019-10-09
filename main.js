console.log("Hello, world! -- dom-manipulation");

document.addEventListener('DOMContentLoaded', function() {
  let displayPromptButton = document.getElementById('displayPromptButton');
  let viewInputColor = document.getElementById('color');
  let viewColorList = document.getElementById('colorList');
  displayPromptButton.addEventListener('click', function() {
    console.log('clicked!');
    let input = prompt('What is your favorite color?');
    console.log('input is ', input);
    viewInputColor.innerHTML = "Your favorite color is: " + input;
    let listItem = document.createElement('li');
    listItem.innerHTML = input;
    viewColorList.appendChild(listItem);
  });
});
