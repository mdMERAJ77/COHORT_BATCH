//HTML Selection
let box = document.querySelector("#box");
let btn = document.querySelector("#btn");

//target button
btn.addEventListener('click',function(){
    //code logic
    let c1 = Math.floor(Math.random()*256);
    let c2 = Math.floor(Math.random()*256);
    let c3 = Math.floor(Math.random()*256);

    //set color on box
    box.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
})