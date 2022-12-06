//스크롤 
let moveChk = true;
let bg = document.querySelector(".cont2 > .bg");

console.log(secStart);

window.addEventListener("scroll",()=>{
let scTop =window.scrollY;

for(let i = 0; i < gnb.length; i++){
gnb[i].classList.remove("on");
}


if(scTop < secStart[1]){
    document.querySelector(".scroll").style.opacity =  "-0.0"+ scTop ;
    gnb[0].classList.add("on");
    if(scTop == 0){
        document.querySelector(".scroll").style.opacity =  1;
    }
}
else if(scTop >= secStart[1] &&  scTop < secStart[2] ){
    gnb[1].classList.add("on");
    // bg.style.width = scTop/100 * 3 + "%";
    // bg.style.height =  scTop/100 * 3 + "%";
    // bg.style.left = -1 * scTop/100 + "px";
    // bg.style.top = -1 * scTop/100 + "px";

    console.log(scTop)

    if(moveChk == true){
        countValue.forEach((el)=>{
            countUp(
                el.plus,
                el.tag,
                el.tag1,
                el.Compelet,
                el.loop
            );
        });
    }
}
else if (scTop >= secStart[2] &&  scTop < 5000){
    gnb[2].classList.add("on");

}
else if (scTop >= 5000){
    gnb[3].classList.add("on");
}
console.log(scTop)
});



for(let j =0 ; j < gnb.length ; j++){
gnb[j].addEventListener("click",function(e){
    e.preventDefault();
    // 해당 메뉴를 클릭했을 때 해당 중간 구역의 시작 위치값을 받아오는 작업 
    let scrollMove = cont[j].offsetTop;

    //스크롤바 위치값을 부드럽게 이동시키자
    window.scrollTo({
        // top:세로스크롤바이동될위치값,
        // left:가로스크롤바이동될위치값,
        // behavior:"auto","smooth"
        top:scrollMove,
        behavior:"smooth"
    });
});
}
