let arr = [
  {
    team: "CSK",
    pri: "yellow",
    sec: "green",
  },
  {
    team: "KKR",
    pri: "black",
    sec: "green",
  },
  {
    team: "RCB",
    pri: "red",
    sec: "black",
  },
  {
    team: "MI",
    pri: "blue",
    sec: "black",
  },{
    team:'SRH',
    pri:'orange',
    sec:'black'
  }
];

let btn = document.querySelector("#btn");
let h1 = document.querySelector("h1");

btn.addEventListener('click',function(){
    let num =Math.floor(Math.random()*arr.length);
    let winner = arr[num];
    h1.innerHTML = winner.team;
    h1.style.backgroundColor = winner.pri;
    h1.style.color = winner.sec;
})