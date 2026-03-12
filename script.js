
const navbarPara = document.getElementById('navbarPara');
const Input = document.getElementById('searchBox');
const button = document.getElementById('greetButton');
/* 
click event listener is added to the button which updates the paragraph text by adding the input
value to it.
*/
button.addEventListener('click',(event)=>{
    event.preventDefault(); 
    let name = Input.value;
    navbarPara.textContent+=','+' ' +name;
    console.log(name);
})
const redBox = document.getElementById('box1');
const blueBox = document.getElementById('box2');
const greenBox = document.getElementById('box3');
const yellowBox = document.getElementById('box4');
/*
click event listener is added which updates the background color of the boxes.
*/
redBox.addEventListener('click', (event)=>{
    event.preventDefault();
    redBox.style.backgroundColor = 'red';
})
blueBox.addEventListener('click', (event)=>{
    event.preventDefault();
    blueBox.style.backgroundColor = 'blue';
})
greenBox.addEventListener('click', (event)=>{
    event.preventDefault();
    greenBox.style.backgroundColor = 'green';
})
yellowBox.addEventListener('click', (event)=>{
    event.preventDefault();
    yellowBox.style.backgroundColor = 'yellow';
})