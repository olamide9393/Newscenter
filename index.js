
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