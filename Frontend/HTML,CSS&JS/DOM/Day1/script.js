// 4 pillar of DOM
//1: Selection of Element
//2: Changing HTML
//3: Changing CSS
//4: Event Listener

// let h1 = document.querySelectorAll('h1');
// h1[0].innerHTML = "changed....";

let btn = document.querySelector("button");
let h5 = document.querySelector("h5");

let flag = 0;

btn.addEventListener("click", function () {
  if (flag === 0) {
    h5.textContent = "Friend";
    h5.style.color = "green";
    btn.innerHTML = "Remove";
    flag=1;
  }
  else{
    h5.textContent = "Stranger";
    h5.style.color = "red";
    btn.innerHTML = "Add Friend";
    flag=0;
  }
});
