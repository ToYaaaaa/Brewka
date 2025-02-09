// slider About Us
const slides = document.querySelectorAll(".aboutus .aboutwrapper .Square");
index = 0;

function slider(i){
    slides.forEach((slide, idx) =>{
        slide.style.display = idx === i ? "block" : "none";
    });
};

function nextImage(){
    index = (index + 1) % index.length;
    slider(index);
};

slider(index);

setInterval(nextImage, 3000);