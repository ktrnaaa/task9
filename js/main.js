
const changeBtn = document.querySelector(".btn1");
const endBtn = document.querySelector(".btn2");


let i = -1;
function changeColor(){
    i++;
    let arr = ['red','yellow','green'],
        circle = document.querySelectorAll('.circle');
    if(circle[i-1]) circle[i-1].style.backgroundColor = '';
    if(i == arr.length) i = 0;
    circle[i].style.backgroundColor = arr[i];
}

changeBtn.addEventListener('click', () => {

    changeColor()
})

function endColor(){

    i++;
    let arr = ['#666','#666','#666'],
        circle = document.querySelectorAll('.circle');
    if(circle[i-1]) circle[i-1].style.backgroundColor = '';
    if(i == arr.length) i = 0;
    circle[i].style.backgroundColor = arr[i];

}

endBtn.addEventListener('click', () => {
 endColor(  )
})