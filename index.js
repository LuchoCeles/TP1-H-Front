document.addEventListener("DOMContentLoaded",function(){
let currentSlide =0;
const slides = document.querySelectorAll(".slide");

function showSlide(index){
    slides.forEach((slide, i)=>{
        if(i == index){
            slide.style.display = "block";
        }else{
            slide.style.display= "none";
        }
    });
}
 function nextSlide(){
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
 }
 setInterval(nextSlide,0)
});