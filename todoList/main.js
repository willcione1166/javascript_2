const addButton = document.getElementById('addButton');
const toDocontainer = document.getElementById('toDoContainer');
const inputField = document.getElementById('inputField');

addButton.addEventListener('click', () => {
    let paragragh = document.createElement('p');
    paragragh.innerText = inputField.value;
    paragragh.classList.add('paragragh-styling');
    toDocontainer.appendChild(paragragh);
    console.log('adBtn clicked');
    inputField.value = '';
    paragragh.addEventListener('click', () => {
        paragragh.style.textDecoration = 'line-through';
    });
    paragragh.addEventListener('dblclick', () => {
        paragragh.remove();
    });
    paragragh.addEventListener('dblclick', () => {
        toDocontainer.removeChild();
    });
;});