

let trackyourcomplaint =document.getElementById("trackyourcomplaint")
function createresponse(){
    let line =``
    trackyourcomplaint.innerHTML=line;
}


let progressbarvalue = document.getElementById('ddeliverryprogress').value;
console.log(progressbarvalue);

let step1= document.querySelector(".first-step");
let step2= document.querySelector(".second-step");
let step3= document.querySelector(".third-step");
let step4= document.querySelector(".four-step");
let word1=document.querySelector("#conformword");
let word2=document.querySelector("#Processingword");
let word3=document.querySelector("#onwayword");
let word4=document.querySelector("#delivieryword");




if(progressbarvalue > 0){
    step1.style.backgroundColor = '#7A4B9E';
    word1.style.color="#7A4B9E";
}
if(progressbarvalue >= 25){
    step2.style.backgroundColor = '#7A4B9E';
    word2.style.color="#7A4B9E";

}
if(progressbarvalue >= 60){
    step3.style.backgroundColor = '#7A4B9E';
    word3.style.color="#7A4B9E";

}
if(progressbarvalue ===100){
    step4.style.backgroundColor = '#7A4B9E';
    word4.style.color="#7A4B9E";

}