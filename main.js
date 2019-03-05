window.onload = main;

// You can add more functions here 
function main() {
    const mainstate = {
        mprop1: "mainpropertyvalue1",
        mprop2: [1, 2, 3, 56, 6]
    }

    const myAlert = () => {
        console.log("some Alert");
    }

    console.log("Started Main");
    let mybut = document.getElementById('but1');
    // mybut.onclick = myAlert;
    mybut.addEventListener('click', myAlert);
    mybut.addEventListener('click', myAlert2);

    $("p#mypar").html("New Paragraph text");
    // $("div > div").html("New div text");

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
        childdivs[i].addEventListener('mouseover', handleDivs);
        childdivs[i].addEventListener('mouseout', handleDivsLeave);
        childdivs[i].divstate = {
            myclassName: childdivs[i].className,
            extraProp: 'some more state'
        }
    }

    function myAlert2() {
        console.log("Called myAlert2");
        console.log("MainSTATE" + JSON.stringify(this.mainstate));
    }

    function handleDivs(ev) {
        console.log(ev.target.tagName);
        if (ev.target.tagName !== 'DIV') {
            console.log("Target is not Div! " + ev.target);
            return;
        }
        console.log("Handling Divs");
        console.log(JSON.stringify(ev.target.style.backgroundColor));
        // ev.target.style.background = 'pink';
        ev.target.className = 'mypurple';
    }

    function handleDivsLeave(ev) {
        console.log(ev.target.tagName);
        if (ev.target.tagName !== 'DIV') {
            console.log("Target is not Div! " + ev.target);
            return;
        }
        console.log("Handling Divs Leave");
        console.log(JSON.stringify(ev.target.style.backgroundColor));
        // ev.target.style.background = '';
        ev.target.className = ev.target.divstate.myclassName;

    }
}


