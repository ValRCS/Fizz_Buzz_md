window.onload = main;

// You can add more functions here 
function main() {
    console.log("Started Main");
    let mybut = document.getElementById('but1');
    // mybut.onclick = myAlert;
    mybut.addEventListener('click', myAlert);
    mybut.addEventListener('click', myAlert2);

    const mydiv = document.getElementById('mydiv');
    mydiv.style.backgroundColor = 'grey';
    //alert('hello started');
    //Here you add your divs maybe call them from another function for clarity
    const childdivs = mydiv.getElementsByTagName('div');
    for (let i = 0; i < childdivs.length; i++) {
        if (i % 2) {
            // childdivs[i].style.backgroundColor = 'red';
            childdivs[i].className += 'myred';
        } else {
            childdivs[i].className += 'mygreen';
        }

    }
}

function myAlert() {
    // alert("Called my alert function");
    console.log("Called myAlert ONE");
}
function myAlert2() {
    console.log("Called myAlert2");
}
