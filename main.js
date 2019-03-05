window.onload = main;

const appState = {

    contentId: "contentbox",
    begId: "startVal",
    endId: "endVal",
    fizzId: "fizzVal",
    buzzId: "buzzId",
    submitId: "submitArgs",
    clearId: "clearContent",
    ogContent: "<h2>Original Content</h2>",
    rootEl: {},
    args: {
        beg: 1,
        end: 100,
        fizz: 3,
        buzz: 5
    },
    handleSubmit: function (ev) {
        console.log("Handling Submit");
        // console.log("Old endVal is" + appState.endVal);
        appState.args.beg = parseInt(document.getElementById(appState.begId).value);
        appState.args.end = parseInt(document.getElementById(appState.endId).value);

        for (let i = appState.args.beg; i < appState.args.end; i++) {
            //TODO create function for creating elementwith arguments(tag, className, content, parent)
            const newDiv = document.createElement('div');
            newDiv.className = "myred";
            newDiv.innerText = "Content is " + i;
            appState.rootEl.appendChild(newDiv);
        }

        //TODO create new element (div or p) with innerText of  document.getElementById(appState.endId).value
    },
    handleClear: (ev) => {
        console.log("Handling Clear");
        // console.log("Old endVal is" + appState.endVal);
        //TODO remove ALL elements under contentbox
        document.getElementById(appState.contentId).innerHTML = appState.ogContent;

    },
    initializeState: function () {
        console.log("Initialize State");
        this.rootEl = document.getElementById(this.contentId);
        document.getElementById(this.submitId).onclick = this.handleSubmit;
        document.getElementById(this.clearId).onclick = this.handleClear;
    }
}



// You can add more functions here 
function main() {
    console.log("Starting main");
    appState.initializeState();


}


