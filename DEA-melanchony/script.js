var part = 10;
var prevPart = 10;
var username = " ";
//automation
ids = ["text1", "text2", "text1"]

window.onload = function() {
    
    document.body.addEventListener("click", story);
}

function story() {
    prevPart = part
    part += 1;
    switch (part) {
        case 11:
            //fade_new_text("As dawn breaks, a new day befalls. \nWhat is your name, traveller?: "); //umm idk needd new func
            break;
        case 12:
            fade_new_text("Hmm... ", username, "... A beautiful name to grace the Wasteland.");
            break;
        case 13:
            fade_new_text("You find yourself awaking from your slumber, propped against a tree. You lay in an open dried-up field, not a soul in sight except for a few animals in the distance.\n TIP: Press ENTER to continue the story.");
            break;
        case 14:
            fade_new_text("You gaze at your hand, resting your palm on the object, a rifle. Its mahogany stock was weathered and greenish-blue lichen was starting to grow in between its cracks.");
            break;
        case 15:
            fade_new_text('You gaze into the distance, you see two figures, a silohuette of a deer grazing on grass and a suspicious speck bent over on the ground a few feet away from the deer, as if it is feeding on something. You pick up your rifle and take aim, you shoot at... \n1) The deer \n2) The suspicious speck \n3) Nothing [Put your rifle away] \nTIP: type "1, 2 or 3" to select options \n\tneed to make new func for choices'); // 
    }
}


function fade_new_text(newtext) {
    //automation of id
    let oldid = ids[part%2];
    let newid = ids[part%2 +1];


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
    setTimeout( function() { clear_all(oldid,newid) }, 2000);
}

function clear_all(oldId, newId) {
    document.getElementById(oldId).remove();
    
    document.getElementById(newId).classList.remove("fade-in-text");
}
