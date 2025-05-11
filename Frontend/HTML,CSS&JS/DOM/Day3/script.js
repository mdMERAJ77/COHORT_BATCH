let h5 = document.querySelector("h5");
let btn = document.querySelector("button");

btn.addEventListener('click',function(){
    h5.innerHTML='Request Sending...';
    h5.style.color = 'yellow';
    setTimeout(function(){
        h5.textContent = 'Friends';
        h5.style.color = "green";
        btn.innerHTML='Remove Friend'
    },3000);
});