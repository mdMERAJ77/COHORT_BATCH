
let btn= document.querySelector("#btn");
let percent = document.querySelector("#percent");
let growth = document.querySelector("#growth")
let grow =0;
btn.addEventListener('click',function(){
    let int = setInterval(function(){
        if(grow<=100){
            percent.innerHTML= `${grow}%`;
            growth.style.width=`${grow}%`
            grow++;
        }
        else{
            btn.style.opacity=0.5; 
            btn.innerHTML = 'Downloaded'
            clearInterval(int); 
                     
        }
    },50)
    
});
