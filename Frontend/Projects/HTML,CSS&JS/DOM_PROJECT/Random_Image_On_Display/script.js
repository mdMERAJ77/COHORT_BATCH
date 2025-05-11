let btn = document.querySelector("button");

btn.addEventListener('click',function(){
    let imgArr=["img1.png","img2.png"];
    
    let newImgArr = imgArr.map((src)=>{
        let img = document.createElement("img");
        img.src=src;
        return img;
        
    });
    //pick random image
    let randomImg = newImgArr[Math.floor(Math.random()*newImgArr.length)]

    let x = Math.random()*90;
    let y = Math.random()*90;
    let rot = Math.random()*360;

    randomImg.style.left =`${x}%`;
    randomImg.style.top =`${y}%`;
    randomImg.style.rotate =`${rot}deg`;



   btn.insertAdjacentElement('afterend',randomImg);
});