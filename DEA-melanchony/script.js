var part = 10;
var prevPart = 10;
var username = "";
//automation
ids = ["text1", "text2", "text1"]

window.onload = function() {
    
    document.getElementById("base").addEventListener("click", story);
}

function story() {
    prevPart = part
    part += 1;
    switch (part) {
        case 11:
            fade_new_text("As dawn breaks, a new day befalls. \nWhat is your name, traveller?: ");
            tip("TIP: Click the Submit button to enter input.");
            showInput();
            break;
        case 12:
            hideTip()
            hideInput();
            if (username) {
                fade_new_text("Hmm... "+ username+ " ... A beautiful name to grace the Wasteland.");
            } else {
                fade_new_text("Hmm... You don't have a name? Well it doesn't matter.");
            }
            setTimeout(function() { tip("TIP: Click anywhere to continue the story.") }, 500);
            break;
        case 13:
            
            fade_new_text("You find yourself awaking from your slumber, propped against a tree. You lay in an open dried-up field, not a soul in sight except for a few animals in the distance.");
            break;
        case 14:
            fade_new_text("You gaze at your hand, resting your palm on the object, a rifle. Its mahogany stock was weathered and greenish-blue lichen was starting to grow in between its cracks.");
            hideTip();
            break;
        case 15:
            tip("TIP: select the button option")
            fade_new_text('You gaze into the distance, you see two figures, a silohuette of a deer grazing on grass and a suspicious speck bent over on the ground a few feet away from the deer, as if it is feeding on something. You pick up your rifle and take aim, you shoot at... \n1) The deer \n2) The suspicious speck \n3) Nothing [Put your rifle away]');  
    }
}


function fade_new_text(newtext) {
    //automation of id
    let oldid = ids[part%2 +1];
    let newid = ids[part%2 ];


    //Does not allow u to skip     (MWAHAHAHAHHAHAHAH)
    if (document.getElementById(oldid).classList.contains("fade-in-text")) {
        console.log("skip");
        part = prevPart;
        //document.getElementById(oldid).classList.remove("fade-in-text");   //makes the new one pop in
        return;
    }

    //old text things
    document.getElementById(oldid).classList.add("fade-out-text");
    document.getElementById(oldid).style = "z-index:-1;";
    
    //create new div
    let newText = document.createElement('div');
    newText.id = newid;
    newText.classList.add("texts");

    //append to the div thats  display is relative
    document.getElementById("main").append(newText);

    //new text things
    newText.innerText = newtext;
    newText.classList.add("fade-in-text");
    
    //clear the things
    setTimeout( function() { clear_all(oldid,newid) }, 1950);
}

function clear_all(oldId, newId) {
    document.getElementById(oldId).remove();
    
    document.getElementById(newId).classList.remove("fade-in-text");
}

function tip(theTip) {
    document.getElementById("tips").innerText = theTip;         
    document.getElementById("tips").classList.remove("invis");
}
function hideTip() {
    document.getElementById("tips").classList.add("invis")
}



function showInput() {
    document.getElementById("input").classList.remove("invis")
    document.getElementById("submit").classList.remove("invis")
    document.getElementById("input").disabled = false
    document.getElementById("submit").disabled = false
}
function hideInput() {
    document.getElementById("input").classList.add("invis")
    document.getElementById("submit").classList.add("invis")
    document.getElementById("input").disabled = true
    document.getElementById("submit").disabled = true
}
function getUser() {
    username = document.getElementById("input").value
    story()
}


function showOptions() {

}