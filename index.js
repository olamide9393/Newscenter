
  var wraper = document.querySelectorAll('.wraper');
  var btn = document.querySelector('.btn');
   var currentiming = 2
   btn.addEventListener('click',
   function() {
    console.log('hi');
    for(var i =currentiming;
    i<currentiming+2;i++ ) {
      if(wraper[i]){
        wraper[i].style.display= 'block';
      }
    }
    currentiming += 2;
    if(currentiming>=wraper.length){
      event.target.style.display='none';
    }
   }
   )





   let zaRo = 0;
let wordIndex = 0;
let sentences= ["WELCOME TO THE NEW CENTER" ];





function startText() {
    if (zaRo>=sentences.length) {
        zaRo=0
    }
    let write = sentences[zaRo]

    writeText(write) 
}
startText()

function writeText(word) { 
    wordType.innerHTML+= word[wordIndex]
    wordIndex++
   setTimeout(() => {
    if (word[wordIndex]) {
        writeText(word)
    } else {
        wordIndex=0
        zaRo++
        setTimeout(() => {
            deletee()
        }, 1000);
    }
    
   }, 100);
}

function deletee() {
    let cut = wordType.innerHTML.toString()
    let a = cut.slice( cut,-1)

    wordType.innerHTML =a
     setTimeout(() => {
        if (wordType.innerHTML=='') {
            startText()
           }
           else{
             deletee()
           }
    }, 100);
    
}







// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}