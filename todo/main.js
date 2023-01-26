const enterBtn = document.getElementById('enterBtn');
const itemInput = document.getElementById('item-Input');
const list = document.querySelectorAll('.list');
console.log(list);

 

for(let i = 0; i < list.length; i++){
    list[i].addEventListener('click', function(){
        listInput.value = this.textContent;
        enterBtn.onclick();
        listInput.value = '';
        listInput.focus();
        listInput.select();
        console.log(listInput.value);
})};