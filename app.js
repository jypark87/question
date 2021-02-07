const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
// let okButton = document.createElement('button');
// okButton.textContent = 'OK';

const listElements = document.querySelectorAll('li');
const listItems = [];
for (let i = 0; i < listElements.length; i++){
  listItems.unshift(listElements[i].textContent);
}

// Add list item
addItemButton.addEventListener('click', () => {
  // Check for duplicate entry and only add new items.
  if (!listItems.includes(addItemInput.value)) {
    console.log('new item: ' + addItemInput.value + '!');
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li');
    li.textContent = addItemInput.value;
    listItems.unshift(addItemInput.value);

    ul.appendChild(li);
  } else {
    console.log('dupcliate');
    let error = document.createElement('p');
    error.className = 'errorDupe';
    error.textContent = 'Item is already in the list.';
    error.style.font = 'italic 10px arial,serif';
    error.style.color = 'red';

    listDiv.appendChild(error);
  }
  addItemInput.value = '';
});

// If error message has been displayed, remove it on click of input field
 let errorDupe = document.querySelector('p.errorDupe');
 addItemInput.addEventListener('click', () => {listDiv.removeChild(document.querySelector('p.errorDupe'))});
// addItemInput.addEventListener('click', () => {listDiv.removeChild(errorDupe)});
