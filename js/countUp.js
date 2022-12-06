let secStart = [];
let cont = document.querySelectorAll(".cont");

let skill_bar = document.querySelector(".skill_bar");

let gnb = document.querySelectorAll(".gnb >li");

// 반복문 이용해서 cont 의 시작 위치값 받아오기 

for(let i = 0; i < cont.length; i++){
    secStart [i]= cont[i].offsetTop;
}






function countUp(inc,sel,sel1,des,speed){
    moveChk = false;
    let num = 0;
    let desChange = "";

    let autoCount = setInterval(function(){
        num += inc;
        // document.querySelector(sel).innerHTML = num +"%";
        document.querySelector(sel1).style.width = num + "%";
       
        if(num >= des){
            clearInterval(autoCount);
            desChange=des;
            // document.querySelector(sel).innerHTML = desChange +"%";
        }
    },speed);
}


let countValue =[
    {
        plus:10,
        tag:".count1",
        tag1:".skill_bar1",
        Compelet:100,
        loop:80
    },
    {
        plus:10,
        tag:".count2",
        tag1:".skill_bar2",
        Compelet:100,
        loop:80
    },
    {
        plus:10,
        tag:".count3",
        tag1:".skill_bar3",

        Compelet:100,
        loop:80
    },
    {
        plus:10,
        tag:".count4",
        tag1:".skill_bar4",

        Compelet:100,
        loop:80
    }
];