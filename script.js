$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
let apMeter = 100;
let hpMeter = 100;

function onReady() {
$('#entangleAttk').on('click' , entangleAttack)
$('#sceptreAttk').on('click' , scepterAttack)
$('#dragonBladeAttk').on('click' , dragonBladeAttack)
$('#starFireAttk').on('click' , starFireAttack)
}

// ENTANGLE ATTACK //
function entangleAttack(){
    entangleChangeAp()
    entangleChangeHp()
}    

function entangleChangeAp(){
    $('.ap-meter').val(apMeter -= 9)
    $('.ap-text').text(`${apMeter} AP`)
}

function entangleChangeHp(){
    $('.hp-meter').val(hpMeter -= 23)
    $('.hp-text').text(`${hpMeter} HP`)
}
    
// SCEPTRE ATTACK //
function scepterAttack(){
    scepterChangeAp()
    scepterChangeHp()
}    

function scepterChangeAp(){
    $('.ap-meter').val(apMeter -= 12)
    $('.ap-text').text(`${apMeter} AP`)
}

function scepterChangeHp(){
    $('.hp-meter').val(hpMeter -= 14)
    $('.hp-text').text(`${hpMeter} HP`)
}

// DRAGON BLADE //
function dragonBladeAttack(){
    dragonBladeChangeAp()
    dragonBladeChangeHp()
}    

function dragonBladeChangeAp(){
    $('.ap-meter').val(apMeter -= 38)
    $('.ap-text').text(`${apMeter} AP`)
}

function dragonBladeChangeHp(){
    $('.hp-meter').val(hpMeter -= 47)
    $('.hp-text').text(`${hpMeter} HP`)
}

//STAR FIRE//
function starFireAttack(){
    starFireChangeAp()
    starFireChangeHp()
}    

function starFireChangeAp(){
    $('.ap-meter').val(apMeter -= 33)
    $('.ap-text').text(`${apMeter} AP`)
}

function starFireChangeHp(){
    $('.hp-meter').val(hpMeter -= 25)
    $('.hp-text').text(`${hpMeter} HP`)
}
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM

