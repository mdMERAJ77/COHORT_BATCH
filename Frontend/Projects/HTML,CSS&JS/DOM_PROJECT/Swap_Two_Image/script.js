let eagle = document.querySelector("#eagle");
let kingfisher = document.querySelector("#kingfisher");
let btn = document.querySelector("button");

btn.addEventListener("click",function(){
    let eagleSrc=eagle.getAttribute('src');
    let kingfisherSrc=kingfisher.getAttribute('src');

    eagle.setAttribute('src',kingfisherSrc);
    kingfisher.setAttribute('src',eagleSrc);
});