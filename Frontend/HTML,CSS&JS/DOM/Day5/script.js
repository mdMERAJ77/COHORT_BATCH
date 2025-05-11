
let btn = document.querySelector('button');
let dog = document.querySelector('#dog');
let lion = document.querySelector("#lion");

btn.addEventListener('click',function(){
    let dogSrc=dog.getAttribute('src');
    let lionSrc=lion.getAttribute('src');
    
    dog.setAttribute('src',lionSrc);
    lion.setAttribute('src',dogSrc);
    
});