window.onload = main;



const appState = {

    contentId: "contentbox",
    begId: "begVal",
    endId: "endVal",
    fizzId: "fizzVal",
    buzzId: "buzzId",
    submitId: "submitArgs",
    clearId: "clearContent",
    handleSubmit: function (ev) {
        console.log("Handling Submit");
        // console.log("Old endVal is" + appState.endVal);
        console.log("Current endVal is: " + document.getElementById(appState.endId).value);
        //TODO create new element (div or p) with innerText of  document.getElementById(appState.endId).value
    },
    handleClear: (ev) => {
        console.log("Handling Clear");
        // console.log("Old endVal is" + appState.endVal);
        //TODO remove ALL elements under contentbox
    }
}



// You can add more functions here 
function main() {
    console.log("Starting main");
    document.getElementById(appState.submitId).onclick = appState.handleSubmit;
    document.getElementById(appState.clearId).onclick = appState.handleClear;

}


