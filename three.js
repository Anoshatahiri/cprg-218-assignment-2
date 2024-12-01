// Assigning my buttons and sections so i can recall 

const button1 = document.getElementById ("b1");
const button2 = document.getElementById ("b2");
const button3 = document.getElementById ("b3");
const button4 = document.getElementById ("b4");

const section1 = document.getElementById ("Nhilism");
const section2 = document.getElementById ("Existentialism");
const section3 = document.getElementById ("Determinism");
const section4 = document.getElementById ("Idealism");

function hideAllSections() {
    section1.classList.add ("invisible")
    section2.classList.add ("invisible")
    section3.classList.add ("invisible")
    section4.classList.add ("invisible")
}


button1.addEventListener("click", function () {
    hideAllSections();
    section1.classList.remove("invisible");

})

button2.addEventListener("click", function () {
    hideAllSections();
    section2.classList.remove("invisible");

})

button3.addEventListener("click", function () {
    hideAllSections();
    section3.classList.remove("invisible");

})

button4.addEventListener("click", function () {
    hideAllSections();
    section4.classList.remove("invisible");

})