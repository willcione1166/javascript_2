
const enterBtn = document.getElementById('enterBtn');
const itemInput = document.getElementById('item-input');
const hiddenButton = document.getElementById('enterBtn1');

const item =  document.getElementById('item');
const item1 =  document.getElementById('item1');
const item0 =  document.getElementById('item0');
const contentDiv = document.getElementById('contentDiv');
const containerEl = document.getElementById('container');




var count = 0;
function clickFunc() {
  count += 1;
  const lBtn = document.getElementById('enterButton');
  var click = document.createElement('div').innerHTML = count;
  console.log(count);
  

 
    console.log(count);
   
     
    };clickFunc(); // placed inside the click function
    
    
    console.log(itemInput)
    


document.addEventListener("DOMContentLoaded", buttonClickHandler);

function buttonClickHandler() {
  var buttons = document.getElementsByClassName('button');
  
  for(var i = 0; i < buttons.length; i++) {
     buttons[i].addEventListener('click', function() {
       if(this.value === 'X') {
         this.value = 'O';
         let itemsToBeListed = document.createElement('li');
    
    itemsToBeListed.innerText = itemInput.value;
    itemsToBeListed.classList.add('textual');
    itemsToBeListed.style.width = 440 + 'px';
    item1.appendChild(itemsToBeListed);
    itemsToBeListed.addEventListener('click', ()=>{itemsToBeListed.style.textDecoration = 'line-through'});
    itemsToBeListed.addEventListener('dblclick', ()=>{itemsToBeListed.remove(itemsToBeListed)});
    console.log('enter button clicked');
       } else {
         this.value = 'X';
         let itemsToBeListed = document.createElement('li');
         itemsToBeListed.textContent = itemInput.value;
         itemsToBeListed.classList.add('textual');
         itemsToBeListed.style.width = 440 + 'px';
         item0.appendChild(itemsToBeListed);
         itemsToBeListed.addEventListener('click', ()=>{itemsToBeListed.style.textDecoration = 'line-through'});
         itemsToBeListed.addEventListener('dblclick', ()=>{itemsToBeListed.remove(itemsToBeListed)});
         console.log('enter button clicked');
       }
     });
  }
}


