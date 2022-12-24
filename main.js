const textToReduce = document.getElementById('textToReduce')
const convertBtn = document.getElementById('convertBtn')
const reducedOutput = document.getElementById('reducedOutput')

convertBtn.addEventListener('click', function(){
    
    let charsArray = textToReduce.value.split("")
    console.log(charsArray)
    for (let index = 0; index < charsArray.length; index++) {
        //console.log(`regex ${/^[a-zA-Z]*$/.test(charsArray[index])}`)
        //const element = charsArray[index];
        if(charsArray[index] === 'P' /* || charsArray[index] === 'PH' */){
            charsArray[index] = 'B'
        }
        if(charsArray[index] === 'p' /* || charsArray[index] === 'ph' */){
            charsArray[index] = 'b'
        }
        ///////////////////////////
    /*     if(charsArray[index] === 'TH'){
            charsArray[index] = 'D'
        }
        if(charsArray[index] === 'th'){
            charsArray[index] = 'd'
        } */
        ///////////////////////////
        if(charsArray[index] === 'V'){
            charsArray[index] = 'F'
        }
        if(charsArray[index] === 'v'){
            charsArray[index] = 'f'
        }
        ///////////////////////////
        if(charsArray[index] === 'J'){
            charsArray[index] = 'G'
        }
        if(charsArray[index] === 'j'){
            charsArray[index] = 'f'
        }
        ///////////////////////////
        if(charsArray[index] === 'Q' || charsArray[index] === 'K' /* || charsArray[index] === 'S' */){
            charsArray[index] = 'C'
        }
        if(charsArray[index] === 'q' || charsArray[index] === 'k' /* || charsArray[index] === 's' */){
            charsArray[index] = 'c'
        }
        ///////////////////////////
    /*      if(charsArray[index] === 'U' || charsArray[index] === 'W'){
            charsArray[index] = 'O'
        }
        if(charsArray[index] === 'u' || charsArray[index] === 'w'){
            charsArray[index] = 'o'
        } */
        ///////////////////////////
           if(charsArray[index] === 'Z'){
            charsArray[index] = 'R'
        }
        if(charsArray[index] === 'z'){
            charsArray[index] = 'r'
        }
        ///////////////////////////
       /*  if(/^[a-zA-Z ]*$/.test(charsArray[index-1]) ){
            if(charsArray[index] === 'a' || charsArray[index] === 'w' || charsArray[index] === 'e' || charsArray[index] === 'y'|| charsArray[index] === 'u'|| charsArray[index] === 'i'|| charsArray[index] === 'o'|| charsArray[index] === 'i'){
                charsArray[index] = 'x'
            }
        } */
        //////////////////////////
        /* if(!/^[a-zA-Z']*$/.test(charsArray[index]) && /^[a-zA-Z]*$/.test(charsArray[index+1])){
            charsArray[index+1] = 'x'
        } */
        //if(/^[a-zA-Z]*$/.test(charsArray[index]) && /^[a-zA-Z]*$/.test(charsArray[index+1])){
        //    if(charsArray[index+1] == 'W' || charsArray[index+1] == 'w' || charsArray[index+1] == 'E' || charsArray[index+1] == 'e' || charsArray[index+1] == 'U' || charsArray[index+1] == 'u' || charsArray[index+1] == 'I' || charsArray[index+1] == 'i' || charsArray[index+1] == 'O' || charsArray[index+1] == 'o' || charsArray[index+1] == 'A' || charsArray[index+1] == 'a'){
        //        charsArray[index+1] = ''
        //    }
           /*  if(charsArray[index+1] == 'e' || charsArray[index+1] == 'i'){
                charsArray[index+1] = 'a'
            }
            ////////////////////////////////
            if(charsArray[index+1] == 'W' || charsArray[index+1] == 'U'){
                charsArray[index+1] = 'O'
            }
            if(charsArray[index+1] == 'w' || charsArray[index+1] == 'u'){
                charsArray[index+1] = 'o'
            } */
        //}
    }
    reducedOutput.textContent = charsArray.join('')
    
})


//Drag keyboard
const closeDiv = document.getElementById("close-div")
const headContainer = document.getElementById("head-container")

const arCloseDiv = document.getElementById("ar-close-div")
const arHeadContainer = document.getElementById('ar-head-container')

//let left = ComputedStyle.left
function onDrag(e){
    let left = parseInt(window.getComputedStyle(headContainer).left)
    let top = parseInt(window.getComputedStyle(headContainer).top)
    headContainer.style.left = `${left + e.movementX}px`
    headContainer.style.top = `${top + e.movementY}px`
    console.log(e)
    closeDiv.style.cursor = 'move'
}
function arOnDrag(e){
    let left = parseInt(window.getComputedStyle(arHeadContainer).left)
    let top = parseInt(window.getComputedStyle(arHeadContainer).top)
    arHeadContainer.style.left = `${left + e.movementX}px`
    arHeadContainer.style.top = `${top + e.movementY}px`
    console.log(e)
    arCloseDiv.style.cursor = 'move'
}


closeDiv.addEventListener('mousedown', ()=>{
    document.addEventListener('mousemove', onDrag)
})
document.addEventListener('mouseup', ()=>{
    document.removeEventListener('mousemove', onDrag)
})

/////////
arCloseDiv.addEventListener('mousedown', ()=>{
    document.addEventListener('mousemove', arOnDrag)
})
document.addEventListener('mouseup', ()=>{
    document.removeEventListener('mousemove', arOnDrag)
})
//hooking up keys
const keys = document.querySelectorAll('.keyboardBtn')
keys.forEach(function(key){
    key.addEventListener('click', (e)=>{
        textToReduce.value += e.target.innerHTML
    })
})


//////////
const virtualKeyboard = document.getElementById('virtual-keyboard')
const xVirtualkeyboard = document.getElementById('x-virtualkeyboard')
headContainer.classList.add('displaynone')
virtualKeyboard.addEventListener('click', ()=>{
    headContainer.classList.toggle('displaynone')
})
xVirtualkeyboard.addEventListener('click',()=>{
    headContainer.classList.add('displaynone')
})

///////////////

 window.addEventListener("keydown", function(e) {
     if(e.code == 'KeyQ'){
         e.preventDefault();
     }
 }, false);


 /////////////
 /* const arabicPattern = /[\u0600-\u06FF]/;

 textToReduce.addEventListener('input', function(ev) {

    var text = ev.target.value;
console.log('change')
    //if (arabicPattern.test(text)) {
        textToReduce.style.direction = 'auto'
    //}


}); */

////////////
const keysAr = document.querySelectorAll('.ar-keyboardBtn')
keysAr.forEach(function(key){
    key.addEventListener('click', (e)=>{
        textToReduce.value += e.target.innerHTML
    })
})

const arVirtualKeyboard = document.getElementById('ar-virtual-keyboard')
const arxVirtualkeyboard = document.getElementById('ar-x-virtualkeyboard')
headContainer.classList.add('displaynone')
arVirtualKeyboard.addEventListener('click', ()=>{
    arHeadContainer.classList.toggle('displaynone')
})
arHeadContainer.classList.add('displaynone')
arxVirtualkeyboard.addEventListener('click',()=>{
    arHeadContainer.classList.add('displaynone')
})

/////////////////
const ltrBtn = document.getElementById('ltr-btn')
const rtlBtn = document.getElementById('rtl-btn')

ltrBtn.addEventListener('click', ()=>{
    textToReduce.style.direction = 'ltr'
})
rtlBtn.addEventListener('click', ()=>{
    textToReduce.style.direction = 'rtl'
})