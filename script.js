
// For 1st IoS Button 
var iosBtn = document.querySelector(".ios-btn");

iosBtn.addEventListener("click", animateBtn);

function animateBtn() {
    iosBtn.classList.toggle("animation");
}


// For 1st Mac Button 
var macBtn = document.querySelector(".mac-btn");

macBtn.addEventListener("click", animatedBtn2);

function animatedBtn2() {
    macBtn.classList.toggle("animation");
}

//  For 2nd IoS Button
var iosBtn2 = document.querySelector(".ios2-btn");

iosBtn2.addEventListener("click", animateBtn3);

function animateBtn3() {
    iosBtn2.classList.toggle("animation");
}

// For 2nd Mac Button 
var macBtn2 = document.querySelector(".mac2-btn");

macBtn2.addEventListener("click", animatedBtn4);

function animatedBtn4() {
    macBtn2.classList.toggle("animation");
}