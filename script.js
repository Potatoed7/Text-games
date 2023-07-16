var part = -1
//automation
ids = ["text1", "text2", "text1"]

window.onload = function() {
    

    
    document.body.addEventListener("click", story)
}

function story() {
    part += 1;
    switch (part) {
        case 0:
            fade_new_text("goodbye world");
            break;
        case 1:
            fade_new_text("Filler 1");
            break;
        case 2:
            fade_new_text("Filler 2")
            break;
    }
}

  
function fade_new_text(newtext) {
    //automation of id
    let oldid = ids[part%2]
    let newid = ids[part%2 +1]


    //Does not allow u to skip     (MWAHAHAHAHHAHAHAH)
    if (document.getElementById(oldid).classList.contains("fade-in-text")) {
        console.log("skip")
        part -= 1;
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
    setTimeout( function() { clear_all(oldid,newid) }, 4000);
}

function clear_all(oldId, newId) {
    document.getElementById(oldId).remove();
    
    document.getElementById(newId).classList.remove("fade-in-text");
}