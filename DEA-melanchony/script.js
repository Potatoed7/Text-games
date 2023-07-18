///// CREATE SAVES USING LOCALSTORAGE

//global var
var part = 100; // 1.00
var prevPart = 100;
var username = "";
var option = 78 // (wrong)
//automation
ids = ["text1", "text2", "text1"]


// event click listener
window.onload = function() {
    
    document.getElementById("base").addEventListener("click", function() {
        part += 1;
        story();
    });
}


//story
function story() {
    console.log(prevPart)
    console.log(part)
    switch (part) {
        case 101:
            fade_new_text("As dawn breaks, a new day befalls. \nWhat is your name, traveller?: ");
            tip("TIP: Click the Submit button to enter input.");
            showInput();
            break;
        case 102:
            hideTip()
            hideInput();
            if (username) {
                fade_new_text("Hmm... "+ username+ "... A beautiful name to grace the Wasteland.");
            } else {
                fade_new_text("Hmm... You don't have a name? Well it doesn't matter.");
            }
            setTimeout(function() { tip("TIP: Click anywhere to continue the story.") }, 500);
            break;
        case 103:
            
            fade_new_text("You find yourself awaking from your slumber, propped against a tree. You lay in an open dried-up field, not a soul in sight except for a few animals in the distance.");
            break;
        case 104:
            fade_new_text("You gaze at your hand, resting your palm on the object, a rifle. Its mahogany stock was weathered and greenish-blue lichen was starting to grow in between its cracks.");
            hideTip();
            break;
        case 105:
            tip("TIP: select the button option")
            fade_new_text('You gaze into the distance, you see two figures, a silohuette of a deer grazing on grass and a suspicious speck bent over on the ground a few feet away from the deer, as if it is feeding on something. You pick up your rifle and take aim, you shoot at... \n1) The deer \n2) The suspicious speck \n3) Nothing [Put your rifle away]');  
            showOptions();
            break;
        case 106:
            // next case must be same (even/odd)
            checkOption(120, 150, 200);
            break;
        case 120: 
            fade_new_text("[You shoot at the deer] \nYou fire an accurate shot, killing the deer instantly. The gunshot echoes throughout the field. Suddenly the speck from earlier freezes. It rises from the ground and faces you. Many more like it rise from the tall grass and hastily trudge their way towards you. A hoard of them is fast approaching and there's no way you can take them all and escape alive... \nYou died... Restarting from checkpoint.");
            // remove ltr when dying is done
            hideOptions();
            part = prevPart-1
            break;
        case 121:
            //death effect + warning thing


            part = prevPart-1;
            break;
        case 150:
            fade_new_text("[You shoot at the suspicious speck] \nYour gut tells you something isn't right about that thing and you should just kill it. You fire a well placed shot at what you think is its head and it slumps over as a fine red mist erupts from it. Soon, more figures like it emerge from the ground, probably to avenge the death of their bretheren... No... There's not even a shred of humanity left in them, just mindless beings driven by hunger. And you are their next target... \nYou died... Restarting from checkpoint.")
            hideOptions();
            // add some death effect (css)
            part = prevPart-1;
            break;
        // CHAPTER 2
        case 200:
            fade_new_text("[You do nothing and put your rifle away] \nA gut feelig tells you that satisfying your trigger happiness isn't that great of an idea and you sling your rifle over your shoulder and you quietly get up. You feel uneasy about the speck and you think not alerting it at all would be a wise decision. You gingerly get up and jog away from the field, periodically taking quick glances behind you to make sure you weren't followed.")
            hideOptions();
    }

    prevPart = part;

}
//end of story
// functions


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
    document.getElementById(oldid).style = "z-index:-10;";
    
    //create new div
    let newText = document.createElement('div');
    newText.id = newid;
    newText.classList.add("texts");

    //append to the div thats  display is relative
    document.getElementById("main").prepend(newText);

    //new text things
    newText.innerText = newtext;
    newText.classList.add("fade-in-text");
    
    //clear the things
    setTimeout( function() { 
        document.getElementById(oldid).remove();
        document.getElementById(newid).classList.remove("fade-in-text");
    }, 1950);
}


function tip(theTip) {
    document.getElementById("tips").innerText = theTip;         
    document.getElementById("tips").classList.remove("invis");
}
function hideTip() {
    document.getElementById("tips").classList.add("invis")
}



function showInput() {
//Does not allow u to skip     (MWAHAHAHAHHAHAHAH)
    let oldid = ids[part%2 +1];
    if (document.getElementById(oldid).classList.contains("fade-in-text")) {
        return;
    }

    document.getElementById("input").classList.add("fade-in-element")
    document.getElementById("submit").classList.add("fade-in-element")
    document.getElementById("input").classList.remove("invis")
    document.getElementById("submit").classList.remove("invis")
}
function hideInput() {
//Does not allow u to skip     (MWAHAHAHAHHAHAHAH)
    let oldid = ids[part%2 +1];
    if (document.getElementById(oldid).classList.contains("fade-in-text")) {
        return;
    }
    
    document.getElementById("input").classList.add("invis")
    document.getElementById("submit").classList.add("invis")
    document.getElementById("input").classList.remove("fade-in-element")
    document.getElementById("submit").classList.remove("fade-in-element")
    document.getElementById("input").classList.add("fade-out-element")
    document.getElementById("submit").classList.add("fade-out-element")

    setTimeout(function(){
        document.getElementById("input").classList.remove("fade-out-element")
        document.getElementById("submit").classList.remove("fade-out-element")
    }, 1200)
}
function getUser() {
    username = document.getElementById("input").value;
    story();
}



function showOptions() {
//Does not allow u to skip     (MWAHAHAHAHHAHAHAH)
    let oldid = ids[part%2 +1];
    if (document.getElementById(oldid).classList.contains("fade-in-text")) {
        return;
    }

    document.getElementById("options").classList.remove("invis");
    document.getElementById("options").classList.add("fade-in-element");
}
function hideOptions() {
//Does not allow u to skip     (MWAHAHAHAHHAHAHAH)
    let oldid = ids[part%2 +1];
    if (document.getElementById(oldid).classList.contains("fade-in-text")) {
        return;
    }

    document.getElementById("options").classList.add("invis");
    document.getElementById("options").classList.remove("fade-in-element");
    document.getElementById("options").classList.add("fade-out-element");
    setTimeout(function(){
        document.getElementById("options").classList.remove("fade-out-element")
    }, 1200)

}


function getOption() {
    option = parseInt(this.innerText);
    console.log(option);
    part += 1;
    story();
}
// DEBUG need some way to change prevpart to be correct
function checkOption(op1Part, op2Part, op3Part) {
    if (option == 78) {
        part = prevPart
        return 
    }
    //option 1
    if (option == 1) {
        part = op1Part;
        console.log("1 chosen");
    }
    //option 2
    if (option == 2) {
        part = op2Part;
        console.log("2 chosen");
    }
    //option 3
    if (option == 3) {
        part = op3Part;
        console.log("3 chosen");
    }
    //reset option
    option = 78;
    story();
}
