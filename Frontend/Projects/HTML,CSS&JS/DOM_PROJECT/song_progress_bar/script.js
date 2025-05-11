let btn = document.querySelector("button");
let percent = document.querySelector("#percent");
let growth = document.querySelector("#growth");

let grow =0;

btn.addEventListener('click',function(){
    let int = setInterval(function(){
        if(grow<=100){
            percent.innerHTML = `${grow++}%`;
            growth.style.width=`${grow++}%`;
        }
        else{
            setTimeout(function(){
                btn.style.opacity = 0.5;
                btn.innerHTML = 'Downloaded'
                clearInterval(int);
            })
        }
    },50);
})