let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const whichBtn = e.currentTarget.classList;
        if(whichBtn.contains("decrease")) {
            count--;
        } else if(whichBtn.contains("increase")) {
            count++;
        } else {
            count = 0;
        }
        value.textContent = count;
    })
});