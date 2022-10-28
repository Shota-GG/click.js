let num=document.querySelector('.numbers');
let btn=document.querySelector('.btn1');
let btn2=document.querySelector('.btn2');
let btn3=document.querySelector('.btn3');

let count=0;
// num.innerHTML=count

btn.addEventListener("click", function(){
    count--
    num.innerHTML=count
    
    num.style.color='red'
})
btn3.addEventListener("click", function(){
    count++
    num.innerHTML=count
    
    num.style.color='green'
})
btn2.addEventListener("click", function(){
    count=0
    num.innerHTML=count
    
    num.style.color='black'
})

