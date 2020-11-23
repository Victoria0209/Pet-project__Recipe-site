let body = document.querySelector('body');
let button = document.querySelector(".button");
button.onclick = function(){
    console.log('Кнопка нажата!');
    body.classList.toggle('black-style');
    body.classList.toggle('white-style');
}
// let changeElements = document.querySelectorAll('.black-style');
// let button = document.querySelector(".button");
// button.onclick = function(){
//     console.log('Кнопка нажата!');
//     console.log('changeElements', changeElements)
//     changeElements.forEach((elem)=>{
//         elem.classList.toggle('black-style');
//         elem.classList.toggle('white-style');
//     })
//     // changeElements.classList.toggle('black-style');
//     // changeElements.classList.toggle('white-style');
// }