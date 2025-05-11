let btn = document.querySelector("button");

btn.addEventListener("click", function () {
  let imageArr = ["img1.png", "img2.png",""];

  let newImageArr = imageArr.map((src) => {
    let img = document.createElement("img");
    img.src = src;
    //img.style.height = "150px"; // optional styling
    return img;
  });

  // Correct random selection
  let randomlyImg = newImageArr[Math.floor(Math.random() * newImageArr.length)];

  let x=(Math.random()*90).toFixed(3);
  let y=(Math.random()*90).toFixed(3);
  let rot =Math.random()*350;
  randomlyImg.style.left=`${x}%`;
  randomlyImg.style.top=`${y}%`;
  randomlyImg.style.rotate = `${rot}deg`


  document.body.append(randomlyImg);
});
